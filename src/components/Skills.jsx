export default function Skills() {
  const skills = ["React", "Tailwind", "Figma", "Node.js", "Firebase", "UI/UX"];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full bg-white shadow-md text-gray-800 font-medium hover:shadow-lg transition"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
