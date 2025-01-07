import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineer",
    company: "WMG, Inc.",
    period: "2024 - Present",
    location: "Peekskill, NY",
    description: [
      "Developed and maintained full-stack web applications as a C# developer",
      "Optimized database queries improving performance by 50%",
    ],
    technologies: ["C#", ".NET", "Azure", "Docker", "Postman", ]
  },
  {
    title: "Software Engineer Intern",
    company: "Advanced Health Academy",
    period: "2022 - 2024",
    location: "San Francisco, CA",
    description: [
      "Led development on IOS application, helping to drive first 100 users, and launch on the App Store",
      "Refactored IaC code using AWS Cloudformation, combined with GraphQL.",
      "Engineered a rules engine in Python using the  PyKE library, , translating JSON rule objects into Django Q objects for API endpoints."
    ],
    technologies: ["Swift", "Python", "AWS", "GraphQL", "Git"]
  },
  {
    title: "Software Developer",
    company: "Yektasonics",
    period: "2022-2023",
    location: "Cupertino, CA",
    description: [
      "Architected a cross-platform desktop application  to interface the company’s C++ modules with Pico and Arduino hardware.",
      "Designed enterprise-level scripts using Ninja to leverage Link Time Optimization to reduce compilation time by 5 minutes.",
      "Enhanced test infrastructure by writing over 150+ unit tests in Catch2 and 50+ integration tests in Trompeloeil."
    ],
    technologies: ["C++", "Eletron.JS", "Node.JS", "Ninja", "CMake", "Catch2", "Pico/Arduino"]
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

