"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/Amma/AmmaPhoto1.jpg",
      title: "Main Deity",
      description: "The sacred idol of Goddess Devi",
    },
    // {
    //   src: "/placeholder.svg?height=400&width=600",
    //   title: "Temple Architecture",
    //   description: "Beautiful traditional architecture",
    // },
    {
      src: "/Festivals/agandam.jpg",
      title: "Festival Celebration",
      description: "Devotees during Shravana Shanivara",
    },
    {
      src: "/Festivals/annadanam.jpg",
      title: "Annadanam",
      description: "Devotees relishing Amma’s divine prasadam, a sacred offering filled with Love and Blessings",
    },
    {
      src: "/Amma/AmmaPhoto8.jpg",
      title: "Sacred Devi idol",
      description: "Amma’s idol carried with love and devotion during special processions",
    },
    {
      src: "/Amma/AmmaPhoto5.jpg",
      title: "Evening Aarti",
      description: "Beautiful evening prayer",
    },
    // {
    //   src: "/placeholder.svg?height=400&width=600",
    //   title: "Temple Entrance",
    //   description: "Grand entrance with traditional design",
    // },
    // {
    //   src: "/placeholder.svg?height=400&width=600",
    //   title: "Community Kitchen",
    //   description: "Free meal service for devotees",
    // },
    {
      src: "/Amma/AmmaPhoto7.jpg",
      title: "Sacred Rituals",
      description: "Daily worship and ceremonies",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 via-orange-600 to-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/" className="flex items-center text-yellow-200 hover:text-white">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-sm md:text-base">Back to Home</span>
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-200">Temple Gallery</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Divine Moments Captured</h2>
          <p className="text-lg text-gray-700">
            Explore the beauty and spirituality of our sacred temple through these blessed images
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-800 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                <p>{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Visit Us in Person</h3>
            <p className="text-lg mb-6">Experience the divine energy and peaceful atmosphere of our temple firsthand</p>
            <Link
              href="/about"
              className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Learn More About Our Temple
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
