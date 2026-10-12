import image1 from '../../assets/images/Ruta 1/1.jpeg'
import image2 from '../../assets/images/Ruta 1/2.jpeg'
import image3 from '../../assets/images/Ruta 1/3.jpeg'
import image4 from '../../assets/images/Ruta 1/4.jpeg'
import image5 from '../../assets/images/Ruta 1/5.jpeg'
import image6 from '../../assets/images/Ruta 1/6.jpeg'
import image7 from '../../assets/images/Ruta 1/7.jpeg'
import image8 from '../../assets/images/Ruta 1/8.jpeg'
import image9 from '../../assets/images/Ruta 1/9.jpeg'
import image10 from '../../assets/images/Ruta 1/10.jpeg'
import './TravelRouteGuide.css'

const economicRouteSteps = [
  { id: 'step1', image: image1 },
  { id: 'step2', image: image2 },
  { id: 'step3', image: image3 },
  { id: 'step4', image: image4 },
  { id: 'step5', image: image5 },
  { id: 'step6', image: image6 },
  { id: 'step7', image: image7 },
  { id: 'step8', image: image8 },
  { id: 'step9', image: image9 },
  { id: 'step10', image: image10, landscape: true },
  { id: 'step11', image: null },
]

export default function TravelRouteGuide({ text }) {
  return (
    <section className="travel-guide" aria-labelledby="travel-guide-title">
      <h4 id="travel-guide-title">{text.title}</h4>
      <p className="travel-guide-subtitle">{text.subtitle}</p>
      <p>{text.stepCount}</p>
      <p className="travel-guide-disclaimer">{text.disclaimer}</p>
      <details className="travel-guide-details">
        <summary>
          <span className="travel-guide-open-label">{text.openGuide}</span>
          <span className="travel-guide-close-label">{text.closeGuide}</span>
        </summary>
        <ol className="travel-guide-steps" role="list">
          {economicRouteSteps.map(({ id, image, landscape }, index) => {
            const step = text.steps[id]

            return (
              <li className="travel-guide-step" key={id}>
                <p className="travel-guide-number">
                  {text.stepLabel.replace('{number}', index + 1).replace('{total}', economicRouteSteps.length)}
                </p>
                <h5>{step.title}</h5>
                {image && (
                  <img
                    src={image}
                    alt={step.alt}
                    width={landscape ? 2048 : 1536}
                    height={landscape ? 1536 : 2048}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {step.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {step.highlight && <p className="travel-guide-highlight"><strong>{step.highlight}</strong></p>}
                {step.busOptions && (
                  <dl className="travel-guide-buses">
                    {step.busOptions.map(bus => (
                      <div key={bus.line}>
                        <dt><strong>{bus.line}</strong></dt>
                        <dd>
                          <p><strong>{bus.route}</strong></p>
                          <p>{bus.note}</p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
                {step.note && <p className="travel-guide-note">{step.note}</p>}
              </li>
            )
          })}
        </ol>
      </details>
    </section>
  )
}
