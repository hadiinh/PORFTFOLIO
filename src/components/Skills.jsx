import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "React", value: 90 },
    { name: "Tailwind CSS", value: 85 },
    { name: "Node.js", value: 75 },
    { name: "Figma / UI-UX", value: 80 },
    { name: "Firebase", value: 40 },
    { name: "Laravel", value: 40 },
  ];

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      {/* === CARD WRAPPER === */}
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md shadow-lg p-10 rounded-2xl border border-white/20 space-y-8">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{animate ? skill.value + "%" : "0%"}</span>
            </div>

            <div className="w-full h-4 bg-gray-300 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-[1500ms]"
                style={{ width: animate ? skill.value + "%" : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
