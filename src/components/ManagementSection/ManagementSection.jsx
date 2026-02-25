import "./ManagementSection.scss";
import managementIcon from "./managementIcon";

function ManagementSection() {
  return (
    <section className="management-section">
      <h2 className="management-section__title heading--lg">
        Manage your entire community in a single system
      </h2>
      <p className="management-section__description text--main">
        Who is Nextcent suitable for?
      </p>
      <ul className="management-section__list">
        {managementIcon.map(({ id, image, alt, title, description }) => (
          <li className="management-section__items" key={id} aria-label={alt}>
            <div className="management-section__item-icon">{image}</div>
            <h3 className="management-section__item-title heading--xs">
              {title}
            </h3>
            <p className="management-section__item-description text--sm">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ManagementSection;
