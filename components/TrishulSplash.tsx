"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function TrishulSplash() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Show splash for 2 seconds, then fade out
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-orange-50 to-red-50 transition-opacity duration-700 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.7s" }}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/trishul.png"
          alt="Trishul"
          width={120}
          height={120}
          className="animate-trishul"
          priority
        />
        {/* Optional: Add a fade-in/fade-out text or glow */}
        <span className="mt-4 text-2xl font-bold text-red-800 animate-pulse">ಶ್ರೀ ಮಾರಿಯಮ್ಮ</span>
      </div>
      <style jsx global>{`
        @keyframes trishul-pop {
          0% { transform: scale(0.5) rotate(-30deg); opacity: 0; }
          60% { transform: scale(1.1) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-trishul {
          animation: trishul-pop 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </div>
  )
}
