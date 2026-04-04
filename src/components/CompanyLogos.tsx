"use client";

const BASE_PATH = "/hacklab-website";

// Combined trust bar component
export function TrustLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/schaeffler.svg`} alt="Schaeffler" className="h-5 opacity-30 hover:opacity-60 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/ey.svg`} alt="EY" className="h-8 opacity-30 hover:opacity-60 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/microsoft.svg`} alt="Microsoft" className="h-6 opacity-30 hover:opacity-60 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/salesforce.svg`} alt="Salesforce" className="h-7 opacity-30 hover:opacity-60 transition-opacity duration-300" />
    </div>
  );
}

// Tech stack logos for services page
export function TechStackLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/fabric.svg`} alt="Microsoft Fabric" className="h-6 opacity-40 hover:opacity-80 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/microsoft.svg`} alt="Microsoft" className="h-5 opacity-40 hover:opacity-80 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/powerbi.svg`} alt="Power BI" className="h-6 opacity-40 hover:opacity-80 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/sap.svg`} alt="SAP" className="h-6 opacity-40 hover:opacity-80 transition-opacity duration-300" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BASE_PATH}/logos/salesforce.svg`} alt="Salesforce" className="h-6 opacity-40 hover:opacity-80 transition-opacity duration-300" />
    </div>
  );
}
