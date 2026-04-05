"use client";

// Inline SVG logo components — no external files needed

function SchaefflerLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="schaeffler-title">
      <title id="schaeffler-title">Schaeffler</title>
      <text x="0" y="30" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="700" letterSpacing="8">SCHAEFFLER</text>
    </svg>
  );
}

function EYLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ey-title">
      <title id="ey-title">EY</title>
      <text x="0" y="34" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic">EY</text>
    </svg>
  );
}

function MicrosoftLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="microsoft-title">
      <title id="microsoft-title">Microsoft</title>
      <rect width="10" height="10" fill="#f25022"/>
      <rect x="12" width="10" height="10" fill="#7fba00"/>
      <rect y="12" width="10" height="10" fill="#00a4ef"/>
      <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
    </svg>
  );
}

function SalesforceLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="salesforce-title">
      <title id="salesforce-title">Salesforce</title>
      <path d="M42 8c-5.5 0-10.3 2.8-13.2 7C26.6 12.4 23.1 11 19.3 11 11.3 11 4.8 17.5 4.8 25.5c0 .8.1 1.5.2 2.3C2 29.8 0 33.4 0 37.5 0 44 5.4 49 12.2 49h73.6C92.6 49 98 43.5 98 36.8c0-5.3-3.5-9.8-8.3-11.3-.1-.9-.2-1.8-.2-2.7C89.5 14.5 82.8 8 74.5 8c-3.7 0-7.1 1.3-9.7 3.5C62 7.2 56.5 4 50.3 4 46.5 4 43 5.5 40.3 8H42z"/>
    </svg>
  );
}

function SAPLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 92 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sap-title">
      <title id="sap-title">SAP</title>
      <text x="0" y="32" fontFamily="'Arial Black', Arial, sans-serif" fontSize="38" fontWeight="900" letterSpacing="1">SAP</text>
    </svg>
  );
}

function FabricLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fabric-title">
      <title id="fabric-title">Microsoft Fabric</title>
      <path d="M20 2L36 11v18L20 38 4 29V11L20 2z"/>
      <path d="M20 8L30 14v12L20 32 10 26V14L20 8z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

function PowerBILogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="powerbi-title">
      <title id="powerbi-title">Power BI</title>
      <rect x="0" y="20" width="8" height="20" rx="2"/>
      <rect x="12" y="10" width="8" height="30" rx="2"/>
      <rect x="24" y="0" width="8" height="40" rx="2"/>
    </svg>
  );
}

// Combined trust bar component
export function TrustLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
      <SchaefflerLogo className="h-8 text-[#d7e3fc]/50 hover:text-[#d7e3fc]/90 transition-all duration-300" />
      <EYLogo className="h-10 text-[#d7e3fc]/50 hover:text-[#d7e3fc]/90 transition-all duration-300" />
      <MicrosoftLogo className="h-8 opacity-50 hover:opacity-90 transition-all duration-300" />
      <SalesforceLogo className="h-8 text-[#d7e3fc]/50 hover:text-[#d7e3fc]/90 transition-all duration-300" />
    </div>
  );
}

// Tech stack logos for services page
export function TechStackLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
      <FabricLogo className="h-8 text-[#d7e3fc]/60 hover:text-[#d7e3fc] transition-all duration-300" />
      <MicrosoftLogo className="h-8 opacity-60 hover:opacity-100 transition-all duration-300" />
      <PowerBILogo className="h-8 text-[#d7e3fc]/60 hover:text-[#d7e3fc] transition-all duration-300" />
      <SAPLogo className="h-8 text-[#d7e3fc]/60 hover:text-[#d7e3fc] transition-all duration-300" />
      <SalesforceLogo className="h-8 text-[#d7e3fc]/60 hover:text-[#d7e3fc] transition-all duration-300" />
    </div>
  );
}
