import React from 'react';

interface ChefAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  className?: string;
  animate?: boolean;
}

export const ChefAvatar: React.FC<ChefAvatarProps> = ({
  size = 'md',
  showBadge = false,
  className = '',
  animate = false,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div className={`relative inline-block ${sizeMap[size]} ${className}`}>
      {/* 3D-effect Avatar SVG */}
      <svg
        viewBox="0 0 160 160"
        className={`w-full h-full drop-shadow-md transition-transform ${animate ? 'hover:scale-105 active:scale-95' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="faceGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="65%" stopColor="#fba36e" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="hatRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <linearGradient id="apronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <radialGradient id="eyeGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
          <filter id="shadow3D" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Aura */}
        <circle cx="80" cy="80" r="76" fill="#fff7ed" stroke="#fed7aa" strokeWidth="3" />

        {/* Apron / Torso */}
        <path
          d="M40 135 C40 115, 60 110, 80 110 C100 110, 120 115, 120 135 L124 156 C124 158, 122 160, 120 160 L40 160 C38 160, 36 158, 36 156 Z"
          fill="url(#apronGrad)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Apron Neckband */}
        <path d="M64 110 C64 125, 96 125, 96 110" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
        {/* Little Chef Spatula on pocket */}
        <line x1="80" y1="130" x2="80" y2="148" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
        <rect x="74" y="148" width="12" height="6" rx="2" fill="#ea580c" />

        {/* Neck */}
        <rect x="68" y="96" width="24" height="20" rx="6" fill="#fba36e" />

        {/* 3D Round Face */}
        <circle cx="80" cy="74" r="34" fill="url(#faceGrad)" filter="url(#shadow3D)" />

        {/* Rosy Cheeks */}
        <ellipse cx="61" cy="79" rx="6" ry="3.5" fill="#f87171" opacity="0.6" />
        <ellipse cx="99" cy="79" rx="6" ry="3.5" fill="#f87171" opacity="0.6" />

        {/* Eyes - friendly sparkle */}
        <ellipse cx="66" cy="69" rx="4" ry="5" fill="url(#eyeGrad)" />
        <ellipse cx="94" cy="69" rx="4" ry="5" fill="url(#eyeGrad)" />
        {/* Eye highlights */}
        <circle cx="64.5" cy="67" r="1.8" fill="#ffffff" />
        <circle cx="92.5" cy="67" r="1.8" fill="#ffffff" />
        <circle cx="67.5" cy="71.5" r="0.8" fill="#ffffff" />
        <circle cx="95.5" cy="71.5" r="0.8" fill="#ffffff" />

        {/* Happy Eyebrows */}
        <path d="M60 61 Q66 56 72 61" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M88 61 Q94 56 100 61" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Cute Nose */}
        <ellipse cx="80" cy="75" rx="3.5" ry="2.5" fill="#ea580c" />

        {/* Chef's Signature Curly Mustache */}
        <path
          d="M80 81 C75 79, 65 77, 59 83 C55 87, 58 90, 62 88 C68 85, 76 83, 80 84 C84 83, 92 85, 98 88 C102 90, 105 87, 101 83 C95 77, 85 79, 80 81 Z"
          fill="#451a03"
          stroke="#78350f"
          strokeWidth="1"
        />

        {/* Wide Happy Smile */}
        <path d="M72 87 Q80 96 88 87" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M74 88 Q80 94 86 88 Z" fill="#ef4444" />

        {/* 3D Puffy Chef Hat */}
        <g filter="url(#shadow3D)">
          {/* Hat Puff Base */}
          <path
            d="M50 48 C42 48, 38 32, 48 24 C54 18, 62 20, 66 18 C70 12, 90 12, 94 18 C98 20, 106 18, 112 24 C122 32, 118 48, 110 48 Z"
            fill="url(#hatGrad)"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          {/* Hat Puffs detail lines */}
          <path d="M60 22 C64 30, 66 40, 68 46" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 22 C96 30, 94 40, 92 46" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
          <path d="M80 16 C80 26, 80 38, 80 46" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

          {/* Hat Band / Ribbon */}
          <rect x="52" y="44" width="56" height="10" rx="3" fill="url(#hatRibbon)" />
          {/* Gold emblem on hat */}
          <circle cx="80" cy="49" r="2.5" fill="#fde047" stroke="#b45309" strokeWidth="0.8" />
        </g>
      </svg>

      {/* Online/Active badge indicator */}
      {showBadge && (
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-neutral-900 rounded-full shadow-sm"
          title="SaborChef en línea"
        />
      )}
    </div>
  );
};
