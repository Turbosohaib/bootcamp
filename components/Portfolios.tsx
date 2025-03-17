"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolios = [
    {
        id: 1,
        name: "Next.js 3D Portfolio",
        role: "Front-End Project",
        description: "A Next.js project featuring Tailwind CSS, Framer Motion, and Three.js for interactive 3D models and animations.",
        image: "/assets/portfolio1.png", // Replace with actual image path
        link: "https://sohaibportfoliov1.vercel.app", // Replace with actual link
    },
    {
        id: 2,
        name: "React Motion UI",
        role: "Front-End Project",
        description: "A React-based project utilizing Tailwind CSS and Framer Motion to create a dynamic and visually engaging UI.",
        image: "/assets/portfolio2.png", // Replace with actual image path
        link: "https://sohaibportfoliov2.vercel.app", // Replace with actual link
    },
];

const Portfolios = () => {
    return (
        <section id="portfolios" className="w-full flex justify-center items-center py-16">
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
                        My Portfolios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="max-w-2xl mx-auto text-muted-foreground md:text-lg"
                    >
                        Explore some of my best work in web development.
                    </motion.p>
                </div>

                {/* Portfolio Cards */}
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center"
                >
                    {portfolios.map((portfolio) => (
                        <motion.a
                            key={portfolio.id}
                            href={portfolio.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 transition flex flex-col items-center text-center"
                        >
                            <Image
                                src={portfolio.image}
                                alt={portfolio.name}
                                width={200} // Increased size
                                height={200}
                                className="w-48 h-48 rounded-full border-4 border-gray-200 shadow-md object-cover"
                            />
                            <h3 className="text-2xl font-bold mt-4">{portfolio.name}</h3>
                            <p className="text-muted-foreground text-sm">{portfolio.role}</p>
                            <p className="text-gray-600 mt-2">{portfolio.description}</p>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolios;
