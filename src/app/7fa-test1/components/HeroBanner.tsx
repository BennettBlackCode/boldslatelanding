"use client";

import { motion } from "motion/react";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1f0a]">
      {/* Layer 1: Base Jungle Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/jungle-pedestal.jpg')`,
          }}
        />
      </motion.div>

      {/* Layer 2: Animated Light Rays from top-left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main ray beam */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5 
          }}
          className="absolute -top-20 -left-20 w-[600px] h-[800px] origin-top-left"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(200, 230, 180, 0.08) 30%,
              transparent 60%
            )`,
            transform: "rotate(25deg)",
            filter: "blur(40px)",
          }}
        />
        {/* Secondary ray */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute -top-10 left-20 w-[400px] h-[600px] origin-top-left"
          style={{
            background: `linear-gradient(
              140deg,
              rgba(180, 220, 150, 0.12) 0%,
              transparent 50%
            )`,
            transform: "rotate(30deg)",
            filter: "blur(30px)",
          }}
        />
        {/* Accent ray */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-0 left-40 w-[300px] h-[500px] origin-top"
          style={{
            background: `linear-gradient(
              150deg,
              rgba(255, 255, 200, 0.1) 0%,
              transparent 40%
            )`,
            transform: "rotate(20deg)",
            filter: "blur(25px)",
          }}
        />
      </div>

      {/* Layer 3: Atmospheric mist/fog overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(200, 230, 200, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(0, 30, 20, 0.4) 0%, transparent 50%)
          `,
        }}
      />

      {/* Layer 4: Vine frame overlay on edges */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left vine shadow */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48"
          style={{
            background: `linear-gradient(to right, rgba(5, 25, 10, 0.7) 0%, transparent 100%)`,
          }}
        />
        {/* Right vine shadow */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48"
          style={{
            background: `linear-gradient(to left, rgba(5, 25, 10, 0.7) 0%, transparent 100%)`,
          }}
        />
        {/* Top vine shadow */}
        <div
          className="absolute top-0 left-0 right-0 h-24 md:h-32"
          style={{
            background: `linear-gradient(to bottom, rgba(5, 25, 10, 0.5) 0%, transparent 100%)`,
          }}
        />
        {/* Bottom ground shadow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 md:h-48"
          style={{
            background: `linear-gradient(to top, rgba(5, 25, 10, 0.8) 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Layer 5: Main Content - Glassmorphic Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="w-full max-w-4xl"
        >
          {/* Card wrapper - no floating */}
          <div>
            {/* Main Glass Card */}
            <div
              className="relative rounded-3xl md:rounded-[2rem] p-6 md:p-10 lg:p-12"
              style={{
                background: `linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.12) 0%,
                  rgba(255, 255, 255, 0.05) 100%
                )`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.4),
                  0 0 0 1px rgba(255, 255, 255, 0.05) inset,
                  0 -20px 40px -20px rgba(150, 200, 150, 0.1) inset
                `,
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 rounded-3xl md:rounded-[2rem] pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 30% 0%, rgba(200, 255, 200, 0.08) 0%, transparent 50%)`,
                }}
              />

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center mb-8 md:mb-12"
              >
                <h1 
                  className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight"
                  style={{ color: "#FFFFFF" }}
                >
                  Welcome 7FA Members,
                  <br />
                  <span className="font-normal" style={{ color: "#FFFFFF" }}>
                    let&apos;s make your agency run like software.
                  </span>
                </h1>
              </motion.div>

              {/* Two Option Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* AgencyX2 Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative rounded-2xl p-8 md:p-10 text-center transition-all duration-300"
                    style={{
                      background: `linear-gradient(
                        145deg,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(255, 255, 255, 0.03) 100%
                      )`,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: `0 10px 40px -10px rgba(0, 0, 0, 0.3)`,
                    }}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at center, rgba(100, 200, 150, 0.15) 0%, transparent 70%)`,
                      }}
                    />
                    <span className="relative z-10 text-2xl md:text-3xl font-medium text-white">
                      AgencyX2
                    </span>
                  </div>
                </motion.div>

                {/* Custom Builds Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative rounded-2xl p-8 md:p-10 text-center transition-all duration-300"
                    style={{
                      background: `linear-gradient(
                        145deg,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(255, 255, 255, 0.03) 100%
                      )`,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: `0 10px 40px -10px rgba(0, 0, 0, 0.3)`,
                    }}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at center, rgba(100, 200, 150, 0.15) 0%, transparent 70%)`,
                      }}
                    />
                    <span className="relative z-10 text-2xl md:text-3xl font-medium text-white">
                      Custom Builds
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Layer 6: Foreground particles/atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
