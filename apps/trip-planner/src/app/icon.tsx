import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  const logoPath = join(process.cwd(), 'public/logo.png');
  const logoBuffer = readFileSync(logoPath);
  const logoDataUrl = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#3a3a3d',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 320,
            height: 320,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 74,
            background: '#0f0f10',
            boxShadow: '0 22px 60px rgba(0,0,0,0.28)',
          }}
        >
          <img
            src={logoDataUrl}
            alt="Votera"
            width={180}
            height={180}
            style={{
              objectFit: 'contain',
              filter: 'brightness(0) contrast(2)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
