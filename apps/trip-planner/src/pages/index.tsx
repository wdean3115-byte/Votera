const rows = [
  {
    type: 'folder',
    name: 'api/hello',
    message: 'fixed all issues',
    date: '3 days ago',
  },
  {
    type: 'file',
    name: 'global.css',
    message: 'fixed all issues',
    date: '3 days ago',
  },
  {
    type: 'file',
    name: 'layout.tsx',
    message: 'fixed all issues',
    date: '3 days ago',
  },
  {
    type: 'file',
    name: 'page.tsx',
    message: 'fixed the nx run command bug',
    date: '2 days ago',
  },
];

const columnTemplate = '1.4fr 1fr 0.6fr';

function FolderIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 6.5C3 5.12 4.12 4 5.5 4H9l2 2h7.5C19.88 6 21 7.12 21 8.5v9C21 18.88 19.88 20 18.5 20h-13C4.12 20 3 18.88 3 17.5v-11Z"
        fill="#9aa4b2"
      />
      <path d="M3 9h18" stroke="#6b7280" strokeWidth="1" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        fill="#a7b0bc"
      />
      <path d="M14 3v5h5" stroke="#6b7280" strokeWidth="1" />
    </svg>
  );
}

export function Index() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '28px',
        background:
          'radial-gradient(circle at 15% 15%, rgba(26, 32, 44, 0.9), rgba(11, 15, 22, 1))',
      }}
    >
      <div
        style={{
          maxWidth: '980px',
          margin: '40px auto',
        }}
      >
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid #273141',
            overflow: 'hidden',
            background:
              'linear-gradient(180deg, rgba(14, 19, 27, 0.95), rgba(11, 15, 22, 0.95))',
            boxShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: columnTemplate,
              padding: '16px 20px',
              borderBottom: '1px solid #2a3546',
              color: '#8aa1b7',
              fontSize: '14px',
              letterSpacing: '0.02em',
            }}
          >
            <span>Name</span>
            <span>Last commit message</span>
            <span style={{ textAlign: 'right' }}>Last commit date</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: columnTemplate,
              padding: '16px 20px',
              borderBottom: '1px solid #1f2937',
              color: '#94a3b8',
              fontSize: '14px',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FolderIcon />
              <span>..</span>
            </div>
            <span></span>
            <span></span>
          </div>

          {rows.map((row) => (
            <div
              key={row.name}
              style={{
                display: 'grid',
                gridTemplateColumns: columnTemplate,
                padding: '16px 20px',
                borderBottom: '1px solid #1f2937',
                color: '#cbd5f5',
                fontSize: '15px',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {row.type === 'folder' ? <FolderIcon /> : <FileIcon />}
                <span style={{ color: '#e2e8f0' }}>{row.name}</span>
              </div>
              <span style={{ color: '#c1cadd' }}>{row.message}</span>
              <span style={{ textAlign: 'right', color: '#8fb3ff' }}>
                {row.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
