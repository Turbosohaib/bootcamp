"use client"
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full flex justify-center items-center mx-auto py-12 md:py-24 lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                <span className="text-purple-700">Launch</span> Your Career in <br />
                                <span className="text-indigo-600">Web Development</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Join our <span className="font-semibold text-purple-700">intensive bootcamp</span> and learn <span className="text-indigo-600">modern web development</span> from industry experts. Gain the skills employers are looking for in just <span className="font-bold text-green-600">12 weeks</span>.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="default"
                                    className="bg-[#2E0534] text-white"
                                >
                                    <Link href="/apply">
                                        Contact Us<ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button variant="outline" size="lg" className="border-indigo-500 hover:border-indigo-700 text-indigo-700 hover:text-indigo-900">
                                    <Link href="#curriculum">View Curriculum</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src="/assets/bootcamp.png"
                            width={550}
                            height={550}
                            alt="Students coding together"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl sm:w-full lg:order-last"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
