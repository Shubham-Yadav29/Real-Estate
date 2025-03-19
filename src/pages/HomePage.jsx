import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
import PropertyCard from "../components/PropertyCard"
import { properties } from "../data/properties"
import StatsCounter from "../StatsCounter.jsx"


const HomePage = () => {

  const featuredProperties = properties.filter((property) => property.featured).slice(0, 3)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1920&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960116741-d3a1468fdec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687960116228-13d383d20188?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  // Update the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImages[currentImageIndex]}
            alt="Luxury Villa with Pool"
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="bg-white/90 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 w-fit">
            Premium Selection
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-6">
            <span className="text-[#FF5A3C]">HURRY!</span> GET THE BEST VILLA FOR YOU
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8">
            Discover exclusive luxury villas in prime locations with stunning views and premium amenities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/properties"
              className="bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              Explore Properties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 px-6 py-3 rounded-md text-sm font-medium transition-colors"
            >
              Contact Agent
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="flex gap-2 mb-6">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === currentImageIndex ? "bg-[#FF5A3C]" : "bg-white/50"}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentImageIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
      

      {/* Featured Property Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="md:w-1/2">
              <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 w-fit">
                Best Choice
              </div>
              <h2 className="text-3xl font-bold mb-2">Best Apartment & Sea View</h2>
              <div className="w-20 h-1 bg-[#FF5A3C] mb-6"></div>
              <p className="text-gray-600 mb-6">
                Get the best villa includes complete amenities in the city, and everything for your comfort. The
                properties are designed with your lifestyle in mind.
              </p>
              <Link
                to="/properties"
                className="bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-block mb-8"
              >
                See more details
              </Link>
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h3 className="font-medium mb-2">Why is Villa Agency the best?</h3>
                <ul className="space-y-2">
                  {["Premium Locations", "Professional Agents", "Exclusive Properties", "Transparent Pricing"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#FF5A3C]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                        250 m²
                      </div>
                      <h3 className="font-medium mb-1">Apartment Size</h3>
                      <p className="text-sm text-gray-600">Spacious living areas with modern design</p>
                    </div>
                    <div className="mt-4">
                      <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                        Contract
                      </div>
                      <h3 className="font-medium mb-1">Contract Ready</h3>
                      <p className="text-sm text-gray-600">All legal documents prepared</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                        Payment
                      </div>
                      <h3 className="font-medium mb-1">Payment Process</h3>
                      <p className="text-sm text-gray-600">Multiple payment options available</p>
                    </div>
                    <div className="mt-4">
                      <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                        Safety
                      </div>
                      <h3 className="font-medium mb-1">24/7 Security</h3>
                      <p className="text-sm text-gray-600">Complete security system installed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
                    alt="Featured Property"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <StatsCounter number={34} label="Buildings Finished Now" />
      <StatsCounter number={12} label="Years Experience" />
      <StatsCounter number={24} label="Awards Won 2023" />
      <StatsCounter number={8} label="Offices Worldwide" />
    </div>
  </div>
</section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 mx-auto w-fit">
              Properties
            </div>
            <h2 className="text-3xl font-bold">We Provide The Best Property You Like</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="border border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-6 py-3 rounded-md text-sm font-medium transition-colors inline-block"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-[#FF5A3C] rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
                <p className="max-w-xl opacity-90">
                  Contact our team today to start your journey towards finding the perfect property that meets all your
                  requirements.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-[#FF5A3C] hover:bg-white/90 px-6 py-3 rounded-md text-sm font-medium transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage


