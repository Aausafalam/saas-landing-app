"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, CheckCircle, BarChart, Users, BookOpen, Laptop, Globe, Award, Clock, Star, Phone, Play, Zap, BookOpenCheck, GraduationCap, Trophy, Target } from "lucide-react";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import InputField from "@/components/form/components/FieldTemplates/InputField";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleResize = () => setIsMenuOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
            {/* Animated background shapes */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-100 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-100 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
                        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        EduFlow
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#features" className="hover:text-blue-600 transition-colors">
                            Features
                        </Link>
                        <Link href="#testimonials" className="hover:text-blue-600 transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="hover:text-blue-600 transition-colors">
                            Pricing
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Button href="/institute/login" flat={true} variant="dark" outlined={true}>
                            Sign In
                        </Button>
                        <Button href="/institute/login" variant="dark" className="hidden md:inline-flex">
                            Get Started
                        </Button>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white shadow-lg rounded-b-lg">
                        <nav className="flex flex-col p-4 space-y-4">
                            <Link href="#features" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Features
                            </Link>
                            <Link href="#testimonials" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Testimonials
                            </Link>
                            <Link href="#pricing" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </Link>
                            <Button href="/institute/login" variant="dark" className="w-full">
                                Get Started
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-[8rem] px-4 overflow-hidden">
                <motion.div className="container mx-auto flex flex-col lg:flex-row items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Empower Your <span className="text-blue-600">Learning Journey</span> with EduFlow
                        </motion.h1>
                        <motion.p className="text-xl mb-8 text-gray-600" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                            Streamline your educational experience with our cutting-edge LMS platform. Engage, learn, and grow like never before.
                        </motion.p>
                        <motion.div className="flex" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
                            <Button href="/institute/login" variant="dark" flat={true} size="lg" className="mr-4">
                                Get Started
                            </Button>
                            <Button href="/institute/login" variant="dark" flat={true} outlined={true} size="lg">
                                Book a Demo
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div className="lg:w-1/2 relative" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                            alt="Students collaborating"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl"
                        />
                        <motion.div
                            className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <BarChart className="w-8 h-8 text-blue-600 mb-2" />
                            <p className="font-semibold">Track Your Progress</p>
                            <p className="text-sm text-gray-600">Real-time analytics</p>
                        </motion.div>
                        <motion.div
                            className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <Users className="w-8 h-8 text-blue-600 mb-2" />
                            <p className="font-semibold">Collaborate</p>
                            <p className="text-sm text-gray-600">Learn together</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="absolute bottom-2 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ChevronDown className="w-8 h-8 text-blue-600" />
                </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="relative text-3xl font-bold text-center mb-12">Powerful Features for Modern Learning</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Interactive Courses", description: "Engage with dynamic content and real-time collaboration tools." },
                            { icon: BarChart, title: "Progress Tracking", description: "Monitor your learning journey with detailed analytics and insights." },
                            { icon: Users, title: "Community Learning", description: "Connect with peers and experts in your field of study." },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Categories Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="relative text-3xl font-bold mb-4">Explore Our Course Categories</h2>
                        <p className="relative text-gray-600 max-w-2xl mx-auto">Discover courses in various fields to enhance your skills and advance your career</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Laptop, name: "Technology", courses: "150+ Courses" },
                            { icon: Globe, name: "Business", courses: "200+ Courses" },
                            { icon: BookOpen, name: "Design", courses: "120+ Courses" },
                            { icon: Users, name: "Marketing", courses: "180+ Courses" },
                            { icon: Award, name: "Personal Development", courses: "90+ Courses" },
                            { icon: Star, name: "Data Science", courses: "160+ Courses" },
                            { icon: Clock, name: "Language", courses: "100+ Courses" },
                            { icon: Trophy, name: "Health & Fitness", courses: "80+ Courses" },
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="font-semibold mb-2">{category.name}</h3>
                                <p className="text-sm text-gray-600">{category.courses}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Journey Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="relative text-3xl font-bold mb-4">Your Learning Journey</h2>
                        <p className="relative text-gray-600 max-w-2xl mx-auto">Follow a structured path to success with our comprehensive learning approach</p>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block" />
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Target, title: "Set Goals", description: "Define your learning objectives and career aspirations" },
                                { icon: BookOpenCheck, title: "Learn", description: "Access expert-led courses and hands-on projects" },
                                { icon: Users, title: "Practice", description: "Apply your knowledge through interactive exercises" },
                                { icon: GraduationCap, title: "Achieve", description: "Earn certificates and reach your goals" },
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="relative bg-white rounded-xl p-6 shadow-lg text-center z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Preview Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <h2 className="relative text-3xl font-bold mb-6">Experience Interactive Learning</h2>
                            <p className="relative text-gray-600 mb-8">
                                Our platform offers an immersive learning experience with interactive video lessons, real-time collaboration, and hands-on projects.
                            </p>
                            <div className="grid gap-6">
                                {[
                                    { icon: Play, title: "Interactive Video Lessons", description: "Learn at your own pace with our engaging video content" },
                                    { icon: Zap, title: "Real-time Feedback", description: "Get instant feedback on your progress and performance" },
                                    { icon: Users, title: "Collaborative Learning", description: "Connect and learn with peers from around the world" },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className=" relative flex items-start gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="relative aspect-video bg-white rounded-xl shadow-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Course preview"
                                    width={800}
                                    height={450}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                                    <Button icon={<Play className="w-6 h-6 mr-2" />} rounded={true} size="lg" className="rounded-full">
                                        Watch Preview
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Mobile app preview"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                                    <Phone className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="relative order-1 lg:order-2" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <h2 className="text-3xl font-bold mb-6">Learn Anywhere, Anytime</h2>
                            <p className="text-gray-600 mb-8">Take your learning on the go with our mobile app. Access courses, track progress, and connect with peers - all from your smartphone.</p>
                            <div className="grid gap-6">
                                {["Offline course access", "Progress tracking", "Mobile-optimized content", "Push notifications", "Cross-device sync"].map((feature, index) => (
                                    <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 flex gap-4">
                                <Button
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.112 0H6.888C5.294 0 4 1.294 4 2.888v18.224C4 22.706 5.294 24 6.888 24h10.224c1.594 0 2.888-1.294 2.888-2.888V2.888C20 1.294 18.706 0 17.112 0zm-5.224 22.024c-.696 0-1.264-.569-1.264-1.264s.568-1.264 1.264-1.264 1.264.569 1.264 1.264-.568 1.264-1.264 1.264z" />
                                        </svg>
                                    }
                                    size="lg"
                                    outlined={true}
                                    flat={true}
                                    className="gap-2"
                                >
                                    App Store
                                </Button>
                                <Button
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.685 0 .271.11.513.29.685.181.181.423.29.685.29.271 0 .513-.11.685-.29L15.207 12 4.979 1.814c-.181-.181-.423-.29-.685-.29-.271 0-.513.11-.685.29z" />
                                        </svg>
                                    }
                                    size="lg"
                                    outlined={true}
                                    className="gap-2"
                                    flat={true}
                                >
                                    Play Store
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Success Metrics Section */}
            <section className="relative py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
                        <p className="max-w-2xl mx-auto opacity-90">Join thousands of successful learners who have transformed their careers through EduFlow</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "1M+", label: "Active Learners" },
                            { number: "2000+", label: "Expert Instructors" },
                            { number: "5000+", label: "Courses Available" },
                            { number: "95%", label: "Success Rate" },
                        ].map((stat, index) => (
                            <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="opacity-90">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="relative text-3xl font-bold mb-6">Get Certified, Get Ahead</h2>
                            <p className="relative text-gray-600 mb-8">Earn industry-recognized certificates upon course completion and showcase your skills to potential employers.</p>
                            <div className="grid gap-6">
                                {[
                                    { title: "Industry Recognition", description: "Certificates valued by top employers worldwide" },
                                    { title: "Skill Verification", description: "Demonstrate your expertise with practical assessments" },
                                    { title: "Career Advancement", description: "Use certificates to enhance your professional profile" },
                                ].map((item, index) => (
                                    <motion.div key={index} className="relative flex gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Award className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <Button variant="dark" flat={true} size="lg" className="relative mt-8">
                                Start Learning Now
                            </Button>
                        </div>
                        <motion.div className="relative" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Certification"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                                    <Trophy className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="relative text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Student",
                                quote: "EduFlow has transformed my learning experience. The interactive courses and progress tracking keep me motivated and on track.",
                            },
                            {
                                name: "Mark Thompson",
                                role: "Instructor",
                                quote: "As an educator, EduFlow provides me with powerful tools to create engaging content and monitor student progress effectively.",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <p className="relative text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="relative flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-600 font-semibold">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="relative text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Basic", price: "$29", features: ["Access to all courses", "Progress tracking", "Mobile access"] },
                            { name: "Pro", price: "$59", features: ["Everything in Basic", "Certificates", "Priority support"] },
                            { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Custom integrations", "Dedicated account manager"] },
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <p className="text-4xl font-bold mb-6">
                                    {plan.price}
                                    <span className="text-sm font-normal">{plan.name !== "Enterprise" ? "/month" : ""}</span>
                                </p>
                                <ul className="mb-8 space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/institute/login" variant="dark" flat={true} outlined={index === 1 ? false : true} className="w-full">
                                    {index === 2 ? "Contact Sales" : "Get Started"}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Learning Experience?</h2>
                        <p className="text-xl mb-8">Join thousands of students and educators who are already benefiting from EduFlow s powerful learning platform.</p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center">
                            <InputField formField={{ id: "email", name: "email", placeholder: "Enter your email", type: "email" }} />
                            <Button size="lg" href="/institute/login" variant="dark" flat={true}>
                                Get Started
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">EduFlow</h4>
                            <p className="text-gray-400">Empowering education through technology</p>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Quick Links</h5>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Support</h5>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Connect With Us</h5>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2023 EduFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
