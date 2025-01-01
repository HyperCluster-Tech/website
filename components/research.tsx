export default function Research() {
  const areas = [
    {
      title: "Large Language Models",
      description:
        "Developing practical applications with LLMs and optimizing their deployment and inference processes.",
    },
    {
      title: "Diffusion Models",
      description:
        "Working on hands-on AI projects using diffusion models and image generation techniques to create and enhance visual content.",
    },
    {
      title: "Agentic AI",
      description:
        "Developing agentic AI systems that create original content across multiple modalities, including text, images, audio, and code.",
    },
  ];

  return (
    <section id="research" className="py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          Research Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative h-full bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
