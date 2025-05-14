import { useState } from "react";
import LocationFilter from "./LocationFilter/LocationFilter";
import ISPFilter from "./ISPFilter/ISPFilter";

export default function FilterSection() {
  const [activeLocation, setActiveLocation] = useState("Ikeja");
  const [selectedISP, setSelectedISP] = useState("");

  return (
    <main className="container">
      <div className="filter-container">
        <LocationFilter
          activeLocation={activeLocation}
          onChange={setActiveLocation}
        />
        <ISPFilter selectedISP={selectedISP} onSelect={setSelectedISP} />
      </div>
    </main>
  );
}
