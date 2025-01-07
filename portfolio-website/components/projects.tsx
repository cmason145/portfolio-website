import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from 'lucide-react'

const projects = [
  {
    title: "C++ Options Trading Platform",
    description: "A full-stack web application built with Next.js and TypeScript",
    tags: ["C++", "QuantLib", "ZeroMQ"],
    github: "https://github.com/cmason145/options-trading-project",
  },
  {
    title: "C Neural Network Implementation",
    description: "An implementation of a rudimentary neural network in C",
    tags: ["C", "Make",],
    github: "https://github.com/cmason145/Neural-Networks-in-C",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 py-24">
      <div className="container px-4 py-8 md:px-8 md:py-12">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {/* <Button size="sm" variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

