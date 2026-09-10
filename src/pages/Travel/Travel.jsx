import { useOutletContext } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import './Travel.css'

const transportModes = {
  economy: ['plane', 'bus'],
  recommended: ['plane', 'car'],
  adventure: ['plane', 'ferry', 'car'],
}

const transportPaths = {
  plane: 'M3 12l7-2 2-7h2v7l7 2v2l-7-1v5l2 2v1l-3-1-3 1v-1l2-2v-5l-9 1z',
  bus: 'M6 19v2m12-2v2M5 11h14M8 15h1m6 0h1M7 3h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
  car: 'M5 10l2-6h10l2 6M4 10h16v8H4zM6 18v3m12-3v3M7 14h1m8 0h1',
  ferry: 'M7 12V7h10v5M12 7V3m-3 0h6M3 12l9-2 9 2-3 6H6zM3 21l3-1 3 1 3-1 3 1 3-1 3 1',
}

function TransportIcons({ optionId }) {
  return (
    <span className="travel-transports" aria-hidden="true">
      {transportModes[optionId].map(mode => (
        <svg key={mode} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" focusable="false">
          <path d={transportPaths[mode]} />
        </svg>
      ))}
    </span>
  )
}

function TravelStepFlow({ stops }) {
  return (
    <ol className="travel-flow">
      {stops.map((stop, index) => <li key={`${index}-${stop}`}>{stop}</li>)}
    </ol>
  )
}

function TravelOptionCard({ option, text }) {
  return (
    <article className={`travel-card${option.id === 'recommended' ? ' travel-card--recommended' : ''}`}>
      <span className="travel-badge">{option.badge}</span>
      <TransportIcons optionId={option.id} />
      <h3><a href={`#travel-${option.id}`}>{option.title}</a></h3>
      <p>{option.description}</p>
      <dl className="travel-metrics">
        <div><dt>{text.comfort}</dt><dd>{option.comfort}</dd></div>
        <div><dt>{text.cost}</dt><dd>{option.cost}</dd></div>
        <div><dt>{text.time}</dt><dd>{option.time}</dd></div>
      </dl>
    </article>
  )
}

export default function Travel() {
  const { currentLanguage } = useOutletContext()
  const text = translations[currentLanguage].travel

  return (
    <main className="travel-page" lang={currentLanguage}>
      <section className="travel-hero" aria-labelledby="travel-title">
        <h1 id="travel-title">{text.title}</h1>
        <p className="travel-subtitle">{text.subtitle}</p>
        <p>{text.intro}</p>
      </section>

      <section className="travel-overview" aria-labelledby="travel-overview-title">
        <h2 id="travel-overview-title">{text.overviewTitle}</h2>
        <div className="travel-cards">
          {text.options.map(option => <TravelOptionCard key={option.id} option={option} text={text} />)}
        </div>
      </section>

      <section className="travel-routes" aria-labelledby="travel-routes-title">
        <h2 id="travel-routes-title">{text.routeTitle}</h2>
        {text.routes.map((stops, index) => <TravelStepFlow key={index} stops={stops} />)}
        <p className="travel-muted">{text.routeNote}</p>
      </section>

      <section className="travel-options" aria-labelledby="travel-options-title">
        <h2 id="travel-options-title">{text.detailsTitle}</h2>
        {text.options.map(option => (
          <article className="travel-option" id={`travel-${option.id}`} key={option.id} aria-labelledby={`travel-${option.id}-title`}>
            <div className="travel-option-heading">
              <span className="travel-badge">{option.badge}</span>
              <TransportIcons optionId={option.id} />
            </div>
            <h3 id={`travel-${option.id}-title`}>{option.title}</h3>
            <p>{option.description}</p>
            <TravelStepFlow stops={option.flow} />
            <div className="travel-option-body">
              <div>
                <h4>{text.stepsTitle}</h4>
                <ol className="travel-steps">
                  {option.steps.map(step => (
                    <li key={step.title}>
                      <h5>{step.title}</h5>
                      <ul>{step.items.map(item => <li key={item}>{item}</li>)}</ul>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="travel-option-aside">
                <dl className="travel-facts">
                  {option.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
                </dl>
                <h4>{text.observations}</h4>
                <ul className="travel-notes">{option.notes.map(note => <li key={note}>{note}</li>)}</ul>
                <div className="travel-ideal">
                  <h4>{text.idealFor}</h4>
                  <p>{option.ideal}</p>
                </div>
              </div>
            </div>
            <p className="travel-conclusion">{option.conclusion}</p>
          </article>
        ))}
      </section>

      <section className="travel-tips" aria-labelledby="travel-tips-title">
        <h2 id="travel-tips-title">{text.tipsTitle}</h2>
        <ul>{text.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>
      </section>

      <section className="travel-summary" aria-labelledby="travel-summary-title">
        <h2 id="travel-summary-title">{text.summaryTitle}</h2>
        <p>{text.summary}</p>
        <h3>{text.sourcesTitle}</h3>
        <ul className="travel-resources">
          <li><a href="https://www.oasa.gr/en/visit-athens/airport-express-bus-lines/">OASA · X93 / X95</a></li>
          <li><a href="https://www.levanteferries.com/en/routes/">Levante Ferries</a></li>
          <li><a href="https://www.skyscanner.net/carhire">Skyscanner</a></li>
          <li><a href="https://www.rentalcars.com/">Rentalcars</a></li>
          <li><a href="https://www.discovercars.com/">DiscoverCars</a></li>
        </ul>
        <p className="travel-muted travel-disclaimer">{text.note}</p>
      </section>
    </main>
  )
}
