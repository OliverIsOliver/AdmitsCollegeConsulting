import React from "react";
import Header from "./Components/Header";
import ScheduleSection from "./Components/ScheduleSection";

export default function SchedulePage() {
  return (
    <div>
      <Header />
      <main className="min-h-[50vh]" />
      <ScheduleSection />
    </div>
  );
}
