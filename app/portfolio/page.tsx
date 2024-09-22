// pages/index.js
"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M400 600 Q 350 400 300 300 Q 250 200 200 150 Q 150 100 100 50"
            fill="none"
            stroke="green"
            strokeWidth="4"
            animate={{
              d: [
                "M400 600 Q 350 400 300 300 Q 250 200 200 150 Q 150 100 100 50",
                "M400 600 Q 370 450 300 300 Q 230 150 200 150 Q 150 100 100 50",
                "M400 600 Q 350 400 300 300 Q 250 200 200 150 Q 150 100 100 50",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M400 600 Q 450 400 500 300 Q 550 200 600 150 Q 650 100 700 50"
            fill="none"
            stroke="green"
            strokeWidth="4"
            animate={{
              d: [
                "M400 600 Q 450 400 500 300 Q 550 200 600 150 Q 650 100 700 50",
                "M400 600 Q 430 450 500 300 Q 570 150 600 150 Q 650 100 700 50",
                "M400 600 Q 450 400 500 300 Q 550 200 600 150 Q 650 100 700 50",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />
        </motion.svg>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <h2 className="text-2xl mb-4">Hello, I am Gnaneswar Lopinti, a web developer.</h2>
        <p className="text-xl mb-8">Explore my work and get in touch.</p>
      </div>
    </div>
  );
}