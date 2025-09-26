import { Card } from "@/components/ui/card"
import { Code, Database, Server, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Architecture",
      description: "Scalable server-side solutions with microservices",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Optimized data structures and queries",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Caching strategies and optimizations",
    },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Building the backbone of
            <span className="text-primary"> digital experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Specializing in robust backend systems that handle complex business logic and scale with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Security First</h4>
                  <p className="text-muted-foreground text-sm">Best practices for authentication and data protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-muted-foreground text-sm">Systems that grow with your user base</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Clean Code</h4>
                  <p className="text-muted-foreground text-sm">Maintainable, well-documented code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground ml-2">kenny-stack.js</span>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">technologies</span> ={" "}
                  {`{`}
                </div>
                <div className="ml-4">
                  <span className="text-green-400">languages</span>: [
                  <span className="text-orange-300">'Node.js', 'Python', 'Go'</span>],
                </div>
                <div className="ml-4">
                  <span className="text-green-400">databases</span>: [
                  <span className="text-orange-300">'PostgreSQL', 'MongoDB', 'Redis'</span>],
                </div>
                <div className="ml-4">
                  <span className="text-green-400">cloud</span>: [
                  <span className="text-orange-300">'AWS', 'Docker', 'Kubernetes'</span>],
                </div>
                <div className="ml-4">
                  <span className="text-green-400">tools</span>: [
                  <span className="text-orange-300">'Git', 'CI/CD', 'Monitoring'</span>]
                </div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
