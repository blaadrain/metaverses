'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidthS} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Insight"
        textStyles="text-center"
      />
      <TitleText
        title="Insight about metaverse"
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[50px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
