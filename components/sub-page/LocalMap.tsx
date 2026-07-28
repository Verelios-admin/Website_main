'use client';

// Embedded Google Map of the Govind Nagar office, behind a click-to-load facade.
//
// Why the facade: the bare <iframe loading="lazy"> still pulled ~315KB of Google
// Maps JavaScript (places.js + main.js + init_embed.js + util.js) on the initial
// load of /locations/kanpur, pushing that page's Time-to-Interactive to 11.4s on
// throttled mobile — the worst of any template — for a widget most visitors never
// interact with. `loading="lazy"` defers by viewport proximity, which this map is
// close enough to trigger. Mounting the iframe only on click drops the entire
// cost for everyone who doesn't ask for it, while the address, the directions
// link and the map preview stay in the static HTML for users and crawlers.
//
// TODO (recommended): replace the `src` below with the exact "Embed a map" code
// from your Google Business Profile (GBP → your listing → Share → Embed a map →
// copy the src="https://www.google.com/maps/embed?pb=..." URL). That pins the map
// to your VERIFIED listing rather than an address search, so the card shows the
// business name and rating instead of a bare pin.

import { useState } from 'react';

// Exact Google Business Profile pin coordinates — drops the marker precisely on
// the Govind Nagar office rather than geocoding an address string.
const MAP_SRC = 'https://maps.google.com/maps?q=26.447437,80.306051&z=16&output=embed';
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=26.447437,80.306051';

export function LocalMap({
  title = 'Verelios Labs office location — Govind Nagar, Kanpur',
}: {
  title?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        lineHeight: 0,
        position: 'relative',
        background:
          'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(55,48,200,0.06))',
      }}
    >
      {loaded ? (
        <iframe
          title={title}
          src={MAP_SRC}
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div
          style={{
            height: 320,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            padding: 24,
            lineHeight: 1.5,
            textAlign: 'center',
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>
            126/58 G Block, Govind Nagar
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.62)' }}>
            Kanpur, Uttar Pradesh 208006
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              style={{
                cursor: 'pointer',
                minHeight: 44,
                padding: '11px 18px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.22)',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.92)',
                font: 'inherit',
                fontSize: 14,
              }}
            >
              Load interactive map
            </button>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 44,
                padding: '11px 18px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'rgba(255,255,255,0.72)',
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Get directions
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocalMap;
