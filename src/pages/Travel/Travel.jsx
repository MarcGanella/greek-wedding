import { useOutletContext } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import GreeceRouteMap from '../../components/Travel/GreeceRouteMap.jsx'
import TravelRoute from '../../components/Travel/TravelRoute.jsx'
import TransportIcon from '../../components/Travel/TransportIcon.jsx'
import './Travel.css'

const transportModes = {
  economy: ['plane', 'bus'],
  recommended: ['plane', 'car'],
  adventure: ['plane', 'ferry', 'car'],
}

const routeStops = {
  economy: [
    { location: 'barcelona', transport: 'plane' },
    { location: 'athensAirport', transport: 'bus' },
    { location: 'ktel', transport: 'bus', transportLabel: 'regionalBus' },
    { location: 'aigio', destination: true },
  ],
  recommended: [
    { location: 'barcelona', transport: 'plane' },
    { location: 'athensAirport', transport: 'car', detail: 'twoHours' },
    { location: 'aigio', destination: true },
  ],
  adventure: [
    { location: 'barcelona', transport: 'plane' },
    { location: 'rome', transport: 'plane' },
    { location: 'ionianIslands', transport: 'ferry' },
    { location: 'patras', transport: 'car', detail: 'thirtyMinutes' },
    { location: 'aigio', destination: true, transport: 'car' },
    { location: 'athensAirport', transport: 'plane' },
    { location: 'barcelona' },
  ],
}

function TransportIcons({ optionId }) {
  return (
    <span className="travel-transports" aria-hidden="true">
      {transportModes[optionId].map(mode => (
        <TransportIcon key={mode} type={mode} />
      ))}
    </span>
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

      <GreeceRouteMap text={text.map} note={text.routeNote} />

      <section className="travel-overview" aria-labelledby="travel-overview-title">
        <h2 id="travel-overview-title">{text.overviewTitle}</h2>
        <div className="travel-cards">
          {text.options.map(option => <TravelOptionCard key={option.id} option={option} text={text} />)}
        </div>
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
            <TravelRoute
              label={`${option.title} · ${text.stepsTitle}`}
              destinationLabel={text.map.destination}
              stops={routeStops[option.id].map(stop => ({
                ...stop,
                location: text.map[stop.location],
                transportLabel: text.map[stop.transportLabel || stop.transport],
                detail: text.map[stop.detail],
              }))}
            />
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
