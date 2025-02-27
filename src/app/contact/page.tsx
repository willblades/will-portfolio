"use client";

import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+1 (604) 356-5561",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "will.blades@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Tatlow Avenue, North Vancouver, BC V7P3A1 Canada",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.7, ease: "easeIn" }}
      className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <ul className="flex flex-col items-center space-y-12">
        <h1 className="h3 text-accent items-center justify-center ml-[-155px]">Reach out to me at:</h1>
          {info.map((item, index) => (
            <li key={index} className="w-full max-w-md">
              <div className="grid grid-cols-[3rem,1fr] gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent text-primary rounded-full">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
