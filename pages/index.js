
export default function Home() {
  const resume = {
  "title": "Professional",
  "email": "contact@example.com",
  "summary": "Experienced professional",
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],
  "experience": [],
  "education": [],
  "projects": []
};

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{resume.name || ""}</h1>
          <p className="text-xl text-gray-400">{resume.title || ""}</p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {resume.summary || ""}
          </p>
        </section>

        {resume.skills && resume.skills.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {resume.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {resume.projects && resume.projects.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resume.projects.map((project, i) => (
                <div key={i} className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold">
                    {project.name || ""}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {project.description || ""}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="text-center text-gray-600 border-t border-gray-800 pt-8">
          Built with Next.js & Tailwind CSS
        </footer>

      </div>
    </div>
  );
}
