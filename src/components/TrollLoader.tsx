import { motion } from "framer-motion";

export default function TrollLoader() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#1a1a1a] overflow-hidden text-white font-mono">
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          animate={{
            x: [0, 8, -8, -12, 12, 0],
            y: [0, -8, 5, -5, 8, 0],
            rotate: [0, 3, -3, 6, -6, 0],
            color: [
              "#E0E0E0",
              "#AB5DEE",
              "#1CDD33",
              "#AB5DEE",
              "#FF0000",
              "#E0E0E0",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          404 หาบ่พ้อ
        </motion.h1>
        <p className="text-base md:text-lg mt-5 opacity-50 text-center">
          (บ่เป็นหยังดอก หยอกๆ กำลังโหลดอยู่... ถ่าจักคราวเด้อ!)
        </p>
      </div>
    </div>
  );
}
