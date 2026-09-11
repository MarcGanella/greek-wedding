import { useOutletContext } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import './Program.css'

const schedule = [
  { time: '17:30', eventKey: 'welcome' },
  { time: '18:00', eventKey: 'ceremony' },
  { time: '19:00', eventKey: 'aperitif' },
  { time: '21:00', eventKey: 'dinner' },
  { time: '23:00', eventKey: 'party' },
  { time: '04:30', eventKey: 'departure' },
]

export default function Program() {
  const { currentLanguage } = useOutletContext()
  const text = translations[currentLanguage].program

  return (
    <main className="program-page" lang={currentLanguage}>
      <header className="program-header">
        <h1>{text.title}</h1>
        <p className="program-subtitle">{text.subtitle}</p>
        <p className="program-provisional">{text.provisional}</p>
        <p>{text.provisionalNote}</p>
      </header>

      <section className="program-dress-code" aria-labelledby="program-dress-code-title">
        <h2 id="program-dress-code-title">{text.dressCode.title}</h2>
        <p>{text.dressCode.text}</p>
        <p><strong>{text.dressCode.note}</strong></p>
      </section>

      <section className="program-schedule" aria-labelledby="program-schedule-title">
        <h2 id="program-schedule-title">{text.scheduleTitle}</h2>
        <ol className="program-timeline">
          {schedule.map(({ time, eventKey }) => (
            <li className="program-timeline-item" key={eventKey}>
              <time className="program-time" dateTime={time}>{time}</time>
              <h3>{text.schedule[eventKey]}</h3>
            </li>
          ))}
        </ol>
      </section>

      <footer className="program-note">
        <p><strong>{text.provisional}</strong></p>
        <p>{text.provisionalNote}</p>
      </footer>
    </main>
  )
}
