export default function Projects() {
  const data = [
    { title: "COMPANY PROFILE", img: "/project1.png" },
    { title: "Dashboard UI", img: "/project2.png" },
    { title: "Mobile App", img: "/project3.png" },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.map((p, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
          >
            <img src={p.img} className="rounded-lg mb-4 w-full h-56 object-cover" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
