import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage :React.FC =() => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1
      className="text-6xl font-bold text-red-500" 
      data-aos="fade-up"
      data-aos-duration="600"
    >
      404
    </h1>
    <p
      className="mt-4 text-xl text-gray-700"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      Oops! Page not found.
    </p>
    <p
      className="mt-2 text-lg text-gray-600"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      Go to Home
    </Link>
  </div>
  )
}

export default NotFoundPage