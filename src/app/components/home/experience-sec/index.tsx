"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2018",
            title: "Developper backend",
            company: "www.startup.com",
            type: "Fulltime",
            description: "Learn how to use tools like My SQL"
        },
        {
            year: "2019",
            title: "Data analist",
            company: "www.googly.com",
            type: "Remote",
            description: "Learn programming languages like python and R, use some tools like My SQL and machine learning programming"
        },
        {
            year: "2020-2022",
            title: "Mobile developer",
            company: "www.company.com",
            type: "Fulltime",
            description: "Work with plateforms like IOS and Android using languages such as swift, kotlin/java, Dart/javascript"
        },
        {
            year: "2023+",
            title: "network engineer",
            company: "www.latest.com",
            type: "Fulltime",
            description: "Learn how to connect any type of switch and routers "
        }
    ];

    return (
        <section id="experience">
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: false }}
                                        >
                                        </motion.div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
   
