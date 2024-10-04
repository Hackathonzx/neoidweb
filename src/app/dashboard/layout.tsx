export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
          <h1>NeoID Dashboard</h1>
        </header>
        <main style={{ flex: 1, padding: '20px' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
        </footer>
      </div>
    );
  }