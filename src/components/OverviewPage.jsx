import { useState } from "react";
import LocationFilter from "./LocationFilter/LocationFilter";
import ISPFilter from "./ISPFilter/ISPFilter";
import searchIcon from "../assets/icons/filtermail.svg";
const ispBtns = ["MTN", "Airtel", "Glo", "9mobile"];

export default function OverviewPage() {
  const [activeLocation, setActiveLocation] = useState("Ikeja");
  const [selectedISP, setSelectedISP] = useState("MTN");

  return (
    <main className="layout">
      <div className="container">
        <LocationFilter
          activeLocation={activeLocation}
          onChange={setActiveLocation}
        />
        <ISPFilter
          ispOptions={ispBtns}
          selectedISP={selectedISP}
          setSelectedISP={setSelectedISP}
          searchIcon={searchIcon}
        />
      </div>
    </main>
  );
}
