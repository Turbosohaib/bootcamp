"use client";

import { Calendar, Code, Users } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
    return (
        <section
            id="about"
            className="w-full flex justify-center items-center mx-auto py-12 md:py-24 lg:py-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="container px-4 md:px-6"
            >
                {/* Heading & Description */}
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                            Why Choose Our Bootcamp?
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-[900px] text-gray-600 md:text-xl lg:text-lg"
                        >
                            Our bootcamp is designed to take you from beginner to job-ready
                            developer with hands-on projects and personalized mentorship.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {[
                        {
                            icon: <Users className="h-12 w-12 text-primary" />,
                            title: "Expert Instructors",
                            desc: "Learn from industry professionals with years of real-world experience.",
                        },
                        {
                            icon: <Code className="h-12 w-12 text-primary" />,
                            title: "Project-Based Learning",
                            desc: "Build a portfolio of real projects that demonstrate your skills to employers.",
                        },
                        {
                            icon: <Calendar className="h-12 w-12 text-primary" />,
                            title: "12-Week Intensive",
                            desc: "Fast-track your career with our focused, comprehensive curriculum.",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-3 rounded-xl border border-gray-300 p-6 shadow-md bg-white/60 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            variants={cardVariants}
                            viewport={{ once: true }}
                        >
                            {feature.icon}
                            <h3 className="text-xl font-semibold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-center text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Features;
