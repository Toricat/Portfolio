//@ts-ignore
import React, { useRef } from "react";
//@ts-ignore
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import "@/styles/index.css";


import Section1 from '@/components/home/section1';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';




const Home: React.FC = () => {


  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />  

    </>

  );
}

export default Home;
