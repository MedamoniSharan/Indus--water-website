import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ManufactureUnitsClient from "./ManufactureUnitsClient";

export const metadata: Metadata = {
  title: "Indus Manufacturer Information | FSSAI Licensed Units",
  description:
    "Identify the FSSAI-licensed unit where your Indus Packaged Drinking Water pack was manufactured. Unit (SG) Sri Ganga Enterprises, Turakapalem, Guntur. FSSAI Lic No: 20126142001251.",
  keywords: [
    "Indus manufacturer information",
    "Indus manufacture units",
    "Sri Ganga Enterprises",
    "Turakapalem Guntur water",
    "FSSAI license 20126142001251",
    "Indus packaged drinking water unit",
  ],
  alternates: {
    canonical: "https://www.induswater.co.in/manufacture-units",
  },
};

export default function ManufactureUnitsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFC]">
      <Navbar />
      <div className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        <ManufactureUnitsClient />
      </div>
      <Footer />
    </main>
  );
}
