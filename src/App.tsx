import { useState } from 'react';
import { Header } from './components/Header';
import { LeftNavigation } from './components/LeftNavigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProcurementHubPage } from './pages/ProcurementHubPage';
import { VendorsPage } from './pages/VendorsPage';
import { ContractsPage } from './pages/ContractsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ITServicesPage } from './pages/ITServicesPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  const renderPage = () => {
    switch (activeNav) {
      case 'home':
        return <HomePage />;
      case 'procurement':
        return <ProcurementHubPage />;
      case 'vendors':
        return <VendorsPage />;
      case 'contracts':
        return <ContractsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'it':
        return <ITServicesPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <LeftNavigation activeNav={activeNav} setActiveNav={setActiveNav} />
        
        <main className="flex-1 ml-16 mt-[72px] p-2 sm:p-3 lg:p-4 pb-2 sm:pb-3 lg:pb-4 transition-all duration-300">
          <div className="max-w-full lg:max-w-[1360px] xl:max-w-[1600px] mx-auto">
            {renderPage()}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}