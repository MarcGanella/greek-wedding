import TransportIcon from './TransportIcon.jsx'
import './TravelRoute.css'

export default function TravelRoute({ stops, label, destinationLabel }) {
  return (
    <ol className="travel-route" aria-label={label}>
      {stops.map((stop, index) => (
        <li className="travel-route__step" key={`${index}-${stop.location}`}>
          <div className={`travel-route__place${stop.destination ? ' travel-route__place--destination' : ''}`}>
            <span className="travel-route__marker" aria-hidden="true">
              {stop.destination && <TransportIcon type="location" />}
            </span>
            <span>
              <span className="travel-route__name">{stop.location}</span>
              {stop.destination && <span className="travel-route__destination-label">{destinationLabel}</span>}
            </span>
          </div>
          {stop.transport && (
            <div className="travel-route__leg">
              <TransportIcon type={stop.transport} />
              <span>{stop.transportLabel}{stop.detail && <small>{stop.detail}</small>}</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
