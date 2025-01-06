"use client";

import { Button } from "@/components/ui/button"
import { ArrowDown } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/api/resume');
      
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-8 overflow-hidden rounded-full border-2 border-primary">
          <Image
            src="/placeholder.svg"
            alt="Profile picture"
            width={200}
            height={200}
            className="h-[200px] w-[200px] object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Hello, I'm <span className="text-primary">Christopher Mason</span>
        </h1>
        <h2 className="mt-6 text-xl text-muted-foreground md:text-2xl">
          Software Engineer & Full-Stack Developer
        </h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={handleDownloadResume}
            disabled={isDownloading}
          >
            <a download>
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>
        <a
          href="#about"
          className="mt-16 animate-bounce text-muted-foreground hover:text-foreground"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

