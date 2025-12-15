export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">

      <div className="max-w-xl mx-auto bg-white/30 backdrop-blur-md shadow-lg p-10 rounded-2xl border border-white/20">

        <h2 className="text-4xl font-bold text-center mb-12">Mari Terhubung</h2>
        
        <p className="text-center text-gray-700 mb-10">
          Saya tertarik dengan peluang baru dan selalu terbuka untuk diskusi. 
          Jangan ragu untuk menghubungi saya!
        </p>

        <div className="flex flex-col items-center gap-6">

          {/* Email Button */}
          <a
            href="mailto:msnhadiii@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-blue-800 transition inline-block font-medium"
          >
            Send Email
          </a>

          {/* ICONS */}
          <div className="flex items-center gap-6">

            {/* Instagram */}
            <a
              href="https://instagram.com/mefulnh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="Instagram"
              className="w-10 h-10"
            />
          </a>


            {/* GitHub */}
            <a
              href="https://github.com/hadiinh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
