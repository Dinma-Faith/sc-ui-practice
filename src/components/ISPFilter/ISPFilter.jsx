export default function ISPFilter({ ispOptions, selectedISP, setSelectedISP, searchIcon }) {
  const handleClick = (isp) => {
    setSelectedISP(isp);
    console.log("Selected ISP:", isp);
  };

  return (
    <section className="isp-filter">
      <p className="filter-label">
        <img src={searchIcon} alt="Search icon" className="icon" />
        Filter Internet data by service provider available
      </p>

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
