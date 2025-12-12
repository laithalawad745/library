export interface Gradient {
  id: string;
  name: string;
  gradient: string;
  category: 'dark' | 'colorful' | 'mixed' | 'animated';
  animation?: 'shift' | 'wave' | 'pulse' | 'rotate' | 'flow' | 'zoom';
}

export const gradients: Gradient[] = [
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