'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sectionClasses, containerClasses, headingClasses } from "@/styles/shared"

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    quote: 'NextStore has the best selection of electronics I\'ve ever seen. Their customer service is top-notch!',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'Mike Thompson',
    quote: 'I love the variety of clothing options. The quality is excellent, and the prices are unbeatable.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    quote: 'The home & kitchen section is a game-changer. I\'ve found so many unique items for my new apartment.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100',
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-full flex-shrink-0 px-4">
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={50}
          height={50}
          className="mr-4 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.quote}</p>
    </div>
  </div>
)

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className={`${sectionClasses} bg-gray-100`}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>What Our Customers Say</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className={`h-3 w-3 rounded-full p-0 transition-colors duration-300 ease-in-out ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

