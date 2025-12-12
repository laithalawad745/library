export interface Gradient {
  id: string;
  name: string;
  gradient: string;
  category: 'dark' | 'colorful' | 'mixed' | 'animated';
  animation?: string; // للـ animated gradients بعدين
}

export const gradients: Gradient[] = [
  // ==================== DARK CATEGORY ====================
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
    id: 'cyan-deep',
    name: 'Cyan Deep',
    gradient: 'linear-gradient(308deg, #0ba7a7 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'orange-flame',
    name: 'Orange Flame',
    gradient: 'linear-gradient(308deg, #a7460b 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'indigo-night',
    name: 'Indigo Night',
    gradient: 'linear-gradient(308deg, #4b0ba7 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'teal-shadow',
    name: 'Teal Shadow',
    gradient: 'linear-gradient(308deg, #0ba75e 0%, #000000 67%)',
    category: 'dark'
  },
  {
    id: 'violet-dusk',
    name: 'Violet Dusk',
    gradient: 'linear-gradient(147deg, #000000 0%, #6b2da7 187%)',
    category: 'dark'
  },
  {
    id: 'ruby-blood',
    name: 'Ruby Blood',
    gradient: 'linear-gradient(147deg, #000000 0%, #8b0000 187%)',
    category: 'dark'
  },

  // ==================== MIXED CATEGORY ====================
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
    id: 'purple-pulse',
    name: 'Purple Pulse',
    gradient: 'linear-gradient(322deg, #000000 23%, #8d45d5 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'green-glow',
    name: 'Green Glow',
    gradient: 'linear-gradient(322deg, #000000 23%, #0ba769 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'cyan-burst',
    name: 'Cyan Burst',
    gradient: 'linear-gradient(322deg, #000000 23%, #0ba7a7 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'orange-core',
    name: 'Orange Core',
    gradient: 'linear-gradient(322deg, #000000 23%, #ff7b00 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'pink-heart',
    name: 'Pink Heart',
    gradient: 'linear-gradient(322deg, #000000 23%, #ff1493 54%, #000000 73%)',
    category: 'mixed'
  },
  {
    id: 'violet-core',
    name: 'Violet Core',
    gradient: 'linear-gradient(322deg, #000000 23%, #9400d3 54%, #000000 73%)',
    category: 'mixed'
  },

  // ==================== COLORFUL CATEGORY ====================
  {
    id: 'blue-bright',
    name: 'Blue Bright',
    gradient: 'linear-gradient(322deg, #000000 23%, #52a9ff 54%, #000000 73%)',
    category: 'colorful'
  },
  {
    id: 'sunset-paradise',
    name: 'Sunset Paradise',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 50%, #ff1493 100%)',
    category: 'colorful'
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    category: 'colorful'
  },
  {
    id: 'tropical-vibes',
    name: 'Tropical Vibes',
    gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #30dd8a 100%)',
    category: 'colorful'
  },
  {
    id: 'candy-dream',
    name: 'Candy Dream',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #fa709a 100%)',
    category: 'colorful'
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
    category: 'colorful'
  },
  {
    id: 'cosmic-fusion',
    name: 'Cosmic Fusion',
    gradient: 'linear-gradient(135deg, #fa8bff 0%, #2bd2ff 50%, #2bff88 100%)',
    category: 'colorful'
  },
  {
    id: 'fire-ice',
    name: 'Fire & Ice',
    gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #00d4ff 100%)',
    category: 'colorful'
  },
  {
    id: 'rainbow-shine',
    name: 'Rainbow Shine',
    gradient: 'linear-gradient(135deg, #ff0000 0%, #ff7f00 20%, #ffff00 40%, #00ff00 60%, #0000ff 80%, #8b00ff 100%)',
    category: 'colorful'
  },
  {
    id: 'electric-violet',
    name: 'Electric Violet',
    gradient: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)',
    category: 'colorful'
  },
  {
    id: 'mango-tango',
    name: 'Mango Tango',
    gradient: 'linear-gradient(135deg, #ff9a56 0%, #ffbb3e 100%)',
    category: 'colorful'
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    gradient: 'linear-gradient(135deg, #ec77ab 0%, #7873f5 100%)',
    category: 'colorful'
  },
  {
    id: 'lime-splash',
    name: 'Lime Splash',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    category: 'colorful'
  },// ==================== ANIMATED CATEGORY ====================
  {
    id: 'ocean-flow',
    name: 'Ocean Flow',
    gradient: 'linear-gradient(270deg, #0077be, #00a8e8, #0077be)',
    category: 'animated',
    animation: 'gradient-shift'
  },
  {
    id: 'purple-wave',
    name: 'Purple Wave',
    gradient: 'linear-gradient(270deg, #8b00ff, #da70d6, #8b00ff)',
    category: 'animated',
    animation: 'gradient-wave'
  },
  {
    id: 'fire-pulse',
    name: 'Fire Pulse',
    gradient: 'linear-gradient(135deg, #ff0000, #ff7f00, #ffff00)',
    category: 'animated',
    animation: 'gradient-pulse'
  },
  {
    id: 'rainbow-rotate',
    name: 'Rainbow Rotate',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
    category: 'animated',
    animation: 'gradient-rotate'
  },
  {
    id: 'cyber-flow',
    name: 'Cyber Flow',
    gradient: 'linear-gradient(270deg, #00ff88, #00d4ff, #7a00ff)',
    category: 'animated',
    animation: 'gradient-flow'
  },
  {
    id: 'sunset-zoom',
    name: 'Sunset Zoom',
    gradient: 'linear-gradient(135deg, #ff6b6b, #ffa500, #ff1493)',
    category: 'animated',
    animation: 'gradient-zoom'
  },
  {
    id: 'aurora-shift',
    name: 'Aurora Shift',
    gradient: 'linear-gradient(270deg, #00ff88, #00d4ff, #b388ff)',
    category: 'animated',
    animation: 'gradient-shift'
  },
  {
    id: 'neon-wave',
    name: 'Neon Wave',
    gradient: 'linear-gradient(270deg, #ff006e, #8338ec, #3a86ff)',
    category: 'animated',
    animation: 'gradient-wave'
  },
  {
    id: 'emerald-pulse',
    name: 'Emerald Pulse',
    gradient: 'linear-gradient(135deg, #0ba360, #3cba92, #30dd8a)',
    category: 'animated',
    animation: 'gradient-pulse'
  },
  {
    id: 'cosmic-rotate',
    name: 'Cosmic Rotate',
    gradient: 'linear-gradient(135deg, #fa8bff, #2bd2ff, #2bff88)',
    category: 'animated',
    animation: 'gradient-rotate'
  },
  {
    id: 'lava-flow',
    name: 'Lava Flow',
    gradient: 'linear-gradient(270deg, #ff0000, #ff4500, #ff8c00)',
    category: 'animated',
    animation: 'gradient-flow'
  },
  {
    id: 'galaxy-zoom',
    name: 'Galaxy Zoom',
    gradient: 'linear-gradient(135deg, #4e54c8, #8f94fb, #a8e6cf)',
    category: 'animated',
    animation: 'gradient-zoom'
  },
];