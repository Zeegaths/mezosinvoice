// App.tsx
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/ToastContainer';
import type { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="flex h-screen bg-gray-50">
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Main content area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
              <div className="animate-fade-in">
                <LandingPage onNavigate={setCurrentPage} />
              </div>
            </main>
            
            {/* Footer */}
            <footer className="footer no-print bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-600">
              Lipa Invoice © 2025 <span className="text-red-500">♥</span>
              <a 
                href="https://icphubkenya.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 hover:underline focus:underline focus:outline-none text-orange-500"
              >
                ICP Hub Kenya
              </a>
            </footer>
          </div>
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;