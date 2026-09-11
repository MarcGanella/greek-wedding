import './BeachCard.css'

export default function BeachCard({ id, beach, image, labels }) {
  return (
    <article className="beach-card" aria-labelledby={`beach-${id}-title`}>
      {image && <img className="beach-card__image" src={image} alt={beach.imageAlt} loading="lazy" />}
      <div className="beach-card__body">
        <h3 id={`beach-${id}-title`}>{beach.name}</h3>
        {beach.alternativeName && <p className="beach-card__alternative">{beach.alternativeName}</p>}
        <p>{beach.description}</p>
        <ul className="beach-card__highlights">
          {beach.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
        </ul>
        <ul className="beach-card__details">
          {beach.details.map(detail => <li key={detail}>{detail}</li>)}
        </ul>
        <dl className="beach-card__facts">
          <div><dt>{labels.parking}</dt><dd>{beach.parking}</dd></div>
          <div><dt>{labels.idealFor}</dt><dd>{beach.idealFor}</dd></div>
        </dl>
      </div>
    </article>
  )
}
