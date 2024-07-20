import "./styles/PrincipalDate.css";

const PrincipalDate = () => {
  return (
    <section className="section-principaldate">
      <h2 className="date-title">
        13 de julio{" "}
        <span aria-hidden className="hidden md:inline">
          {" "}
          .{" "}
        </span>
        <br aria-hidden className="block md:hidden" />
        17:00h CET
      </h2>

      <h3 className="date-place">
        <span>Evento finalizado</span>
        <span>Estadio Santiago Bernabéu (Madrid)</span>
      </h3>

      <a
        // href="https://www.entradas.com/artist/la-velada-del-ano/?affiliate=LVL"
        href="javascript:void(0)"
        rel="noopener noreferrer"
        className="a-principaldate"
      >
        Sin entradas
      </a>
    </section>
  );
};

export default PrincipalDate;
