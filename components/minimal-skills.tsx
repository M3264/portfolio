"use client"

export function MinimalSkills() {
  const skills = [
    "NODE.JS",
    "PYTHON",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "EXPRESS.JS",
    "FASTAPI",
    "MONGODB",
    "POSTGRESQL",
    "REDIS",
    "DOCKER",
    "AWS",
    "REST APIs",
    "GRAPHQL",
    "MICROSERVICES",
  ]

  return (
    <div className="flex items-center justify-center min-h-screen px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-16 tracking-wider">SKILLS</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 border border-gray-800 bg-black/50 backdrop-blur-sm hover:border-gray-600 transition-colors"
            >
              <span className="font-mono text-sm text-gray-300">{skill}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-gray-800 bg-black/50 backdrop-blur-sm">
          <p className="font-mono text-gray-400 leading-relaxed">
            Specialized in building scalable backend architectures, API development, and system integration. Experienced
            with cloud platforms and modern DevOps practices.
          </p>
        </div>
      </div>
    </div>
  )
}
