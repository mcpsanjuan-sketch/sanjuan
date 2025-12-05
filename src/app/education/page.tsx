export default function EducationPage() {
  return (
    <>
     <a
        href="home"
        className="absolute top-6 left-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        <span className="mr-2">←</span> Back to Home
      </a>

      <div className="text-center py-10"></div>
      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-14 text-center text-white shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">My Education</h1>
        <p className="mt-3 text-lg opacity-90">
          A quick look at my academic background 📘
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6">

        <div className="bg-white p-8 rounded-xl shadow-xl border mb-10 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-indigo-700">
            🎓 Naga College Foundation Inc.
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            <strong>Bachelor of Science in Information Systems</strong>
          </p>
          <p className="text-gray-500">2023 – Present</p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I am currently studying Information Systems, where I develop skills
            in programming, system analysis, UI design, and modern web development.
            This course allows me to grow as a future IT professional.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>✔ Database Management</li>
            <li>✔ Systems Analysis & Design</li>
            <li>✔ Basic Programming (Python, Java)</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">📚 Academic Journey</h2>

        <div className="relative border-l-4 border-indigo-500 pl-8 space-y-12">

          <div>
            <div className="absolute -left-5 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
              🎒
            </div>
            <h3 className="text-2xl font-semibold">Senior High School</h3>
            <p className="text-gray-600">2019 – 2021</p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Completed the Academic Track with a focus on ICT, gaining basic
              knowledge in computer systems, programming, and digital tools.
            </p>
          </div>

          <div>
            <div className="absolute -left-5 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
              🏫
            </div>
            <h3 className="text-2xl font-semibold">Junior High School</h3>
            <p className="text-gray-600">2015 – 2019</p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Built a strong foundation in mathematics, science, and computer
              literacy while actively participating in school activities.
            </p>
          </div>

          <div>
            <div className="absolute -left-5 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
              ✏️
            </div>
            <h3 className="text-2xl font-semibold">Elementary Education</h3>
            <p className="text-gray-600">2009 – 2015</p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Completed basic education and developed essential skills such as
              reading, writing, and teamwork.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}