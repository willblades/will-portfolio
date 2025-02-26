"use client";

import {motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {

    return (
        <div className="w-full h-full relative">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 1.6,duration: 2, ease: "easeIn"}}>
                <div className="w-[298px] h-[298px] xl:w-[490px] xl:h-[400px] mix-blend-lighten">
                    <Image src="/will-portfolio/assets/profile.jpg" priority quality={100} fill className="object-contain" alt="" />
                </div>
            </motion.div>
        </div>
    )
}        
export default Photo;

