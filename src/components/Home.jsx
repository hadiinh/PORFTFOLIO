export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gray-50"
    >
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Available for Work
        </p>

        <h1 className="text-6xl font-extrabold mt-4 mb-6 leading-tight">
          Hi, I’m a <span className="text-blue-600">Product Designer</span>.
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          I craft modern and intuitive digital products with clean UI and smooth UX.
        </p>

        <button className="mt-8 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition font-medium">
          Contact Me
        </button>
      </div>
    </section>
  );
}
