"use client";
import Image from "next/image";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";
import Button from "../Components/Button";
import { motion, Variants } from "framer-motion";

// Animation variants with smooth, elegant timing
const fadeInUp: Variants = {
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

const fadeInLeft: Variants = {
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

const fadeInRight: Variants = {
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

const scaleIn: Variants = {
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

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-start w-screen">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center justify-center w-full flex-1 px-12 py-4">
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
      <div className="w-fit px-6 pb-6 mx-auto flex md:hidden flex-col items-start">
      <div className="flex flex-row w-full">
        <div className="flex-1">
          <h1 className="text-[#7310dc] text-[26px] font-semibold mb-2 leading-tight min-w-max">
            Helem Steer
          </h1>

          <p className="text-base font-semibold leading-[17px] text-[#b3b3b3] mb-4">
            Descubra como{" "}
            <span className="text-[#7310dc]">transformar sua <br /> carreira</span> com uma mentoria exclusiva
          </p>

          <p className="text-[8px] font-semibold text-[#b3b3b3] opacity-75 leading-normal max-w-[90%]">
            Com 26 anos de experiência e 17 deles vividos na Inglaterra,{" "}
            <span className="text-[#7310dc]">Helem Steer ajudou <br /> centenas de professores</span> a darem o próximo passo
            profissional com aulas de <br />
            altíssimo nível.
          </p>
        </div>

        <div className="flex-shrink-0 ml-auto">
          <Image
            src={"/images/mentora-helem.png"}
            alt="Mentoria image"
            width={177}
            height={265}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <button className="bg-[#7310dc] text-[#e2e2e2] text-[8px] font-bold py-2 px-4 rounded-lg w-[120px] h-9 text-center">
          Quero transformar minha carreira agora
        </button>
      </div>
    </div>
    </section>
  );
}