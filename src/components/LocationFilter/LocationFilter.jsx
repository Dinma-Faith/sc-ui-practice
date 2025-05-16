import locationIcon from "../../assets/icons/forwardbutton.svg";

const locations = ["Ikeja", "Lagos", "Nigeria"];

export default function LocationFilter({ activeLocation, onChange }) {
  return (
    <section className="location-filter">
      <p className="filter-label location-label">
        <img src={locationIcon} alt="Location icon" className="icon" />
        Filter Internet Service Provider data based on location
      </p>

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
