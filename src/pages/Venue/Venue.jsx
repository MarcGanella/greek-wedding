import { useOutletContext } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import VenueMap, { VenueMapLink } from '../../components/VenueMap/VenueMap.jsx'
import './Venue.css'

// TODO: replace with verified Liopetro Google Maps URL
const VENUE_MAP_URL = 'PENDING_GOOGLE_MAPS_URL'
// Add a verified Google Maps Embed URL here; regular Maps links cannot be embedded.
const VENUE_EMBED_URL = ''
const WEDDING_BUS = {
  outbound: '17:00',
  return: '04:30',
  confirmed: false,
}

// Adding this local file enables the photo; an absent file produces no image element.
const venuePhotos = import.meta.glob('../../assets/images/venue/liopetro.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})
const venuePhoto = venuePhotos['../../assets/images/venue/liopetro.jpg']

export default function Venue() {
  const { currentLanguage } = useOutletContext()
  const text = translations[currentLanguage].venue

  return (
    <main className="venue-page" lang={currentLanguage}>
      <section className="venue-intro" aria-labelledby="venue-title">
        <h1 id="venue-title">{text.title}</h1>
        <p className="venue-subtitle">{text.subtitle}</p>
        <p>{text.intro}</p>
      </section>

      <section className="venue-location venue-panel" aria-labelledby="venue-location-title">
        <h2 id="venue-location-title">{text.location.name}</h2>
        <p>{text.location.address}</p>
        <VenueMapLink mapUrl={VENUE_MAP_URL} pendingText={text.location.mapsPending}>{text.location.openMaps}</VenueMapLink>
        <p className="venue-duration"><strong>{text.location.fromAigio}</strong><br />{text.car.duration}</p>
      </section>

      <div className="venue-transport-options">
        <section className="venue-car venue-panel" aria-labelledby="venue-car-title">
          <h2 id="venue-car-title">{text.car.title}</h2>
          <p><strong>{text.car.duration}</strong></p>
          <p>{text.car.description}</p>
          <ul>{text.car.routeFeatures.map(item => <li key={item}>{item}</li>)}</ul>
          <p><strong>{text.parking.title}</strong></p>
          <VenueMapLink mapUrl={VENUE_MAP_URL} pendingText={text.location.mapsPending}>{text.car.openRoute}</VenueMapLink>
        </section>

        <section className="venue-private-bus venue-panel" aria-labelledby="venue-bus-title">
          <h2 id="venue-bus-title">{text.bus.title}</h2>
          <p>{text.bus.description}</p>
          <p className="venue-bus-recommendation"><strong>{text.bus.recommended}</strong></p>
          <div className="venue-bus-schedule">
            <p className="venue-schedule-badge">{WEDDING_BUS.confirmed ? text.bus.confirmed : text.bus.provisional}</p>
            <div className="venue-bus-journeys">
              {['outbound', 'return'].map(direction => (
                <div className="venue-bus-journey" key={direction}>
                  <h3>{text.bus[direction].title}</h3>
                  <p className="venue-bus-time"><time dateTime={WEDDING_BUS[direction]}>{WEDDING_BUS[direction]}</time></p>
                  <p>{text.bus[direction].from}</p>
                  <span className="venue-route-arrow" aria-hidden="true">↓</span>
                  <p>{text.bus[direction].to}</p>
                </div>
              ))}
            </div>
            {!WEDDING_BUS.confirmed && <p className="venue-confirmation-note">{text.bus.confirmationNote}</p>}
          </div>
        </section>
      </div>

      <section className="venue-parking venue-panel" aria-labelledby="venue-parking-title">
        <h2 id="venue-parking-title">{text.parking.title}</h2>
        <p>{text.parking.description}</p>
        <p><strong>{text.parking.noReservation}</strong></p>
      </section>

      <section className="venue-driving-advice" aria-labelledby="venue-driving-title">
        <h2 id="venue-driving-title">{text.car.adviceTitle}</h2>
        <ul>{text.car.advice.map(item => <li key={item}>{item}</li>)}</ul>
        <p><strong>{text.car.chooseBus}</strong></p>
      </section>

      {venuePhoto && <img className="venue-photo" src={venuePhoto} alt={text.photoAlt} loading="lazy" />}

      <VenueMap mapUrl={VENUE_MAP_URL} embedUrl={VENUE_EMBED_URL} name={text.location.name} address={text.location.address} text={text.map} pendingText={text.location.mapsPending} />
    </main>
  )
}
