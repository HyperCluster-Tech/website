import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Samarth P",
      image: "/samarth.jpeg",
    },
    {
      name: "Vyoman Jain",
      image: "/vyoman.jpg",
    },
    {
      name: "Sai Sathvik",
      image: "/sai_sathvik.jpeg",
    },
    {
      name: "Shiva Golugula",
      image: "/shiva.jpeg",
    },
  ];

  return (
    <section id="team" className="py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-colors">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-50" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="relative rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
