'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpDown, Smartphone, Volume2, Shield } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof ArrowUpDown;
}

const features: Feature[] = [
  {
    id: 'height-adjust',
    title: 'Sit to Stand',
    subtitle: '24.4" - 50" Range',
    description: 'Seamlessly transition between sitting and standing throughout your day. The dual-motor system moves at 1.5 inches per second with smooth, precise control.',
    icon: ArrowUpDown,
  },
  {
    id: 'wireless-charging',
    title: 'Wireless Charging',
    subtitle: 'Built-in Qi Pad',
    description: 'Drop your phone on the integrated wireless charging pad in the keypad. No cables, no hassle—just power when you need it.',
    icon: Smartphone,
  },
  {
    id: 'whisper-quiet',
    title: 'Whisper Quiet',
    subtitle: '< 45dB Operation',
    description: 'Take video calls while adjusting your desk height. Our precision-engineered motors operate quieter than a normal conversation.',
    icon: Volume2,
  },
  {
    id: 'rock-solid',
    title: 'Rock Solid',
    subtitle: '300lb Capacity',
    description: 'Military-grade steel construction with anti-wobble technology. Your monitors stay perfectly steady at any height.',
    icon: Shield,
  },
];

// Animated desk SVG that responds to height
function AnimatedDesk({ isStanding }: { isStanding: boolean }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Floor */}
      <rect x="0" y="155" width="200" height="5" fill="#E5E5E0" rx="2" />

      {/* Left leg */}
      <motion.g
        animate={{ y: isStanding ? 0 : 40 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <rect x="30" y="60" width="8" height="95" fill="#2C2F21" rx="2" />
        <rect x="28" y="150" width="12" height="5" fill="#2C2F21" rx="1" />
      </motion.g>

      {/* Right leg */}
      <motion.g
        animate={{ y: isStanding ? 0 : 40 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <rect x="162" y="60" width="8" height="95" fill="#2C2F21" rx="2" />
        <rect x="160" y="150" width="12" height="5" fill="#2C2F21" rx="1" />
      </motion.g>

      {/* Desktop */}
      <motion.g
        animate={{ y: isStanding ? 0 : 40 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Wood grain effect */}
        <rect x="15" y="50" width="170" height="12" fill="#8B5A2B" rx="2" />
        <rect x="20" y="52" width="40" height="2" fill="#A0522D" opacity="0.5" rx="1" />
        <rect x="70" y="54" width="60" height="2" fill="#A0522D" opacity="0.5" rx="1" />
        <rect x="140" y="52" width="35" height="2" fill="#A0522D" opacity="0.5" rx="1" />

        {/* Monitor */}
        <rect x="75" y="20" width="50" height="30" fill="#2C2F21" rx="2" />
        <rect x="78" y="23" width="44" height="24" fill="#4A5568" rx="1" />
        <rect x="95" y="50" width="10" height="5" fill="#2C2F21" />

        {/* Keyboard */}
        <rect x="70" y="55" width="35" height="4" fill="#3D4030" rx="1" />

        {/* Coffee cup */}
        <rect x="130" y="48" width="8" height="10" fill="#BA4B1A" rx="1" />
        <rect x="138" y="51" width="3" height="4" fill="#BA4B1A" rx="1" />
      </motion.g>

      {/* Person silhouette */}
      <motion.g
        animate={{ y: isStanding ? -20 : 20 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Head */}
        <circle cx="100" cy={isStanding ? 5 : 25} r="8" fill="#5C5F52" />
        {/* Body */}
        <motion.path
          d={isStanding
            ? "M100 13 L100 45 M85 25 L100 20 L115 25 M95 45 L100 45 L105 45"
            : "M100 33 L100 55 M88 40 L100 38 L112 40 M90 70 L100 55 L110 70"
          }
          stroke="#5C5F52"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}

// Animated wireless charging
function AnimatedCharging() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Keypad base */}
      <rect x="50" y="80" width="100" height="60" fill="#2C2F21" rx="8" />
      <rect x="55" y="85" width="90" height="50" fill="#3D4030" rx="6" />

      {/* LED display */}
      <rect x="65" y="95" width="40" height="15" fill="#1a1a1a" rx="2" />
      <text x="70" y="107" fill="#4ADE80" fontSize="10" fontFamily="monospace">28.5"</text>

      {/* Charging pad area */}
      <circle cx="130" cy="110" r="15" fill="#1a1a1a" />

      {/* Phone on charging pad */}
      <motion.g>
        <rect x="118" y="98" width="24" height="24" fill="#374151" rx="3" />
        <rect x="120" y="100" width="20" height="20" fill="#1f2937" rx="2" />

        {/* Charging waves */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="130"
            cy="110"
            r="20"
            fill="none"
            stroke="#D3841E"
            strokeWidth="2"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Battery icon on phone */}
        <motion.g
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <rect x="126" y="107" width="8" height="6" fill="none" stroke="#4ADE80" strokeWidth="1" rx="1" />
          <rect x="134" y="109" width="1" height="2" fill="#4ADE80" />
          <motion.rect
            x="127"
            y="108"
            width="6"
            height="4"
            fill="#4ADE80"
            initial={{ width: 0 }}
            animate={{ width: 6 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>
      </motion.g>

      {/* Memory preset buttons */}
      {[1, 2, 3, 4].map((num, i) => (
        <g key={num}>
          <rect x={60 + i * 12} y="115" width="10" height="10" fill="#4B5563" rx="2" />
          <text x={63 + i * 12} y="123" fill="#9CA3AF" fontSize="6">{num}</text>
        </g>
      ))}
    </svg>
  );
}

// Animated sound waves
function AnimatedQuiet() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Desk representation */}
      <rect x="30" y="100" width="140" height="8" fill="#8B5A2B" rx="2" />
      <rect x="45" y="108" width="6" height="45" fill="#2C2F21" rx="1" />
      <rect x="149" y="108" width="6" height="45" fill="#2C2F21" rx="1" />

      {/* Motor housing */}
      <rect x="80" y="108" width="40" height="20" fill="#3D4030" rx="3" />

      {/* Sound waves (very subtle) */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M${125 + i * 10} 118 Q${130 + i * 10} 110 ${125 + i * 10} 102`}
          fill="none"
          stroke="#D3841E"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.6, 0], pathLength: [0, 1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* dB meter */}
      <g>
        <rect x="60" y="30" width="80" height="40" fill="#1a1a1a" rx="4" />
        <text x="75" y="55" fill="#4ADE80" fontSize="16" fontFamily="monospace">
          <motion.tspan
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            42 dB
          </motion.tspan>
        </text>
        <text x="68" y="45" fill="#6B7280" fontSize="8">NOISE LEVEL</text>

        {/* Sound bars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x={130 + i * 6}
            y={60 - (i < 2 ? (i + 1) * 8 : 16)}
            width="4"
            height={(i < 2 ? (i + 1) * 8 : 16)}
            fill={i < 2 ? '#4ADE80' : '#374151'}
            rx="1"
            animate={i < 2 ? { scaleY: [1, 0.7, 1] } : {}}
            transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </g>

      {/* Comparison text */}
      <text x="100" y="150" fill="#5C5F52" fontSize="8" textAnchor="middle">
        Quieter than a whisper
      </text>
    </svg>
  );
}

// Animated stability
function AnimatedStability() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Floor */}
      <rect x="0" y="150" width="200" height="10" fill="#E5E5E0" rx="2" />

      {/* Desk - rock solid, no wobble */}
      <g>
        {/* Desktop with heavy load */}
        <rect x="25" y="60" width="150" height="10" fill="#8B5A2B" rx="2" />

        {/* Multiple monitors */}
        <rect x="35" y="25" width="35" height="35" fill="#2C2F21" rx="2" />
        <rect x="38" y="28" width="29" height="29" fill="#4A5568" rx="1" />

        <rect x="80" y="20" width="40" height="40" fill="#2C2F21" rx="2" />
        <rect x="83" y="23" width="34" height="34" fill="#4A5568" rx="1" />

        <rect x="130" y="25" width="35" height="35" fill="#2C2F21" rx="2" />
        <rect x="133" y="28" width="29" height="29" fill="#4A5568" rx="1" />

        {/* Steel frame legs with reinforcement */}
        <rect x="40" y="70" width="10" height="80" fill="#2C2F21" rx="1" />
        <rect x="150" y="70" width="10" height="80" fill="#2C2F21" rx="1" />

        {/* Crossbar */}
        <rect x="40" y="100" width="120" height="6" fill="#3D4030" rx="1" />

        {/* Weight indicator */}
        <motion.g
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <rect x="75" y="2" width="50" height="16" fill="#BA4B1A" rx="8" />
          <text x="100" y="13" fill="white" fontSize="8" textAnchor="middle" fontWeight="bold">300 LBS</text>
        </motion.g>
      </g>

      {/* Stability indicators */}
      {[-1, 1].map((dir) => (
        <motion.g key={dir}>
          <motion.line
            x1={100 + dir * 70}
            y1="85"
            x2={100 + dir * 85}
            y2="85"
            stroke="#4ADE80"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: dir > 0 ? 0 : 1 }}
          />
          <motion.path
            d={`M${100 + dir * 85} 80 L${100 + dir * 90} 85 L${100 + dir * 85} 90`}
            fill="none"
            stroke="#4ADE80"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: dir > 0 ? 0 : 1 }}
          />
        </motion.g>
      ))}

      {/* "NO WOBBLE" badge */}
      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <circle cx="100" cy="130" r="12" fill="#2C2F21" />
        <text x="100" y="128" fill="white" fontSize="5" textAnchor="middle">NO</text>
        <text x="100" y="135" fill="white" fontSize="5" textAnchor="middle">WOBBLE</text>
      </motion.g>
    </svg>
  );
}

const animations: Record<string, React.ReactNode> = {
  'height-adjust': <AnimatedDesk isStanding={true} />,
  'wireless-charging': <AnimatedCharging />,
  'whisper-quiet': <AnimatedQuiet />,
  'rock-solid': <AnimatedStability />,
};

// Height adjust needs state for animation
function HeightAdjustAnimation() {
  const [isStanding, setIsStanding] = useState(true);

  // Auto-toggle every 3 seconds
  useState(() => {
    const interval = setInterval(() => {
      setIsStanding((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  });

  return <AnimatedDesk isStanding={isStanding} />;
}

export default function ProductFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [isStanding, setIsStanding] = useState(true);

  // Auto-toggle height for the desk animation
  useState(() => {
    const interval = setInterval(() => {
      setIsStanding((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  });

  const currentFeature = features.find((f) => f.id === activeFeature)!;

  return (
    <section className="bg-[#2C2F21] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for <span className="text-[#BA4B1A]">Performance</span>
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Every detail engineered for the modern workspace
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Animation Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto w-full bg-[#1a1a1a] rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {activeFeature === 'height-adjust' ? (
                  <AnimatedDesk isStanding={isStanding} />
                ) : (
                  animations[activeFeature]
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Feature Tabs */}
          <div>
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      activeFeature === feature.id
                        ? 'bg-[#BA4B1A] text-white'
                        : 'bg-[#3D4030] text-[#9CA3AF] hover:bg-[#4D5040]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Feature Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-[#BA4B1A] font-semibold mb-4">
                  {currentFeature.subtitle}
                </p>
                <p className="text-[#9CA3AF] text-lg leading-relaxed">
                  {currentFeature.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
