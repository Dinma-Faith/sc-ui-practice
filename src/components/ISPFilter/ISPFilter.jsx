import SearchIcon from "../../assets/icons/filtermail.svg?react";

export default function ISPFilter({ ispOptions, selectedISP, setSelectedISP }) {
  const handleClick = (isp) => {
    setSelectedISP(isp);
    console.log("Selected ISP:", isp);
  };

  return (
    <section className="isp-filter">
      <div className="filter-label isp-label">
        <SearchIcon className="icon" />
        Filter Internet data by service provider available
      </div>

      <div className="chip-buttons">
        {ispOptions.map((isp) => (
          <button
            key={isp}
            className={`chip ${selectedISP === isp ? "active-chip" : ""}`}
            onClick={() => handleClick(isp)}
          >
            {isp}
          </button>
        ))}
      </div>
    </section>
  );
}
