"use client";

// Microsoft logo — 4-color window icon + wordmark
export function MicrosoftLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 110" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="50" height="50" fill="#f25022"/>
      <rect x="55" y="0" width="50" height="50" fill="#7fba00"/>
      <rect x="0" y="55" width="50" height="50" fill="#00a4ef"/>
      <rect x="55" y="55" width="50" height="50" fill="#ffb900"/>
      <text x="125" y="76" fontFamily="Segoe UI, sans-serif" fontSize="58" fontWeight="600" fill="currentColor">Microsoft</text>
    </svg>
  );
}

// SAP logo — blue wordmark
export function SAPLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="48" fontFamily="Arial, sans-serif" fontSize="52" fontWeight="700" fill="currentColor" letterSpacing="-2">SAP</text>
    </svg>
  );
}

// Salesforce logo — cloud icon + wordmark
export function SalesforceLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700" fill="currentColor">salesforce</text>
    </svg>
  );
}

// Schaeffler logo — green wordmark
export function SchaefflerLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700" fill="currentColor" letterSpacing="2">SCHAEFFLER</text>
    </svg>
  );
}

// EY logo — yellow/white
export function EYLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="48" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="700" fill="currentColor" fontStyle="italic">EY</text>
    </svg>
  );
}

// Power BI logo
export function PowerBILogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Segoe UI, sans-serif" fontSize="32" fontWeight="600" fill="currentColor">Power BI</text>
    </svg>
  );
}

// Fabric logo
export function FabricLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Segoe UI, sans-serif" fontSize="32" fontWeight="600" fill="currentColor">Fabric</text>
    </svg>
  );
}

// Combined trust bar component
export function TrustLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
      <SchaefflerLogo className="h-6 text-[#d7e3fc]/30 hover:text-[#d7e3fc]/60 transition-all duration-300" />
      <EYLogo className="h-8 text-[#d7e3fc]/30 hover:text-[#d7e3fc]/60 transition-all duration-300" />
      <MicrosoftLogo className="h-6 text-[#d7e3fc]/30 hover:text-[#d7e3fc]/60 transition-all duration-300" />
      <SalesforceLogo className="h-6 text-[#d7e3fc]/30 hover:text-[#d7e3fc]/60 transition-all duration-300" />
    </div>
  );
}

// Tech stack logos for services page
export function TechStackLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
      <FabricLogo className="h-5 text-[#d7e3fc]/40 hover:text-primary transition-all duration-300" />
      <MicrosoftLogo className="h-5 text-[#d7e3fc]/40 hover:text-primary transition-all duration-300" />
      <PowerBILogo className="h-5 text-[#d7e3fc]/40 hover:text-primary transition-all duration-300" />
      <SAPLogo className="h-5 text-[#d7e3fc]/40 hover:text-primary transition-all duration-300" />
      <SalesforceLogo className="h-5 text-[#d7e3fc]/40 hover:text-primary transition-all duration-300" />
    </div>
  );
}
