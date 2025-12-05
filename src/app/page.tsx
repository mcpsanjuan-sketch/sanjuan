export default function HomePage() {
  return (
    <div className="relative">

      <div className="text-center py-10">

        <img
          src="pic.jpg"
          alt="My Photo"
          className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-white"
        />

        <h1 className="text-5xl font-extrabold mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Hello, I'm Ma.Chris SanJuan👋
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Welcome to my personal website! I’m a passionate student who loves
          technology, creativity, and building digital experiences.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition">
        <a href="about">Learn More About Me</a>
        </button> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl shadow-md bg-white border hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">  <a href="education">📚 Education</a></h3>
            <p className="text-gray-600">Explore my academic achievements.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-white border hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">  <a href="hobbies">🎨 Hobbies</a></h3>
            <p className="text-gray-600">What I enjoy doing in my free time.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-white border hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2"><a href ="contact">📬 Contact</a></h3>
            <p className="text-gray-600">Reach out and connect with me.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
