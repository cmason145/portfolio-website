import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    location: "San Francisco, CA",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 40%"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    location: "New York, NY",
    description: [
      "Developed and maintained full-stack web applications",
      "Optimized database queries improving performance by 50%",
      "Collaborated with design team to implement responsive UI/UX"
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Redis"]
  },
  {
    title: "Junior Developer",
    company: "Digital Solutions",
    period: "2018 - 2019",
    location: "Boston, MA",
    description: [
      "Built and maintained client websites",
      "Implemented responsive designs and interactive features",
      "Participated in daily stand-ups and sprint planning"
    ],
    technologies: ["JavaScript", "React", "CSS", "Git"]
  }
]

export function EmploymentSection() {
  return (
    <section id="employment" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Employment History</h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <div className="text-lg text-primary">{experience.company}</div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{experience.period}</div>
                    <div>{experience.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-4 list-disc space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

