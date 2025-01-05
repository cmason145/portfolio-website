import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below or reach out through social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button>Send Message</Button>
              </form>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

