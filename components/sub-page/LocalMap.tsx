// Embedded Google Map of the Govind Nagar office. Uses the keyless query-embed
// endpoint so it works without a Maps API key on a static site.
//
// TODO (recommended): replace the `src` below with the exact "Embed a map"
// code from your Google Business Profile (GBP → your listing → Share → Embed a
// map → copy the src="https://www.google.com/maps/embed?pb=..." URL). That
// pins the map to your VERIFIED listing rather than an address search.

// Exact Google Business Profile pin coordinates — drops the marker precisely on
// the Govind Nagar office rather than geocoding an address string.
const MAP_SRC = 'https://maps.google.com/maps?q=26.447437,80.306051&z=16&output=embed';

export function LocalMap({ title = 'Verelios Labs office location — Govind Nagar, Kanpur' }: { title?: string }) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        lineHeight: 0,
      }}
    >
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
    </div>
  );
}

export default LocalMap;
