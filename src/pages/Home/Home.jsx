import { Link, useOutletContext } from 'react-router-dom'
import couplePhoto from '../../assets/images/portada/portada.jpeg'
import { translations } from '../../i18n/translations.js'
import './Home.css'

const quickLinks = [
  { key: 'travel', to: '/travel' },
  { key: 'venue', to: '/venue' },
  { key: 'program', to: '/program' },
  { key: 'localPlaces', to: '/local-places' },
]

export default function Home() {
  const { currentLanguage } = useOutletContext()
  const text = translations[currentLanguage].home

  return (
    <main className="home-page" lang={currentLanguage}>
      <section className="home-welcome" aria-labelledby="home-welcome-title">
        <h1 id="home-welcome-title">{text.welcome.title}</h1>
        <p className="home-welcome-intro">{text.welcome.intro}</p>
        <p>{text.welcome.description}</p>
        <p className="home-welcome-closing">{text.welcome.closing}</p>
      </section>

      <figure className="home-couple-photo">
        <img
          src={couplePhoto}
          alt={text.couplePhotoAlt}
          width="2048"
          height="1152"
          decoding="async"
        />
      </figure>

      <section className="home-guide" aria-labelledby="home-guide-title">
        <h2 id="home-guide-title">{text.guide.title}</h2>
        <ul className="home-quick-links">
          {quickLinks.map(({ key, to }) => (
            <li key={key}>
              <Link className="home-quick-link" to={to}>
                <span>
                  <span className="home-quick-link-title">{text.guide[key].title}</span>
                  <span className="home-quick-link-description">{text.guide[key].description}</span>
                </span>
                <span className="home-quick-link-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="home-closing">{text.finalMessage}</p>
    </main>
  )
}
