"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FAQ = () => {
    return (
        <section
            id="faq"
            className="w-full flex justify-center items-center mx-auto py-12 md:py-24 lg:py-32"
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
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
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Find answers to common questions about our bootcamp.
                        </motion.p>
                    </div>
                </motion.div>

                {/* FAQ Cards */}
                <motion.div
                    className="mx-auto grid max-w-5xl gap-6 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        {
                            question: "Do I need prior coding experience?",
                            answer:
                                "No prior experience is required, but basic computer literacy is necessary. We start with the fundamentals and progress to advanced topics.",
                        },
                        {
                            question: "What is the time commitment?",
                            answer:
                                "The bootcamp runs for 12 weeks, Monday through Friday, 2pm to 4pm. Expect to spend additional time on projects and homework.",
                        },
                        {
                            question: "What is the cost of the bootcamp?",
                            answer:
                                "Fee is Rs 30,000 40% off. Contact us for more information.",
                        },
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border p-6 shadow-md bg-white/60 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            variants={itemVariants}
                        >
                            <h3 className="text-lg font-bold">{faq.question}</h3>
                            <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQ;
