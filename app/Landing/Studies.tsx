"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  text: {
    line1: string;
    line2: string;
  };
  position?: "top-left" | "top-right" | "bottom-right";
};

const overlayPosition = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-right": "bottom-4 right-4",
};

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  text,
  position = "top-left",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transform
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="object-cover w-full h-full"
      />

      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-10" />

      {/* Overlay Text */}
      <div
        className={`absolute ${overlayPosition[position]} z-20 text-white text-lg sm:text-xl font-bold leading-tight drop-shadow-md`}
      >
        <p>{text.line1}</p>
        <p>{text.line2}</p>
      </div>
    </motion.div>
  );
};

export const BrightonShowcase: React.FC = () => {
  return (
    <div className="mt-12 p-4 sm:p-8 rounded-xl space-y-4 w-full md:w-[75%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ImageCard
          src="/images/university-1.png"
          alt="Campus 1"
          text={{
            line1: "MA TESOL",
            line2: "University of Brighton"
          }}
          position="top-left"
        />
        <ImageCard
          src="/images/university-2.png"
          alt="Campus 2"
          text={{
            line1: "East Sussex College",
            line2: ""
          }}
          position="top-left"
        />
      </div>
      <div>
        <ImageCard
          src="/images/university-3.png"
          alt="Campus 3"
          text={{
            line1: "University of Brighton",
            line2: ""
          }}
          position="top-left"
        />
      </div>
    </div>
  );
};