"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={12}
            height={34}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto">
            {/* Titre */}
            <motion.div
              className="flex items-center justify-between gap-2 border-b border-black pb-7"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </motion.div>

            <div className="pt-10 xl:pt-16 flex flex-col lg:flex-row gap-10 items-center justify-between">
              {/* Image */}
              <motion.div
                className="w-[303px] h-[440px] hidden lg:flex"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={1000}
                  height={440}
                  className="w-full h-full"
                />
              </motion.div>

              {/* Texte + Infos */}
              <motion.div
                className="w-full lg:max-w-2xl flex-1"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="text-lg leading-relaxed">
                  I am a specialized full-stack developer, data analyst, and network engineer. 
                  I have completed 7 years of training in these domains, so I am well prepared.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "07", label: "Years of experience" },
                    { count: "165+", label: "Happy Clients" },
                    { count: "1800+", label: "Projects Completed" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold text-primary">{item.count}</h3>
                      <p className="text-base md:text-lg text-black">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Languages */}
                <motion.div
                  className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={25}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "French", "Spanish"].map((lang, i) => (
                      <motion.p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl shadow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {lang}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;