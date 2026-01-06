import { Outlet, Link } from "react-router-dom";
import TrakasLogo from "./assets/Trakas.png";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={TrakasLogo}
              alt="TrakasSinN"
              className="h-16 w-32 rounded-lg"
              draggable={false}
            />
          </Link>
          <nav className="flex gap-10 text-zinc-300">
            <Link to="/guias" className="hover:text-lime-400 focus:text-lime-400 text-xl font-bold">Builds</Link>
            <Link to="/clips" className="hover:text-lime-400 focus:text-lime-400 text-xl font-bold">Clips</Link>
          </nav>
        </div>
      </header>

      <main className="flex justify-center py-10">
        <Outlet />
      </main>
    </div>
  );
}
