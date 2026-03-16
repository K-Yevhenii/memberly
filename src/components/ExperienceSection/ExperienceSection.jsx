import { ExperienceSectionContent } from '../constants/contant'
import Button from '../Button/Button'
import './ExperienceSection.scss'

function ExperienceSection() {
  return (
    <section className="experience-section">
      {ExperienceSectionContent.map(
        ({ id, title, content, image, buttonText }) => (
          <div className="experience-section__container" key={id}>
            <img src={image} alt="Mobile Login Pana" />
            <div className="experience-section__content">
              <div className="experience-section__description">
                <h2 className="experience-section__title heading--lg">
                  {title}
                </h2>
                <p className="text--sm">{content}</p>
              </div>
              <Button className="experience-section__btn">{buttonText}</Button>
            </div>
          </div>
        ),
      )}
    </section>
  )
}

export default ExperienceSection
