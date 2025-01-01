import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Twitter, Github, Mail, Bot } from "lucide-react";

export default function Home() {
  const contacts = [
    {
      title: "Twitter",
      link: "https://twitter.com/HyperClusterAI",
      icon: <Twitter className="h-8 w-8" />,
      description: "Follow us for the latest updates",
    },
    {
      title: "GitHub",
      link: "https://github.com/HyperCluster-Tech",
      icon: <Github className="h-8 w-8" />,
      description: "Check out our projects",
    },
    {
      title: "HuggingFace",
      link: "https://huggingface.co/HyperCluster",
      icon: <span className="text-2xl">🤗</span>,
      description: "Explore our AI models",
    },
    {
      title: "Email",
      link: "mailto:hypercluster.tech@gmail.com",
      icon: <Mail className="h-8 w-8" />,
      description: "Get in touch with us",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      <Header />
      <section className="flex-grow py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Connect With Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <Link href={contact.link}>
                  <Card className="relative bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-50" />
                        {contact.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
