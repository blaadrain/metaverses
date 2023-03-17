'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidthXS} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Different worlds, different people"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[70px] w-full max-h-[550px] flex"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[70px] h-[70px] 
          p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-01.png"
            alt="People"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-[15%] left-[10%] w-[70px] h-[70px] 
          p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-02.png"
            alt="People"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] 
          p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="/people-03.png"
            alt="People"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
