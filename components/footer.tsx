export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} HyperCluster. All rights reserved.</p>
      </div>
    </footer>
  )
}

