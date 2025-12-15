export default function Navbar() {
  return (
    <nav className="w-full px-10 py-4 flex justify-between items-center bg-black/70 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 text-white">

      <h1 className="text-3xl font-extrabold tracking-wide">HD</h1>

      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <a
            href="#home"
            className="px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
