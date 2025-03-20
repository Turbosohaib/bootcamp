"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "./Form";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="w-full flex justify-center items-center mx-auto py-12 md:py-24 lg:py-32"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="container px-4 md:px-6" variants={fadeIn}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div className="space-y-2" variants={fadeIn}>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have questions? We&apos;re here to help. Reach out to our team.
                        </p>
                    </motion.div>
                </div>
                <motion.div className="mx-auto grid max-w-4xl gap-6 py-12 lg:grid-cols-2" variants={fadeIn}>
                    <motion.div className="space-y-4" variants={fadeIn}>
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <span className="font-bold mr-2">Email:</span> turbosohaib1234@gmail.com
                            </p>
                            <p className="flex items-center">
                                <span className="font-bold mr-2">Phone:</span> +93 3079374126
                            </p>
                            <p className="flex items-start">
                                <span className="font-bold mr-2">Address:</span> Malakand Mardan Rd, Opposite Saddar police Station, 2nd Floor Above Shama Cash And Carry Mall
                            </p>
                        </div>
                        <div className="pt-4">
                            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-primary hover:text-primary/80">Twitter</Link>
                                <Link href="https://www.linkedin.com/in/sohaib-shah-b44a65270/" className="text-primary hover:text-primary/80">LinkedIn</Link>
                                <Link href="https://www.instagram.com/next_developer007/" className="text-primary hover:text-primary/80">Instagram</Link>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="space-y-4" variants={fadeIn}>
                        <h3 className="text-2xl font-bold">Send Us a Message</h3>
                        <Form />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;