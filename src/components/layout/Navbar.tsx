import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';

const Navbar = () => {
  const { user, signIn, logout } = useAuth();

  return (
    <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45">
          <div className="w-4 h-4 bg-white rotate-45" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase text-white">AI.Agency</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 items-center">
        <Link to="/process" className="hover:text-white transition-colors">Process</Link>
        <Link to="/work" className="hover:text-white transition-colors">Work</Link>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <Link to="/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-[10px] text-white/40 tracking-widest hidden sm:block">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={i < 4 ? 'text-white' : ''}>▶</span>
          ))}
        </div>

        {user ? (
          <div className="flex items-center gap-4 group cursor-pointer relative" onClick={() => logout()}>
            <div className="text-right hidden md:block">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white leading-none mb-1">{user.displayName}</p>
              <p className="text-[8px] uppercase tracking-tighter text-white/40 leading-none">Sign Out</p>
            </div>
            <img 
              src={user.photoURL || ""} 
              alt="Profile" 
              className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white transition-colors"
            />
          </div>
        ) : (
          <button 
            onClick={() => signIn()}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-black bg-white px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Side Menu Label (Floating) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 pointer-events-none">
        <div className="h-20 w-[1px] bg-white/20" />
        <div className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">
          Menu
        </div>
        <div className="h-20 w-[1px] bg-white/20" />
      </div>
    </nav>
  );
};

export default Navbar;
