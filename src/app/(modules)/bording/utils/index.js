const { default: boardingConstants } = require("./constants");

class BoardingUtils {
    static capitalizeSentence(sentence, capitalizeAll = true) {
        if (typeof sentence !== "string") {
            throw new TypeError("Input must be a string");
        }

        const trimmedSentence = sentence.trim();

        if (capitalizeAll) {
            const words = trimmedSentence.split(/\s+/);
            const capitalizedWords = words.map((word) => {
                if (word.length === 0) return "";
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            });
            return capitalizedWords.join(" ");
        } else {
            if (trimmedSentence.length === 0) return "";
            return trimmedSentence[0].toUpperCase() + trimmedSentence.slice(1).toLowerCase();
        }
    }
    static getInstituteOptions() {
        return Object.values(boardingConstants.INSTITUTE_TYPES || {}).map((instituteType) => ({ value: instituteType, label: this.capitalizeSentence(instituteType) }));
    }
    static getGenericOptions() {
        return Object.values(boardingConstants.GENDER_TYPE || {}).map((genderType) => ({ value: genderType, label: this.capitalizeSentence(genderType) }));
    }
}

export default BoardingUtils;
