export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide">MyPortfolio</h1>

        <ul className="flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </ul>
      </div>
    </nav>
  );
}
