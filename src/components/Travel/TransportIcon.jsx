const paths = {
  plane: 'M3 12l7-2 2-7h2v7l7 2v2l-7-1v5l2 2v1l-3-1-3 1v-1l2-2v-5l-9 1z',
  bus: 'M6 19v2m12-2v2M5 11h14M8 15h1m6 0h1M7 3h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
  car: 'M5 10l2-6h10l2 6M4 10h16v8H4zM6 18v3m12-3v3M7 14h1m8 0h1',
  ferry: 'M7 12V7h10v5M12 7V3m-3 0h6M3 12l9-2 9 2-3 6H6zM3 21l3-1 3 1 3-1 3 1 3-1 3 1',
  location: 'M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0z M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
}

export default function TransportIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d={paths[type]} />
    </svg>
  )
}
