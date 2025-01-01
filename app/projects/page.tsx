import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "manimator",
      description:
        "An AI tool that converts research papers or user prompts into the 3Blue1Brown style visual mathematical explanatory video",
      image: "/manimator.png",
      tags: ["Manim", "Visualization", "Research"],
      github: "https://github.com/HyperCluster-Tech/manimator",
      demo: "https://manimator.hypercluster.tech",
    },
    {
      title: "Coming Soon",
      description:
        "Our next exciting project is under development. Stay tuned for updates!",
      image: "/coming-soon.png",
      tags: ["Under Development"],
      isComingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      <Header />
      <main className="flex-grow py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <Card className="relative bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors h-full flex flex-col">
                  <CardContent className="p-6">
                    {project.isComingSoon ? (
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-400 animate-pulse">
                          Coming Soon
                        </span>
                      </div>
                    ) : (
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  {!project.isComingSoon && (
                    <CardFooter className="p-6 pt-0 mt-auto flex gap-4">
                      <Button variant="outline" className="flex-1">
                        <Link
                          href={project.github!}
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button variant="outline" className="flex-1">
                          <Link
                            href={project.demo!}
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
