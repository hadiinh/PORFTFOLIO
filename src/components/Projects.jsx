export default function Projects() {
  const data = [
    { title: "COMPANY PROFILE", img: "/project1.png", link: "https://avinierensemble.xyz" },
    { title: "Dashboard UI", img: "/project2.png", link: "https://dashboardmu.com" },
    { title: "Mobile App", img: "/project3.png", link: "https://mobileappmu.com" },
  ];

  const certificates = [
    { title: "Frontend Certificate", img: "/sertif1.png", link: "#" },
    { title: "Backend Certificate", img: "/sertif2.png", link: "#" },
    { title: "React Certificate", img: "/sertif3.png", link: "#" },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">

      {/* CARD WRAPPER PROJECTS */}
      <div className="max-w-6xl mx-auto mb-20 bg-white/30 backdrop-blur-md shadow-lg p-10 rounded-2xl border border-gray-400/50">

        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {data.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-2xl p-5 border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer block"
            >
              <img src={p.img} className="rounded-lg mb-4 w-full h-56 object-cover" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </a>
          ))}
        </div>

      </div>

      {/* CARD WRAPPER CERTIFICATES */}
      <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md shadow-lg p-10 rounded-2xl border border-gray-400/50">

        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {certificates.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-2xl p-5 border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer block"
            >
              <img src={c.img} className="rounded-lg mb-4 w-full h-56 object-cover" />
              <h3 className="text-xl font-semibold">{c.title}</h3>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
}
