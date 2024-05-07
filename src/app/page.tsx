import React from "react";
import { CustomAuroraBackground } from "../components/ui/aurora-background";
import { LampDemo } from "../components/ui/lamp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CustomAuroraBackground />
      <LampDemo />
    </main>
  );
}
