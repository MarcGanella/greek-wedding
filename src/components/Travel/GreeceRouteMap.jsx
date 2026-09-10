import { useId, useState } from 'react'
import TransportIcon from './TransportIcon.jsx'
import './GreeceRouteMap.css'

const routeOptions = ['economy', 'recommended', 'adventure']

export default function GreeceRouteMap({ text, note }) {
  const [route, setRoute] = useState('recommended')
  const id = useId()
  const isAdventure = route === 'adventure'

  return (
    <section className="greece-map" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{text.title}</h2>
      <div className="greece-map__controls" role="group" aria-label={text.chooseRoute}>
        {routeOptions.map(option => (
          <button key={option} type="button" aria-pressed={route === option} onClick={() => setRoute(option)}>
            {text[option]}
          </button>
        ))}
      </div>
      <figure className={`greece-map__figure${isAdventure ? ' greece-map__figure--adventure' : ''}`}>
        <svg className="greece-map__drawing" viewBox="0 0 320 360" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{text.title} · {text[route]}</title>
          <desc id={`${id}-description`}>{text.descriptions[route]}</desc>
          <g className="greece-map__land" aria-hidden="true">
            <path d="M135 72L180 50 240 80 260 120 240 144 276 172 258 200 225 181 220 215 185 200 155 214 118 177Z" />
            <path d="M160 228L194 222 218 238 238 256 217 288 225 332 204 319 192 349 176 318 154 332 141 297 121 270Z" />
            <path d="M76 216l8 10-4 15-9-5z M94 250l8 8-3 12-8-5z M64 180l5 9-4 8-5-11z" />
          </g>
          <g className="greece-map__connections" aria-hidden="true">
            <path className="greece-map__flight" d="M30 45Q292 4 262 183" />
            <path className={route === 'recommended' ? 'greece-map__main-road' : ''} d="M262 183Q240 209 208 238" />
            <path className="greece-map__nearby" d="M145 275L208 238" />
            {isAdventure && <path className="greece-map__flight" d="M30 45L36 110Q42 167 74 227L145 275" />}
          </g>
          <g className="greece-map__symbols" aria-hidden="true">
            <g transform="translate(177 46)"><TransportIcon type="plane" /></g>
            <g transform="translate(258 212)"><TransportIcon type={route === 'economy' ? 'bus' : 'car'} /></g>
            <g transform="translate(120 236)"><TransportIcon type="car" /></g>
            {isAdventure && <>
              <g transform="translate(10 67)"><TransportIcon type="plane" /></g>
              <g transform="translate(34 153)"><TransportIcon type="plane" /></g>
              <g transform="translate(82 259)"><TransportIcon type="ferry" /></g>
            </>}
          </g>
          <g className="greece-map__points">
            <circle cx="30" cy="45" r="4" />
            <circle cx="262" cy="183" r="4" />
            <circle cx="145" cy="275" r="4" />
            <circle cx="74" cy="227" r="4" />
            {isAdventure && <circle cx="36" cy="110" r="4" />}
            <circle className="greece-map__destination-ring" cx="208" cy="238" r="10" />
            <circle cx="208" cy="238" r="5" />
          </g>
          <g className="greece-map__labels">
            <text x="14" y="26">{text.barcelona}</text>
            <text x="246" y="159" textAnchor="middle">{text.athens}</text>
            <text className="greece-map__destination-label" x="226" y="251">{text.aigio}</text>
            <text x="130" y="309">{text.patras}</text>
            <text x="8" y="211">{text.ionianIslands}</text>
            {isAdventure && <text x="16" y="138">{text.rome}</text>}
            {route !== 'economy' && <text className="greece-map__time" x="278" y="203" textAnchor="middle">{text.twoHours}</text>}
            <text className="greece-map__time" x="153" y="228">{text.thirtyMinutes}</text>
          </g>
        </svg>
        <figcaption className="greece-map__caption">
          <p>{text.schematic}</p>
          <p>{note}</p>
        </figcaption>
      </figure>
    </section>
  )
}
