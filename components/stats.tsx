import { Brain, Network, Cpu, Database } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      value: "50+",
      label: "Research Papers",
      icon: Brain
    },
    {
      value: "100K",
      label: "Model Parameters",
      icon: Network
    },
    {
      value: "24/7",
      label: "Computing Power",
      icon: Cpu
    },
    {
      value: "3.2TB",
      label: "Training Data",
      icon: Database
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

