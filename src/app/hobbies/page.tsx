export default function HobbiesPage() {
  return (
    <>
    <a
        href="home"
        className="absolute top-6 left-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
      >
        <span className="mr-2">←</span> Back to Home
      </a>

      <div className="text-center py-10"></div>
     
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">My Hobbies</h1>
        <p className="mt-3 text-lg opacity-90">
          Things I love doing in my free time 💖
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold mb-2">Playing Video Games</h2>
          <p className="text-gray-600 leading-relaxed">
            I enjoy immersive open-world games, competitive shooters, and
            adventure RPGs that challenge my strategy and creativity.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-2xl font-bold mb-2">Reading & Learning</h2>
          <p className="text-gray-600 leading-relaxed">
            I love reading about technology, personal development, and
            new skills that help me grow both academically and personally.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">💻</div>
          <h2 className="text-2xl font-bold mb-2">Coding & Projects</h2>
          <p className="text-gray-600 leading-relaxed">
            Building websites and experimenting with new tools is one of my
            favorite ways to express creativity and improve my skill set.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🎧</div>
          <h2 className="text-2xl font-bold mb-2">Listening to Music</h2>
          <p className="text-gray-600 leading-relaxed">
            Music helps me relax and stay motivated. I enjoy pop, acoustic, and
            electronic playlists depending on my mood.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🏃‍♂️</div>
          <h2 className="text-2xl font-bold mb-2">Outdoor Activities</h2>
          <p className="text-gray-600 leading-relaxed">
            I enjoy walking, jogging, and exploring nature to keep my mind and
            body energized.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🎨</div>
          <h2 className="text-2xl font-bold mb-2">Art & Creativity</h2>
          <p className="text-gray-600 leading-relaxed">
            I enjoy designing graphics, experimenting with colors, and
            expressing creativity through digital or traditional art.
          </p>
        </div>

      </div>
    </>
  );
}
