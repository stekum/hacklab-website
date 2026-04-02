export function HeroSVG() {
  return (
    <div className="relative hidden lg:block h-[600px]">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-80"
          fill="none"
          viewBox="0 0 800 800"
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
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="line_grad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0" />
              <stop offset="50%" stopColor="#41EEC2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
            </linearGradient>
            <filter
              height="200%"
              id="blur_filter"
              width="200%"
              x="-50%"
              y="-50%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <circle
            cx="400"
            cy="400"
            fill="url(#glow_center)"
            filter="url(#blur_filter)"
            r="350"
          />
          <path
            d="M100 600 Q 250 450 400 550 T 700 450"
            fill="none"
            opacity="0.2"
            stroke="#00D4AA"
            strokeWidth="0.5"
          />
          <path
            d="M50 550 Q 200 400 350 500 T 750 400"
            fill="none"
            opacity="0.1"
            stroke="#00D4AA"
            strokeWidth="0.5"
          />
          <path
            d="M150 650 Q 300 500 450 600 T 800 500"
            fill="none"
            opacity="0.15"
            stroke="#41EEC2"
            strokeWidth="0.5"
          />
          <g opacity="0.6" stroke="url(#line_grad)" strokeWidth="1">
            <path d="M200 300 L 400 250 L 550 350 L 400 500 Z" />
            <path d="M400 250 L 650 200" />
            <path d="M550 350 L 700 400" />
            <path d="M400 500 L 300 600" />
            <path d="M200 300 L 150 450" />
          </g>
          <g fill="#00D4AA">
            <circle cx="200" cy="300" r="4">
              <animate
                attributeName="r"
                dur="3s"
                repeatCount="indefinite"
                values="3;5;3"
              />
            </circle>
            <circle cx="400" cy="250" opacity="0.8" r="3" />
            <circle cx="550" cy="350" r="5">
              <animate
                attributeName="opacity"
                dur="4s"
                repeatCount="indefinite"
                values="0.5;1;0.5"
              />
            </circle>
            <circle cx="400" cy="500" r="4" />
            <circle cx="650" cy="200" r="2" />
            <circle cx="300" cy="600" r="3" />
          </g>
          <g fill="none" opacity="0.3" stroke="#41EEC2" strokeWidth="0.5">
            <path d="M380 230 L 400 220 L 420 230 L 420 250 L 400 260 L 380 250 Z" />
            <path
              d="M530 330 L 550 320 L 570 330 L 570 350 L 550 360 L 530 350 Z"
              transform="scale(1.2) translate(-80, -20)"
            />
          </g>
          <path
            d="M100 400 C 200 300, 300 500, 500 400 S 700 300, 800 450"
            opacity="0.4"
            stroke="#00D4AA"
            strokeDasharray="2 10"
            strokeWidth="2"
          />
          <path
            d="M50 450 C 150 350, 250 550, 450 450 S 650 350, 750 500"
            opacity="0.3"
            stroke="#41EEC2"
            strokeDasharray="1 15"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
