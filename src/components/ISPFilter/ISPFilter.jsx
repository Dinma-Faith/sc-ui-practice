import searchIcon from "../../assets/icons/filtermail.svg";

const ispOptions = ["MTN", "MTN", "MTN", "MTN","MTN"];

export default function ISPFilter({ selectedISP, onSelect }) {
  return (
    <section className="isp-filter">
      <p className="filter-label">
        <img src={searchIcon} alt="Search icon" className="icon" />
        Filter Internet data by service provider available
      </p>

      <div className="chip-buttons">
        {ispOptions.map((isp, idx) => (
          <button
            key={idx}
            className={`chip ${selectedISP === isp ? "active-chip" : ""}`}
            onClick={() => onSelect(isp)}
          >
            {isp}
          </button>
        ))}
      </div>
    </section>
  );
}
