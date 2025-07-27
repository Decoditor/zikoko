import React from "react";
import { motion } from "motion/react";
function Motion() {
  return (
    <div className="mt-10 border min-h-60">
      <motion.div
        animate={{
          x: 200,
          y: 100,
          skewY: 20,
        }}
        className="bg-red-300 w-20 h-20"
      />
    </div>
  );
}

export default Motion;
