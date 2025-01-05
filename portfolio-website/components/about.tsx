import { Card, CardContent } from "@/components/ui/card"
import { Code2, Server, Smartphone } from 'lucide-react'

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and TypeScript",
    icon: Code2,
  },
  {
    name: "Backend Development",
    description: "Creating scalable server-side applications with Node.js and Python",
    icon: Server,
  },
  {
    name: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native",
    icon: Smartphone,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">About Me</h2>
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p className="mb-8">
            I'm a passionate software engineer with expertise in full-stack development.
            I love building elegant solutions to complex problems and learning new technologies.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardContent className="flex flex-col items-center p-6">
                <skill.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{skill.name}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

