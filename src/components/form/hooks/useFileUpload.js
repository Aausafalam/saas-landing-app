import { useCallback, useState } from "react";

export const useFileUploadHandler = (handleInputChange, setGroupPreviewUrls, previewUrl, setPreviewUrl, setFormValues) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileDelete = useCallback(
        (name, groupIndex, fieldName) => {
            if (groupIndex == undefined) {
                setPreviewUrl(null);
            } else {
                setGroupPreviewUrls((prev) => {
                    const newPreviewUrls = { ...prev };

                    if (fieldName && groupIndex !== undefined) {
                        // For grouped inputs
                        if (newPreviewUrls[name]?.[groupIndex]) {
                            // Revoke object URL if it exists
                            const fileInfo = newPreviewUrls[name][groupIndex];
                            if (fileInfo.preview) {
                                URL.revokeObjectURL(fileInfo.preview);
                            }

                            // Remove the file from preview URLs
                            delete newPreviewUrls[name][groupIndex];
                        }
                    } else {
                        // For non-grouped inputs
                        if (newPreviewUrls[name]) {
                            // Revoke object URL if it exists
                            if (previewUrl.preview) {
                                URL.revokeObjectURL(previewUrl.preview);
                            }

                            // Remove the file from preview URLs
                            delete newPreviewUrls[name];
                        }
                    }

                    return newPreviewUrls;
                });
            }

            // Remove from form values
            setFormValues((prev) => {
                const newValues = { ...prev };

                if (fieldName && groupIndex !== undefined) {
                    // For grouped inputs
                    if (newValues[fieldName]?.[groupIndex]) {
                        delete newValues[fieldName][groupIndex][name];
                    }
                } else {
                    // For non-grouped inputs
                    delete newValues[name];
                }

                return newValues;
            });
        },
        [previewUrl]
    );

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e, name, disabled, readonly, groupIndex, fieldName, uploadFunction) => {
        e.preventDefault();
        setIsDragging(false);

        if (disabled || readonly) return;

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleInputChange({ target: { files, name, type: "file" } }, groupIndex, fieldName, uploadFunction);
        }
    };

    return {
        isDragging,
        setIsDragging,
        handleFileDelete,
        handleDragOver,
        handleDragLeave,
        handleDrop,
    };
};
