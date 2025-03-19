import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { properties } from "../data/properties"
import PropertyCard from "../components/PropertyCard"
import { RxResume } from "react-icons/rx";

const PropertyDetailsPage = () => {
  console.log(properties[1].image)
  const [selectedProperty, setSelectedProperty] = useState(properties[0]); // Default to the first property
  const [isFilled, setIsFilled] = useState(false);

  const ChangeColor = () => {
    setIsFilled(!isFilled);
  };
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [property, setProperty] = useState(null)
  const [similarProperties, setSimilarProperties] = useState([])
  const [activeTab, setActiveTab] = useState('description');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Find the property with the matching id
    const foundProperty = properties.find((p) => p.id === Number.parseInt(id))
    setProperty(foundProperty)

    // Find similar properties (same type or location)
    if (foundProperty) {
      const similar = properties
        .filter(
          (p) =>
            p.id !== foundProperty.id &&
            (p.type === foundProperty.type || p.location.includes(foundProperty.location.split(",")[0])),
        )
        .slice(0, 3)
      setSimilarProperties(similar)
    }
  }, [id])

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Property not found</h2>
        <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/properties"
          className="bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors inline-block"
        >
          Browse Properties
        </Link>
      </div>
    )
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{property.title}</h1>
          <div className="flex items-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-white">
              Properties
            </Link>
            <span>/</span>
            <span className="text-[#FF5A3C]">Property Details</span>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between sm:items-center  mb-8">
                <div>
                  {property.featured && (
                    <div className="bg-[#FF5A3C] text-white text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                      Featured
                    </div>
                  )}
                  <h2 className="text-3xl font-bold">{property.title}</h2>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#FF5A3C] text-end">{property.price}</div>
              </div>

              {/* Gallery */}
              <div className="relative mb-10">
                <img
                  src={property.gallery[activeImage]}
                  alt="Property Gallery"
                  className="w-full h-120 object-cover rounded-lg"
                />
                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === 0 ? property.gallery.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === property.gallery.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-4 mb-10">
              {property.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)} // Set active image when clicked
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                    activeImage === index
                      ? "ring-2 ring-[#FF5A3C] scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>  
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => handleTabClick("description")}
                    className={`py-4 px-1 text-sm font-medium cursor-pointer ${
                      activeTab === "description"
                        ? "border-b-2 border-[#FF5A3C] text-[#FF5A3C]"
                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => handleTabClick("features")}
                    className={`py-4 px-1 text-sm font-medium cursor-pointer ${
                      activeTab === "features"
                        ? "border-b-2 border-[#FF5A3C] text-[#FF5A3C]"
                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => handleTabClick("floorPlan")}
                    className={`py-4 px-1 text-sm font-medium cursor-pointer ${
                      activeTab === "floorPlan"
                        ? "border-b-2 border-[#FF5A3C] text-[#FF5A3C]"
                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Floor Plan
                  </button>
                  <button
                    onClick={() => handleTabClick("video")}
                    className={`py-4 px-1 text-sm font-medium cursor-pointer ${
                      activeTab === "video"
                        ? "border-b-2 border-[#FF5A3C] text-[#FF5A3C]"
                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Video
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === "description" && (
                  <div>
                    <h2 className="text-xl font-semibold">Property Description</h2>
                    <p className="text-gray-600 mt-5">
                    <div className="space-y-4">
                <p>
                  This stunning luxury villa offers the perfect blend of modern design and comfort. Situated in a prime
                  location with easy access to the beach, shopping, and dining, this property is ideal for those seeking
                  a luxurious lifestyle.
                </p>
                <p>
                  The villa features {property.beds} spacious bedrooms, {property.baths} elegant bathrooms, a gourmet
                  kitchen with high-end appliances, and an open-concept living area perfect for entertaining. The master
                  suite includes a walk-in closet and a spa-like bathroom with a soaking tub and separate shower.
                </p>
                <p>
                  Outside, you'll find a beautifully landscaped garden, a private swimming pool, and a covered patio
                  area. The property also includes a two-car garage and additional parking space for guests.
                </p>
              </div>
                    </p>
                  </div>
                )}

                {activeTab === "features" && (
                  <div>
                    <h2 className="text-xl font-semibold">Property Features</h2>
                    <ul className="text-gray-600 mt-5">
                      <li>4 Bedrooms</li>
                      <li>3 Bathrooms</li>
                      <li>Swimming Pool</li>
                      <li>Spacious Living Area</li>
                    </ul>
                  </div>
                )}

                {activeTab === "floorPlan" && (
                  <div>
                    <h2 className="text-xl font-semibold">Floor Plan</h2>
                    <p className="text-gray-600 mt-5">
                      The floor plan will be shown here...
                      <img src="https://i.pinimg.com/564x/da/dc/9e/dadc9e5808e2e9a2b98fe48217a3e5a7.jpg"></img>
                    </p>
                  </div>
                )}

                {activeTab === "video" && (
                  <div>
                    <h2 className="text-xl font-semibold">Property Video</h2>
                    <div className="flex justify-center mt-5 items-center w-full h-56 border-2 border-gray-300 rounded-xl">
                      <span className="text-gray-500">
                        <RxResume className="h-8 w-8" />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Location</h3>
                <div className="rounded-xl overflow-hidden h-[400px] relative bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-sm h-[400px] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.00597484846107!3d40.71277447933105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1620927161330!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">{property.location}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6">Schedule a Visit</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Visit Date</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg h-32"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors">
                  <Link
              to="/contact"
                    type="submit"
                  >
                    Schedule Now
                  </Link>
                  </button>
                </form>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <img


                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold">John Smith</h3>
                    <p className="text-[#FF5A3C] mb-4">Senior Real Estate Agent</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-2">
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
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="text-gray-600">+1 (234) 567-8900</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
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
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="text-gray-600">john@villaagency.com</span>
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-3 mt-4">
                      {["facebook", "twitter", "instagram"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#FF5A3C] hover:text-white transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {social === "facebook" && (
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            )}
                            {social === "twitter" && (
                              <>
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </>
                            )}
                            {social === "instagram" && (
                              <>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </>
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button onClick={ChangeColor} className="cursor-pointer flex-1 border border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 24 24"
                    fill={isFilled ? "#FF5A3C" : "none"} 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  Save
                </button>
                <button className="flex-1 border border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      </div>

  )
}

export default PropertyDetailsPage

