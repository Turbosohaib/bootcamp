"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Instructors = () => {
    return (
        <section
            id="instructors"
            className="w-full flex justify-center items-center py-16"
        >
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="container px-6 space-y-8 text-center"
            >
                {/* Heading */}
                <div className="space-y-2">
                    <motion.h2
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl font-bold tracking-tight sm:text-5xl"
                    >
                        Meet Your Instructor
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="max-w-2xl mx-auto text-muted-foreground md:text-lg"
                    >
                        Learn from an experienced developer who is passionate about teaching.
                    </motion.p>
                </div>

                {/* Instructor Card */}
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-full overflow-hidden border-4 border-gray-300"
                    >
                        <Image
                            src="/assets/sohaib.jpeg"
                            width={200}
                            height={200}
                            alt="Instructor"
                            className="rounded-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, color: "#4F46E5" }}
                        transition={{ duration: 0.3 }}
                        className="text-center space-y-2"
                    >
                        <a
                            href="https://portfolio1.example.com" // Replace with your actual portfolio link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-bold hover:text-blue-600 transition duration-300"
                        >
                            Sohaib Shah
                        </a>
                        <p className="text-sm text-muted-foreground">
                            Lead Instructor, Front-End
                        </p>
                        <p className="text-sm text-muted-foreground">
                            5+ years of experience at Connextar Technologies LTD.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Instructors;
