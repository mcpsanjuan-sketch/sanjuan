export default function AboutPage() {
  return (
    
    <div className="py-10">
     <a
        href="home"
        className="absolute top-6 left-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        <span className="mr-2">←</span> Back to Home
      </a>

      <div className="text-center py-10"></div>
      
      <h1 className="text-4xl font-extrabold text-center mb-6 
        bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col items-center text-center">
        <img
          src="pic.jpg"
          alt="My Photo"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
        />

        <h2 className="text-2xl font-bold mt-4">Ma.Chris SanJuan</h2>
        <p className="text-gray-600">Naga City</p>

        <p className="mt-4 max-w-2xl text-gray-700 leading-relaxed">
          I am a passionate learner and aspiring web developer who loves building websites,
          solving problems, and exploring new technologies. I believe in continuous learning
          and improving myself every day.
        </p>
      </div>

      <div className="mt-10 bg-white p-6 max-w-3xl mx-auto rounded-xl shadow-md border">
        <h3 className="text-2xl font-bold mb-3">Who I Am</h3>
        <p className="text-gray-700 leading-7">
          I'm Ma.Chris SanJuan, a motivated student who enjoys working with modern technologies such as
          JavaScript, HTML, CSS, and React. I love creating user-friendly interfaces and designing
          clean, functional layouts. My journey in tech started when I became curious about how websites
          work — and since then, I've been learning and building projects to improve my skills.
        </p>

        <p className="mt-4 text-gray-700 leading-7">
          Outside of coding, I enjoy activities like reading, exploring tools like Figma or Canva,
          watching tutorials, and discovering new ways to express creativity through design and technology.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">My Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white shadow-md border hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">💻 Web Development</h4>
            <ul className="text-gray-700 space-y-1">
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React & Next.js</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md border hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">🎨 Design</h4>
            <ul className="text-gray-700 space-y-1">
              <li>UI/UX Basics</li>
              <li>Figma</li>
              <li>Canva</li>
              <li>Creative Layouts</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md border hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">🧠 Personal Strengths</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Fast learner</li>
              <li>Team player</li>
              <li>Creative thinker</li>
              <li>Hardworking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-purple-50 border border-purple-200 p-8 rounded-xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">My Goal</h3>
        <p className="text-gray-700 leading-7">
          My goal is to become a skilled web developer capable of creating modern, responsive,
          and visually appealing applications. I aim to continue learning, building projects,
          and eventually working professionally in the tech industry.
        </p>
      </div>
    </div>
  );
}