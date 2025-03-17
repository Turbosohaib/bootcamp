"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="w-full flex justify-center items-center mx-auto py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Ready to Start Your Journey?
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Applications for our next cohort are now open. Spaces are limited, so apply today!
                        </motion.p>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col gap-2 min-[400px]:flex-row pt-6 items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            asChild
                            size="lg"
                            variant="default"
                            className="bg-[#2E0534] text-white"
                        >
                            <Link href="/#contact">Contact Now</Link>
                        </Button>
                    </motion.div>

                    {/* <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button asChild size="lg" variant="outline">
                            <Link href="#contact">Contact Us</Link>
                        </Button>
                    </motion.div> */}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTA;
