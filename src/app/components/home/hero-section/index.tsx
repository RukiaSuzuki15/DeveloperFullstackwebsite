"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative hero-section overflow-hidden pt-20 md:pt-32 pb-12 lg:pb-28 xl:pt-40"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Image (anim au scroll une seule fois) */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/home/banner/banner-img.png"
              alt="banner-img"
              width={500}
              height={450}
              className="w-full max-w-lg h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            className="flex flex-col gap-4 md:gap-6 max-w-3xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-4 md:gap-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                I am Hadjira
              </motion.h1>

              {/* Wave qui s’agite en boucle */}
              <motion.div
                className="wave"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Image
                  src="/images/home/banner/wave-icon.svg"
                  alt="wave-icon"
                  width={60}
                  height={60}
                />
              </motion.div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Full-Stack Developer
            </h2>

            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Welcome to my webpage. I am a full-stack developer offering services 
              across frontend and backend. Contact me via email or phone below.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
