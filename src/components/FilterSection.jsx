import { useState } from "react";
import locationIcon from "../assets/forwardbutton.svg";
import searchIcon from "../assets/filtermail.svg";

const locations = ["Ikeja", "Lagos", "Nigeria"];
const ispBtns = ["MTN", "MTN", "MTN", "MTN", "MTN"];

export default function FilterSection() {
  const [activeLocation, setActiveLocation] = useState("Ikeja");

  return (
    <main className="container" >
      <div className="filter-container">
      <section className="location-tabs">
        <p className="filter-label">
          <img src={locationIcon} alt="Location icon" className="tab-icon" />
          Filter Internet Service Provider data based on location
        </p>

        <div className="filter-button">
          {locations.map((location) => (
            <button
              key={location}
              className={activeLocation === location ? "active" : ""}
              onClick={() => setActiveLocation(location)}>
              {location}
            </button>
          ))}
        </div>
      </section>

      <section className="isp-tabs">
        <p className="filter-label">
          <img src={searchIcon} alt="Search icon" className="search-icon" />
          Filter Internet data by service provider available
        </p>

        <div className="isp-buttons">
          {ispBtns.map((ispBtn, idx) => (
            <button key={idx} className="isp-button">
              {ispBtn}
            </button>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
