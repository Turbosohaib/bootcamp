"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Curriculum = () => {
    return (
        <section id="curriculum" className="w-full py-16 md:py-24 lg:py-32">
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container px-6 md:px-12 lg:px-16 mx-auto text-center"
            >
                {/* Heading */}
                <motion.h2
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900"
                >
                    What You&apos;ll Learn
                </motion.h2>
                <motion.p
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-4 max-w-2xl mx-auto text-lg text-gray-700"
                >
                    Our comprehensive curriculum covers everything you need to become a
                    full-stack web developer.
                </motion.p>

                {/* Course Sections */}
                <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-16">
                    {/* Front-End Section */}
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="p-6 bg-white shadow-xl rounded-2xl"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Front-End Development
                        </h3>
                        <motion.ul
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2 },
                                },
                            }}
                            className="mt-4 space-y-3 text-sm md:text-base lg:text-lg text-start text-gray-700" // Fixed text sizes
                        >
                            {[
                                "HTML5, CSS3, and JavaScript (ES6+)",
                                "React.js and Next.js",
                                "Responsive Design and CSS Frameworks",
                                "State Management (Redux, Context API)",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                    {/* Added flex-shrink-0 to prevent resizing */}
                                    <div>{item}</div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Back-End Section */}
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="p-6 bg-white shadow-xl rounded-2xl"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Back-End Development
                        </h3>
                        <motion.ul
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2 },
                                },
                            }}
                            className="mt-4 space-y-3 text-sm md:text-base lg:text-lg text-start text-gray-700" // Fixed text sizes
                        >
                            {[
                                "Node.js and Express",
                                "RESTful API Design",
                                "Database Design (SQL and NoSQL)",
                                "Authentication and Authorization",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                                    {/* Added flex-shrink-0 to prevent resizing */}
                                    <div>{item}</div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Curriculum;
