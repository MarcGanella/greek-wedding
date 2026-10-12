import { useOutletContext } from 'react-router-dom'
import BeachCard from '../../components/BeachCard/BeachCard.jsx'
import aigioImage1 from '../../assets/images/places/Egio/Egio_1.jpeg'
import aigioImage2 from '../../assets/images/places/Egio/Egio_2.jpeg'
import { translations } from '../../i18n/translations.js'
import './LocalPlaces.css'

// Editorial order, not a ranking.
const beachIds = ['temeni', 'valimitika', 'digeliotika', 'aliki', 'akoli', 'selianitika']
const beachImages = import.meta.glob('../../assets/images/places/beaches/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

export default function LocalPlaces() {
  const { currentLanguage } = useOutletContext()
  const text = translations[currentLanguage].localPlaces
  const beaches = text.beaches
  const aigio = text.aigio

  return (
    <main className="local-places-page" lang={currentLanguage}>
      <header className="local-places-header">
        <h1>{text.title}</h1>
      </header>
      <section className="beaches-section" aria-labelledby="beaches-title">
        <header className="beaches-intro">
          <h2 id="beaches-title">{beaches.title}</h2>
          <p>{beaches.intro}</p>
        </header>
        <aside className="beaches-notice" aria-labelledby="beaches-notice-title">
          <h3 id="beaches-notice-title">{beaches.waterShoesNotice.title}</h3>
          <p>{beaches.waterShoesNotice.text}</p>
          <p><strong>{beaches.waterShoesNotice.recommendation}</strong></p>
          <ul>{beaches.waterShoesNotice.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
        </aside>
        <div className="beaches-list">
          {beachIds.map(id => (
            <BeachCard
              key={id}
              id={id}
              beach={beaches[id]}
              image={beachImages[`../../assets/images/places/beaches/${id}.jpg`]}
              labels={beaches.labels}
            />
          ))}
        </div>
      </section>
      <section className="aigio-section" aria-labelledby="aigio-title">
        <header className="aigio-intro">
          <h2 id="aigio-title">{aigio.name}</h2>
          <p className="aigio-subtitle">{aigio.subtitle}</p>
          <p>{aigio.intro}</p>
        </header>
        <div className="aigio-photos">
          <img src={aigioImage1} alt={aigio.imageAlt1} width="2048" height="1152" loading="lazy" decoding="async" />
          <img src={aigioImage2} alt={aigio.imageAlt2} width="2048" height="1152" loading="lazy" decoding="async" />
        </div>
        <div className="aigio-areas">
          {['upperTown', 'seafront'].map(area => (
            <section key={area} aria-labelledby={`aigio-${area}-title`}>
              <h3 id={`aigio-${area}-title`}>{aigio[area].title}</h3>
              <p>{aigio[area].description}</p>
              <ul className="aigio-highlights">
                {aigio[area].highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>
          ))}
        </div>
        <dl className="aigio-ideal">
          <dt>{aigio.idealForLabel}</dt>
          <dd>{aigio.idealFor}</dd>
        </dl>
      </section>
    </main>
  )
}
