export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500">
          Think Intelligent.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          HyperCluster is pioneering the next generation of AI research, pushing the boundaries of artificial intelligence.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 blur-3xl opacity-20" />
          <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mx-auto max-w-4xl">
            <p className="text-lg text-gray-300">
              Our mission is to develop cutting-edge AI technologies that transform industries and improve lives through innovative solutions and groundbreaking research.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

