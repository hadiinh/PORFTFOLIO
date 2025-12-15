export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-10 flex justify-center bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl">

        {/* FOTO BESAR KOTAK */}
        <div className="rounded-2xl shadow-xl overflow-hidden bg-white/80 backdrop-blur-md">
          <img
            src="/fotoaku.jpeg"
            alt="profile"
            className="w-72 h-96 object-cover"
          />
        </div>

        {/* TEKS DI SAMPING FOTO */}
        <div className="text-left">
          <p className="text-xs tracking-widest text-gray-300">
            Wellcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold mt-2 leading-snug text-white">
            Hallo, Saya <br />
            <span className="text-blue-500">Muhammad Saeful Nur Hadi<br /></span>
            <span className="text-white">Frontend Developer.</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-md">
            Passionate developer yang fokus membangun aplikasi web modern dan scalable. 
            Saya senang mengulik hal baru menjadi kode yang berkualitas.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-blue-800 hover:text-white transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-blue-800 hover:text-white transition"
            >
              Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
