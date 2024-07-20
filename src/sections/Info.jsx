import "./styles/Info.css";

const Info = () => {
  return (
    <section className="info-section">
      <div className="twitch-logo">
        <a
          href="https://www.twitch.tv/ibai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./twitch.svg" alt="Logo de Twitch" width={48} height={48} />
        </a>
      </div>
      <div className="info-grid md:grid-cols">
        <article className="h5">
          <h5>Presentación, Combates, Minuto a Minuto</h5>
        </article>

        <article className="twitch">
          <a
            href="https://www.twitch.tv/ibai"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h4>Revivílo en twitch.tv/ibai</h4>
          </a>
        </article>

        <article className="h5">
          <h5>Con la presencia de los boxeadores y boxeadoras</h5>
        </article>
      </div>
    </section>
  );
};

export default Info;
