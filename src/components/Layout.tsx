import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ExitIntentPopup } from '../components/ExitIntentPopup';
import { Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-body font-sans selection:bg-brand-accent/30 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ExitIntentPopup />
      
      {/* Sticky Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-bg/80 backdrop-blur-md border-t border-brand-border z-40">
        <Link
          to="/contact"
          className="btn-shimmer flex items-center justify-center w-full h-[52px] rounded-xl text-white font-bold shadow-[0_4px_20px_rgba(232,89,60,0.4)]"
        >
          Start Free Trial
        </Link>
      </div>
    </div>
  );
}
