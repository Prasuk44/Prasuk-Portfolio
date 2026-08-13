import React, { useMemo } from 'react'

const Particles = ({ count = 8 }) => {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${8 + ((i * 11) % 84)}%`,
        size: 3 + (i % 4),
        duration: 14 + (i % 7) * 2,
        delay: -(i * 1.7),
        opacity: 0.12 + (i % 5) * 0.04,
      })),
    [count]
  )

  return (
    <div className="particles-layer" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Particles
