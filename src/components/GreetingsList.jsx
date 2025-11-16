import React from 'react'

const GreetingsList = ({
  words = ["Hello", "नमस्ते", "Hola", "Bonjour", "こんにちは", "مرحبا", "Ciao", "Здравствуйте"],
  className = 'min-h-screen w-full flex items-center justify-center bg-transparent',
}) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center p-8">
        {words.map((w, i) => (
          <div key={i} className="text-2xl md:text-4xl font-semibold text-white/95">
            {w}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GreetingsList
