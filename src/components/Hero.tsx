export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, I'm <span className="text-blue-600">Alex</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Full-Stack Developer specializing in C#, .NET, and modern web apps.
        </p>
        {/* Placeholder for photo */}
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <span className="text-gray-500">Photo</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          View Projects
        </button>
      </div>
    </section>
  );
}
