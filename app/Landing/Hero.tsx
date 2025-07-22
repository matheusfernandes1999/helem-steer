"use client";
import Image from "next/image";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";
import Button from "../Components/Button";
import { motion } from "framer-motion";

// Animation variants with smooth, elegant timing
const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.1, 0.25, 1.0],
      opacity: { duration: 1.0 },
      y: { duration: 1.2 },
      filter: { duration: 0.8 }
    }
  }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50, filter: "blur(2px)" },
  animate: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.4, 
      ease: [0.25, 0.1, 0.25, 1.0],
      opacity: { duration: 1.2 },
      x: { duration: 1.4 },
      filter: { duration: 1.0 }
    }
  }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50, scale: 0.95, filter: "blur(2px)" },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1.6, 
      ease: [0.25, 0.1, 0.25, 1.0],
      opacity: { duration: 1.4 },
      x: { duration: 1.6 },
      scale: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] },
      filter: { duration: 1.2 }
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9, y: 20, filter: "blur(3px)" },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1.5, 
      ease: [0.25, 0.1, 0.25, 1.0],
      opacity: { duration: 1.2 },
      scale: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] },
      y: { duration: 1.3 },
      filter: { duration: 1.0 }
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-start w-screen px-12 pb-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center justify-center w-full flex-1">
        {/* Main content row */}
        <motion.div 
          className="flex flex-row items-center justify-center w-full flex-1"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="w-full"
            variants={fadeInLeft}
          >
            <motion.div variants={fadeInUp}>
              <Text type="title"><Span>Helem Steer</Span></Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text type="subtitle">Descubra como <Span>transformar sua carreira</Span> com uma mentoria exclusiva</Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text type="info" className="mt-2 max-w-[80%]">Com 26 anos de experiência e 17 deles vividos na Inglaterra, Helem Steer <Span>ajudou centenas de professores</Span> a darem o próximo passo profissional com aulas de altíssimo nível.</Text>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-max h-auto"
            variants={fadeInRight}
            whileInView={{ 
              scale: [1, 1.01, 1],
              transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }
            }}
          >
            <Image priority src={"/images/mentora-helem.png"} alt="Helem com olhar sério e cativante." width={600} height={600} />
          </motion.div>
        </motion.div>
        
        {/* Desktop CTA Button at bottom */}
        <motion.div 
          className="w-full flex justify-center relative bottom-20"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 1.2, 
            ease: [0.25, 0.1, 0.25, 1.0],
            scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }
          }}
          whileHover={{ 
            y: -2, 
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <Button text={<>Quero transformar minha<br className="hidden md:block" />carreira agora</>}/>
        </motion.div>
      </div>
      
      {/* Mobile Layout */}
      <motion.div 
        className="flex md:hidden flex-col items-center justify-start w-full flex-1 space-y-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Title */}
        <motion.div 
          className="text-center hidden md:hidden lg:block"
          variants={fadeInUp}
        >
          <Text type="title"><Span>Helem Steer</Span></Text>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="w-full max-w-sm max-h-[35%] sm:h-auto"
          variants={scaleIn}
          whileInView={{ 
            scale: [1, 1.02, 1],
            transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
          }}
        >
          <Image priority src={"/images/mentora-helem.png"} alt="Helem com olhar sério e cativante." width={400} height={400} className="w-full h-auto" />
        </motion.div>
        
        {/* Main subtitle text */}
        <motion.div 
          className="text-center w-screen"
          variants={fadeInUp}
        >
          <Text type="subtitle">Descubra como <Span>transformar sua carreira</Span> com uma mentoria exclusiva</Text>
        </motion.div>
        
        {/* Info text (full width below) */}
        <motion.div 
          className="w-screen px-4 text-center"
          variants={fadeInUp}
        >
          <Text type="info" className="mt-2">Com 26 anos de experiência e 17 deles vividos na Inglaterra, Helem Steer <Span>ajudou centenas de professores</Span> a darem o próximo passo profissional com aulas de altíssimo nível.</Text>
        </motion.div>
        
        {/* Button (always at bottom) */}
        <motion.div 
          className=""
          variants={fadeInUp}
        >
          <Button text={<>Quero transformar <br className="hidden md:block" /> minha carreira agora</>}/>
        </motion.div>
      </motion.div>
    </section>
  );
}