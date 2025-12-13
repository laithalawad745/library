export interface Gradient {
  id: string;
  name: string;
  gradient: string;
  category: 'dark' | 'colorful' | 'mixed' | 'animated' | 'premium';
  animation?: 'shift' | 'wave' | 'pulse' | 'rotate' | 'flow' | 'zoom';
}

export const gradients: Gradient[] = [
  // ========== PREMIUM THEMES (NEW) ==========
  {
    id: 'glass-morphism',
    name: 'Glass Morphism',
    gradient: `
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 128, 171, 0.3), transparent 50%),
      radial-gradient(circle at 40% 90%, rgba(88, 166, 255, 0.3), transparent 50%),
      linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)
    `,
    category: 'premium'
  },
  {
    id: 'aurora-dream',
    name: 'Aurora Dream',
    gradient: `
      radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.5), transparent 50%),
      radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.5), transparent 50%),
      radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.5), transparent 50%),
      linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%)
    `,
    category: 'premium',
    animation: 'flow'
  },
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    gradient: `
      linear-gradient(45deg, #ff0080 0%, #7928ca 25%, #0070f3 50%, #00dfd8 75%, #ff0080 100%),
      radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8), #000000)
    `,
    category: 'premium',
    animation: 'shift'
  },
  {
    id: 'liquid-sunset',
    name: 'Liquid Sunset',
    gradient: `
      radial-gradient(circle at 30% 20%, rgba(255, 107, 107, 0.6), transparent 40%),
      radial-gradient(circle at 70% 60%, rgba(255, 193, 69, 0.6), transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(254, 121, 104, 0.6), transparent 40%),
      linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'cosmic-particles',
    name: 'Cosmic Particles',
    gradient: `
      radial-gradient(circle at 15% 15%, rgba(138, 43, 226, 0.4), transparent 25%),
      radial-gradient(circle at 85% 20%, rgba(65, 105, 225, 0.4), transparent 25%),
      radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.3), transparent 30%),
      radial-gradient(circle at 20% 80%, rgba(0, 191, 255, 0.4), transparent 25%),
      radial-gradient(circle at 80% 85%, rgba(138, 43, 226, 0.3), transparent 25%),
      linear-gradient(180deg, #000000 0%, #0a0a1a 50%, #000000 100%)
    `,
    category: 'premium',
    animation: 'pulse'
  },
  {
    id: 'diamond-shine',
    name: 'Diamond Shine',
    gradient: `
      conic-gradient(from 45deg at 50% 50%, 
        rgba(255, 255, 255, 0.1) 0deg,
        rgba(99, 102, 241, 0.3) 90deg,
        rgba(168, 85, 247, 0.3) 180deg,
        rgba(236, 72, 153, 0.3) 270deg,
        rgba(255, 255, 255, 0.1) 360deg
      ),
      radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2), transparent 70%),
      linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)
    `,
    category: 'premium',
    animation: 'rotate'
  },
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    gradient: `
      radial-gradient(ellipse at top, rgba(6, 182, 212, 0.5), transparent 50%),
      radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.4), transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.4), transparent 50%),
      radial-gradient(circle at 60% 40%, rgba(96, 165, 250, 0.3), transparent 30%),
      linear-gradient(180deg, #001a33 0%, #002147 50%, #000d1a 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'magic-portal',
    name: 'Magic Portal',
    gradient: `
      radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.6) 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.5) 10%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 20%, transparent 50%),
      conic-gradient(from 180deg at 50% 50%,
        rgba(168, 85, 247, 0.2) 0deg,
        rgba(236, 72, 153, 0.2) 120deg,
        rgba(59, 130, 246, 0.2) 240deg,
        rgba(168, 85, 247, 0.2) 360deg
      ),
      linear-gradient(135deg, #0a0a14 0%, #14141f 100%)
    `,
    category: 'premium',
    animation: 'rotate'
  },
  {
    id: 'mesh-gradient-pro',
    name: 'Mesh Gradient Pro',
    gradient: `
      radial-gradient(at 0% 0%, rgba(253, 230, 138, 0.5) 0px, transparent 50%),
      radial-gradient(at 20% 30%, rgba(192, 132, 252, 0.5) 0px, transparent 50%),
      radial-gradient(at 40% 70%, rgba(96, 165, 250, 0.5) 0px, transparent 50%),
      radial-gradient(at 60% 30%, rgba(244, 114, 182, 0.5) 0px, transparent 50%),
      radial-gradient(at 80% 80%, rgba(167, 139, 250, 0.5) 0px, transparent 50%),
      radial-gradient(at 100% 10%, rgba(251, 191, 36, 0.5) 0px, transparent 50%),
      radial-gradient(at 50% 50%, rgba(139, 92, 246, 0.3) 0px, transparent 60%),
      linear-gradient(135deg, #0f0a1e 0%, #1a0a2e 100%)
    `,
    category: 'premium',
    animation: 'flow'
  },
  {
    id: 'grid-matrix',
    name: 'Grid Matrix',
    gradient: `
      repeating-linear-gradient(0deg, rgba(0, 255, 136, 0.05) 0px, rgba(0, 255, 136, 0.05) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(90deg, rgba(0, 255, 136, 0.05) 0px, rgba(0, 255, 136, 0.05) 1px, transparent 1px, transparent 40px),
      radial-gradient(circle at 20% 30%, rgba(0, 255, 136, 0.3), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 200, 255, 0.3), transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(0, 255, 200, 0.2), transparent 50%),
      linear-gradient(135deg, #000000 0%, #001a0d 50%, #000000 100%)
    `,
    category: 'premium',
    animation: 'shift'
  },
  {
    id: 'holographic',
    name: 'Holographic',
    gradient: `
      linear-gradient(125deg, rgba(255, 0, 128, 0.4) 0%, transparent 40%),
      linear-gradient(225deg, rgba(0, 255, 255, 0.4) 0%, transparent 40%),
      linear-gradient(315deg, rgba(255, 255, 0, 0.4) 0%, transparent 40%),
      linear-gradient(45deg, rgba(128, 0, 255, 0.4) 0%, transparent 40%),
      radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1), transparent 60%),
      conic-gradient(from 0deg at 50% 50%, 
        rgba(255, 0, 128, 0.2),
        rgba(255, 255, 0, 0.2),
        rgba(0, 255, 255, 0.2),
        rgba(128, 0, 255, 0.2),
        rgba(255, 0, 128, 0.2)
      ),
      linear-gradient(135deg, #0a0a0f 0%, #1a1a2f 100%)
    `,
    category: 'premium',
    animation: 'rotate'
  },
  {
    id: 'energy-field',
    name: 'Energy Field',
    gradient: `
      radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.6) 0%, transparent 25%),
      radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.6) 0%, transparent 25%),
      radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.5) 0%, transparent 30%),
      radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.5) 0%, transparent 20%),
      radial-gradient(circle at 80% 30%, rgba(192, 132, 252, 0.5) 0%, transparent 20%),
      radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.4) 0%, transparent 15%),
      radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.4) 0%, transparent 15%),
      repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 10px, rgba(59, 130, 246, 0.03) 10px, rgba(59, 130, 246, 0.03) 20px),
      linear-gradient(135deg, #000000 0%, #0a0520 50%, #000000 100%)
    `,
    category: 'premium',
    animation: 'pulse'
  },
  {
    id: 'nebula-cloud',
    name: 'Nebula Cloud',
    gradient: `
      radial-gradient(ellipse at 25% 25%, rgba(139, 92, 246, 0.6) 0%, transparent 35%),
      radial-gradient(ellipse at 75% 25%, rgba(236, 72, 153, 0.5) 0%, transparent 40%),
      radial-gradient(ellipse at 50% 60%, rgba(59, 130, 246, 0.5) 0%, transparent 45%),
      radial-gradient(ellipse at 20% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 35%),
      radial-gradient(ellipse at 80% 75%, rgba(244, 114, 182, 0.4) 0%, transparent 40%),
      radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.3) 0%, transparent 25%),
      radial-gradient(circle at 60% 70%, rgba(219, 39, 119, 0.3) 0%, transparent 30%),
      radial-gradient(at 50% 50%, rgba(88, 28, 135, 0.2) 0%, transparent 70%),
      linear-gradient(180deg, #000000 0%, #0d001a 30%, #1a0033 60%, #000000 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'cyber-grid-blue',
    name: 'Cyber Grid Blue',
    gradient: `
      repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.08) 0px, rgba(59, 130, 246, 0.08) 2px, transparent 2px, transparent 60px),
      repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.08) 0px, rgba(59, 130, 246, 0.08) 2px, transparent 2px, transparent 60px),
      radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.4), transparent 35%),
      radial-gradient(circle at 70% 60%, rgba(147, 197, 253, 0.3), transparent 40%),
      linear-gradient(135deg, #000000 0%, #001333 50%, #000000 100%)
    `,
    category: 'premium',
    animation: 'flow'
  },
  {
    id: 'neon-dots-pink',
    name: 'Neon Dots Pink',
    gradient: `
      repeating-radial-gradient(circle at 0 0, transparent 0, #1a1a2e 40px),
      repeating-linear-gradient(rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.15) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.15) 1px, transparent 1px, transparent 20px),
      radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.5), transparent 30%),
      radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.4), transparent 35%),
      linear-gradient(135deg, #0f0a14 0%, #1a0a1e 100%)
    `,
    category: 'premium',
    animation: 'shift'
  },
  {
    id: 'diagonal-waves-purple',
    name: 'Diagonal Waves',
    gradient: `
      repeating-linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0px, rgba(168, 85, 247, 0.05) 2px, transparent 2px, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(192, 132, 252, 0.05) 0px, rgba(192, 132, 252, 0.05) 2px, transparent 2px, transparent 40px),
      radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.4), transparent 40%),
      radial-gradient(circle at 60% 60%, rgba(147, 51, 234, 0.3), transparent 45%),
      linear-gradient(135deg, #0a0014 0%, #14001f 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'hexagon-pattern',
    name: 'Hexagon Pattern',
    gradient: `
      repeating-linear-gradient(60deg, rgba(34, 211, 238, 0.08) 0px, rgba(34, 211, 238, 0.08) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(120deg, rgba(34, 211, 238, 0.08) 0px, rgba(34, 211, 238, 0.08) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(180deg, rgba(34, 211, 238, 0.08) 0px, rgba(34, 211, 238, 0.08) 1px, transparent 1px, transparent 50px),
      radial-gradient(circle at 50% 30%, rgba(34, 211, 238, 0.4), transparent 40%),
      radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.3), transparent 35%),
      linear-gradient(135deg, #000a0f 0%, #001419 100%)
    `,
    category: 'premium',
    animation: 'rotate'
  },
  {
    id: 'scanlines-red',
    name: 'Scanlines Red',
    gradient: `
      repeating-linear-gradient(0deg, rgba(239, 68, 68, 0.03) 0px, rgba(239, 68, 68, 0.03) 1px, transparent 1px, transparent 4px),
      repeating-linear-gradient(90deg, rgba(239, 68, 68, 0.05) 0px, rgba(239, 68, 68, 0.05) 1px, transparent 1px, transparent 80px),
      radial-gradient(circle at 25% 35%, rgba(239, 68, 68, 0.5), transparent 30%),
      radial-gradient(circle at 75% 65%, rgba(220, 38, 38, 0.4), transparent 35%),
      radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.3), transparent 50%),
      linear-gradient(135deg, #0f0000 0%, #1a0000 100%)
    `,
    category: 'premium',
    animation: 'pulse'
  },
  {
    id: 'liquid-rainbow',
    name: 'Liquid Rainbow',
    gradient: `
      radial-gradient(ellipse at 15% 20%, rgba(255, 0, 128, 0.6), transparent 40%),
      radial-gradient(ellipse at 85% 30%, rgba(128, 0, 255, 0.6), transparent 40%),
      radial-gradient(ellipse at 50% 70%, rgba(0, 128, 255, 0.6), transparent 45%),
      radial-gradient(ellipse at 20% 80%, rgba(255, 128, 0, 0.5), transparent 35%),
      radial-gradient(ellipse at 80% 85%, rgba(255, 0, 255, 0.5), transparent 40%),
      linear-gradient(135deg, #0a0a14 0%, #14141f 100%)
    `,
    category: 'premium',
    animation: 'flow'
  },
  {
    id: 'sunset-vibes',
    name: 'Sunset Vibes',
    gradient: `
      radial-gradient(circle at 20% 30%, rgba(255, 94, 77, 0.7), transparent 40%),
      radial-gradient(circle at 80% 40%, rgba(255, 159, 64, 0.6), transparent 45%),
      radial-gradient(circle at 50% 80%, rgba(255, 107, 107, 0.6), transparent 50%),
      radial-gradient(circle at 30% 60%, rgba(254, 121, 104, 0.5), transparent 35%),
      linear-gradient(180deg, #1a0a0a 0%, #2d1414 50%, #1a0a0a 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    gradient: `
      radial-gradient(ellipse at 30% 20%, rgba(34, 211, 238, 0.7), transparent 45%),
      radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.6), transparent 50%),
      radial-gradient(ellipse at 40% 80%, rgba(14, 165, 233, 0.6), transparent 45%),
      radial-gradient(ellipse at 80% 30%, rgba(96, 165, 250, 0.5), transparent 40%),
      linear-gradient(180deg, #000a14 0%, #001a2e 50%, #000a14 100%)
    `,
    category: 'premium',
    animation: 'shift'
  },
  {
    id: 'purple-haze',
    name: 'Purple Haze',
    gradient: `
      radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.8), transparent 35%),
      radial-gradient(circle at 75% 35%, rgba(192, 132, 252, 0.7), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(147, 51, 234, 0.7), transparent 45%),
      radial-gradient(circle at 30% 80%, rgba(126, 34, 206, 0.6), transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.5), transparent 35%),
      linear-gradient(135deg, #0a0014 0%, #1a0a2e 50%, #0a0014 100%)
    `,
    category: 'premium',
    animation: 'pulse'
  },
  {
    id: 'emerald-dream',
    name: 'Emerald Dream',
    gradient: `
      radial-gradient(ellipse at 20% 30%, rgba(16, 185, 129, 0.7), transparent 40%),
      radial-gradient(ellipse at 80% 40%, rgba(52, 211, 153, 0.6), transparent 45%),
      radial-gradient(ellipse at 50% 75%, rgba(5, 150, 105, 0.6), transparent 50%),
      radial-gradient(ellipse at 35% 65%, rgba(34, 197, 94, 0.5), transparent 40%),
      linear-gradient(180deg, #000a08 0%, #001a14 50%, #000a08 100%)
    `,
    category: 'premium',
    animation: 'wave'
  },
  {
    id: 'fire-storm',
    name: 'Fire Storm',
    gradient: `
      radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.8), transparent 35%),
      radial-gradient(circle at 70% 40%, rgba(220, 38, 38, 0.7), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(248, 113, 113, 0.7), transparent 45%),
      radial-gradient(circle at 25% 75%, rgba(185, 28, 28, 0.6), transparent 35%),
      radial-gradient(circle at 75% 80%, rgba(239, 68, 68, 0.5), transparent 40%),
      linear-gradient(135deg, #0f0000 0%, #1a0505 50%, #0f0000 100%)
    `,
    category: 'premium',
    animation: 'flow'
  },

  // ========== STATIC GRADIENTS ==========
  {
    id: 'purple-dark',
    name: 'Purple Dark',
    gradient: 'linear-gradient(147deg, #000000 0%, #8d45d5 187%)',
    category: 'dark'
  },
  {
    id: 'red-fire',
    name: 'Red Fire',
    gradient: 'linear-gradient(308deg, #a70b0b 0%, #000000 75%)',
    category: 'dark'
  },
  {
    id: 'green-emerald',
    name: 'Green Emerald',
    gradient: 'linear-gradient(308deg, #0ba769 0%, #000000 75%)',
    category: 'dark'
  },
  {
    id: 'blue-ocean',
    name: 'Blue Ocean',
    gradient: 'linear-gradient(308deg, #0b32a7 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'purple-magic',
    name: 'Purple Magic',
    gradient: 'linear-gradient(308deg, #960ba7 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'green-forest',
    name: 'Green Forest',
    gradient: 'linear-gradient(308deg, #3da70b 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'pink-rose',
    name: 'Pink Rose',
    gradient: 'linear-gradient(308deg, #a70b7e 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'red-crimson',
    name: 'Red Crimson',
    gradient: 'linear-gradient(308deg, #a70b0b 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'yellow-gold',
    name: 'Yellow Gold',
    gradient: 'linear-gradient(308deg, #a5a70b 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'red-center',
    name: 'Red Center',
    gradient: 'linear-gradient(322deg, #000000 23%, #a70b0b 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'blue-center',
    name: 'Blue Center',
    gradient: 'linear-gradient(322deg, #000000 23%, #120ba7 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'gray-steel',
    name: 'Gray Steel',
    gradient: 'linear-gradient(322deg, #000000 23%, #34334d 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'blue-bright',
    name: 'Blue Bright',
    gradient: 'linear-gradient(322deg, #000000 23%, #52a9ff 54%, #000000 73%)',
    category: 'colorful'
  },

  // ========== ANIMATED GRADIENTS ==========
  {
    id: 'red-fire-flow',
    name: 'Red Fire Flow',
    gradient: 'linear-gradient(308deg, #a70b0b 0%, #ff6b6b 50%, #000000 75%)',
    category: 'animated',
    animation: 'flow'
  },
  {
    id: 'blue-wave',
    name: 'Blue Wave',
    gradient: 'linear-gradient(308deg, #0b32a7 0%, #52a9ff 50%, #000000 67%)',
    category: 'animated',
    animation: 'wave'
  },
  {
    id: 'purple-shift',
    name: 'Purple Shift',
    gradient: 'linear-gradient(308deg, #960ba7 0%, #e100ff 50%, #000000 67%)',
    category: 'animated',
    animation: 'shift'
  },
  {
    id: 'green-pulse',
    name: 'Green Pulse',
    gradient: 'linear-gradient(308deg, #3da70b 0%, #a8e063 50%, #000000 67%)',
    category: 'animated',
    animation: 'pulse'
  },
  {
    id: 'pink-rotate',
    name: 'Pink Rotate',
    gradient: 'linear-gradient(308deg, #a70b7e 0%, #ff6ec7 50%, #000000 67%)',
    category: 'animated',
    animation: 'rotate'
  },
  {
    id: 'gold-zoom',
    name: 'Gold Zoom',
    gradient: 'linear-gradient(308deg, #a5a70b 0%, #f6d365 50%, #000000 67%)',
    category: 'animated',
    animation: 'zoom'
  },
];