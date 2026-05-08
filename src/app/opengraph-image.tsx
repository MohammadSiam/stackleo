import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0E12',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,122,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        {/* Orange orb */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(232,74,0,0.15)',
            filter: 'blur(80px)',
          }}
        />

        <div style={{ position: 'relative', textAlign: 'center' }}>
          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #E84A00, #FF7A00)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>SL</span>
            </div>
            <span style={{ color: 'white', fontSize: '36px', fontWeight: '800' }}>StackLeo</span>
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: '800',
              color: 'white',
              lineHeight: 1.1,
              margin: '0 0 16px',
              maxWidth: '800px',
            }}
          >
            Building Software{' '}
            <span style={{ color: '#FF7A00' }}>Solutions</span>
          </h1>

          <p style={{ color: '#9ca3af', fontSize: '24px', margin: '0 0 40px' }}>
            Software Development Company — Dhaka, Bangladesh
          </p>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
            }}
          >
            {['40+ Projects', '98% Satisfaction', '5+ Years'].map((s) => (
              <div
                key={s}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  background: 'rgba(255,122,0,0.1)',
                  border: '1px solid rgba(255,122,0,0.3)',
                  color: '#FF7A00',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
