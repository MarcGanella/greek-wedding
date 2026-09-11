import './VenueMap.css'

export function VenueMapLink({ mapUrl, children, pendingText }) {
  if (!mapUrl || mapUrl === 'PENDING_GOOGLE_MAPS_URL') {
    return (
      <div className="venue-map-link-pending">
        <button className="venue-map-link" type="button" disabled>{children}</button>
        <p>{pendingText}</p>
      </div>
    )
  }

  return <a className="venue-map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function VenueMap({ mapUrl, embedUrl, name, address, text, pendingText }) {
  return (
    <section className="venue-map" aria-labelledby="venue-map-title">
      <h2 id="venue-map-title">{text.title}</h2>
      {embedUrl ? (
        <iframe className="venue-map-frame" src={embedUrl} title={text.iframeTitle} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="venue-map-fallback">
          <h3>{name}</h3>
          <p>{address}</p>
        </div>
      )}
      <VenueMapLink mapUrl={mapUrl} pendingText={pendingText}>{text.openMaps}</VenueMapLink>
    </section>
  )
}
