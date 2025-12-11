export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-600 mb-6 text-lg">
          Let's work together. You can reach me anytime.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition inline-block font-medium"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
