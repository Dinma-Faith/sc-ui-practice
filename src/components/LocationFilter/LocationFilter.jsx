import LocationIcon from "../../assets/icons/forwardbutton.svg?react";

const locations = ["Ikeja", "Lagos", "Nigeria"];

export default function LocationFilter({ activeLocation, onChange }) {
  return (
    <section className="location-filter">
      <div className="filter-label location-label">
        <LocationIcon className="icon" />
        <p>Filter Internet Service Provider data based on location</p>
      </div>

      <div className="location-filter-buttons">
        {locations.map((location) => (
          <button
            key={location}
            className={activeLocation === location ? "active" : ""}
            onClick={() => onChange(location)}
          >
            {location}
          </button>
        ))}
      </div>
    </section>
  );
}
