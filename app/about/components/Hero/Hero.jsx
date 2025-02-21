'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from "../../../../styles";
import { slideIn, staggerContainer, textVariant } from "../../../../utils/motion"

const Hero = () => (
  <div className="relative max-w-[1750px] lg:pt-20 md:px-6 mx-auto pt-10 flex items-center justify-between">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={textVariant(1.1)}
        className="flex flex-col justify-center items-center relative z-10"
      >
        <h1 className="text-white font-bold text-[64px] leading-[80px] text-center">
        AI Solutions That Redefine Possibilities
        </h1>
        <h2 className="text-[#c7c7c7] font-normal text-[20px] leading-[32px] text-center mt-4 mb-8">
        Empowering businesses with intelligent tools, predictive analytics, and automation to unlock new growth opportunities
        </h2>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <Image
          src="/ai/ai-bg.png"
          alt="hero_cover"
          layout="responsive"
          width={500}
          height={350}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default Hero;