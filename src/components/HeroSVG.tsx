export function HeroSVG() {
  return (
    <div className="relative hidden lg:block h-[600px] animate-float">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-80"
          fill="none"
          viewBox="0 0 900 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              id="glow_center"
              r="50%"
            >
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00D4AA" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              id="glow_outer"
              r="60%"
            >
              <stop offset="0%" stopColor="#41EEC2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#41EEC2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="line_grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0" />
              <stop offset="50%" stopColor="#41EEC2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line_grad2" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#41EEC2" stopOpacity="0" />
              <stop offset="40%" stopColor="#00D4AA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#41EEC2" stopOpacity="0" />
            </linearGradient>
            <filter
              height="200%"
              id="blur_filter"
              width="200%"
              x="-50%"
              y="-50%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
            <filter
              height="200%"
              id="blur_small"
              width="200%"
              x="-50%"
              y="-50%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>

          {/* Large background glow */}
          <circle
            cx="450"
            cy="450"
            fill="url(#glow_outer)"
            filter="url(#blur_filter)"
            r="420"
          />
          <circle
            cx="450"
            cy="450"
            fill="url(#glow_center)"
            filter="url(#blur_filter)"
            r="300"
          />

          {/* Flowing wave paths */}
          <path
            d="M50 650 Q 200 500 400 580 T 750 480"
            fill="none"
            opacity="0.2"
            stroke="#00D4AA"
            strokeWidth="0.5"
          />
          <path
            d="M0 600 Q 150 450 300 540 T 700 440 T 900 500"
            fill="none"
            opacity="0.12"
            stroke="#00D4AA"
            strokeWidth="0.5"
          />
          <path
            d="M100 700 Q 280 550 430 640 T 850 540"
            fill="none"
            opacity="0.15"
            stroke="#41EEC2"
            strokeWidth="0.5"
          />
          <path
            d="M30 500 Q 180 380 380 450 T 780 380"
            fill="none"
            opacity="0.1"
            stroke="#41EEC2"
            strokeWidth="0.5"
          />

          {/* Primary network structure */}
          <g opacity="0.6" stroke="url(#line_grad)" strokeWidth="1">
            <path d="M200 300 L 400 220 L 580 320 L 450 480 Z" />
            <path d="M400 220 L 680 180" />
            <path d="M580 320 L 750 380" />
            <path d="M450 480 L 320 620" />
            <path d="M200 300 L 120 460" />
            <path d="M400 220 L 350 120" />
            <path d="M580 320 L 680 180" />
          </g>

          {/* Secondary network structure */}
          <g opacity="0.4" stroke="url(#line_grad2)" strokeWidth="0.8">
            <path d="M680 180 L 800 260" />
            <path d="M750 380 L 830 480" />
            <path d="M320 620 L 480 680" />
            <path d="M120 460 L 200 580" />
            <path d="M350 120 L 250 80" />
            <path d="M480 680 L 650 640" />
            <path d="M200 580 L 320 620" />
            <path d="M800 260 L 750 380" />
            <path d="M830 480 L 650 640" />
          </g>

          {/* Tertiary fine connections */}
          <g opacity="0.25" stroke="#41EEC2" strokeWidth="0.4">
            <path d="M250 80 L 400 220" />
            <path d="M120 460 L 320 620" />
            <path d="M680 180 L 750 380" />
            <path d="M450 480 L 650 640" />
            <path d="M200 300 L 350 120" />
            <path d="M580 320 L 830 480" />
          </g>

          {/* Primary nodes - larger with pulsing */}
          <g fill="#00D4AA">
            <circle cx="200" cy="300" r="6">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="5;7;5" />
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.8;1;0.8" />
            </circle>
            <circle cx="400" cy="220" r="7">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="6;8;6" />
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.7;1;0.7" />
            </circle>
            <circle cx="580" cy="320" r="6">
              <animate attributeName="r" dur="3.5s" repeatCount="indefinite" values="5;7;5" />
            </circle>
            <circle cx="450" cy="480" r="5">
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.6;1;0.6" />
            </circle>
            <circle cx="680" cy="180" r="5">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="4;6;4" />
            </circle>
          </g>

          {/* Secondary nodes */}
          <g fill="#41EEC2">
            <circle cx="750" cy="380" opacity="0.7" r="4">
              <animate attributeName="opacity" dur="3.5s" repeatCount="indefinite" values="0.5;0.9;0.5" />
            </circle>
            <circle cx="320" cy="620" opacity="0.6" r="4">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="3;5;3" />
            </circle>
            <circle cx="120" cy="460" opacity="0.5" r="3">
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.3;0.7;0.3" />
            </circle>
            <circle cx="350" cy="120" opacity="0.6" r="3">
              <animate attributeName="r" dur="3.5s" repeatCount="indefinite" values="2;4;2" />
            </circle>
            <circle cx="800" cy="260" opacity="0.5" r="3">
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.4;0.8;0.4" />
            </circle>
          </g>

          {/* Tertiary nodes - small and subtle */}
          <g fill="#00D4AA">
            <circle cx="830" cy="480" opacity="0.4" r="3">
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.3;0.6;0.3" />
            </circle>
            <circle cx="480" cy="680" opacity="0.4" r="3" />
            <circle cx="200" cy="580" opacity="0.3" r="2">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="2;3;2" />
            </circle>
            <circle cx="250" cy="80" opacity="0.4" r="2" />
            <circle cx="650" cy="640" opacity="0.35" r="3">
              <animate attributeName="opacity" dur="3.5s" repeatCount="indefinite" values="0.2;0.5;0.2" />
            </circle>
          </g>

          {/* Node glow effects on primary nodes */}
          <g fill="#00D4AA" filter="url(#blur_small)">
            <circle cx="400" cy="220" opacity="0.3" r="12">
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.2;0.4;0.2" />
            </circle>
            <circle cx="580" cy="320" opacity="0.2" r="10">
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.1;0.3;0.1" />
            </circle>
            <circle cx="200" cy="300" opacity="0.25" r="10">
              <animate attributeName="opacity" dur="3.5s" repeatCount="indefinite" values="0.15;0.35;0.15" />
            </circle>
          </g>

          {/* Hexagonal data elements */}
          <g fill="none" opacity="0.3" stroke="#41EEC2" strokeWidth="0.5">
            <path d="M380 200 L 400 190 L 420 200 L 420 220 L 400 230 L 380 220 Z" />
            <path
              d="M560 300 L 580 290 L 600 300 L 600 320 L 580 330 L 560 320 Z"
              transform="scale(1.2) translate(-80, -20)"
            />
            <path d="M660 160 L 680 150 L 700 160 L 700 180 L 680 190 L 660 180 Z" />
          </g>

          {/* Animated particle paths */}
          <path
            d="M100 400 C 200 300, 300 500, 500 400 S 700 300, 850 450"
            opacity="0.4"
            stroke="#00D4AA"
            strokeDasharray="2 10"
            strokeWidth="2"
          >
            <animate attributeName="stroke-dashoffset" dur="8s" repeatCount="indefinite" values="0;-60" />
          </path>
          <path
            d="M50 450 C 150 350, 250 550, 450 450 S 650 350, 800 500"
            opacity="0.3"
            stroke="#41EEC2"
            strokeDasharray="1 15"
            strokeWidth="1.5"
          >
            <animate attributeName="stroke-dashoffset" dur="10s" repeatCount="indefinite" values="0;-80" />
          </path>
          <path
            d="M200 300 C 300 200, 450 350, 580 320 S 700 250, 800 260"
            opacity="0.25"
            stroke="#00D4AA"
            strokeDasharray="3 12"
            strokeWidth="1"
          >
            <animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0;-45" />
          </path>
          <path
            d="M350 120 C 400 200, 450 300, 450 480 S 400 600, 320 620"
            opacity="0.2"
            stroke="#41EEC2"
            strokeDasharray="2 8"
            strokeWidth="1"
          >
            <animate attributeName="stroke-dashoffset" dur="7s" repeatCount="indefinite" values="0;-50" />
          </path>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
