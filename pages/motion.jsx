import React from "react";
import { motion } from "framer-motion";

function MotionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ciGrayText">
      <motion.p
        initial={{ y:-200 }}
        animate={{ y:0}}
        transition={{duration:1.5,type:'spring',stiffness:150}}
        className="text-2xl font-bold absolute"
      >
        سلامم
      </motion.p>
    </div>
  );
}

export default MotionPage;
