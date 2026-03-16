import "./ClientSection.scss";
import clientLogo from "../../constants/clientLogo";
function ClientSection() {
  return (
    <section className="clients-section">
      <div className="clients-section__content">
        <h2 className="clients-section__title heading--lg">Our Clients</h2>
        <p className="clients-section__description text--md">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <ul className="clients-section__logos">
        {clientLogo.map(({ id, image, alt }) => (
          <li key={id} aria-label={alt} className="clients-section__logo-items">
            {image}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClientSection;
