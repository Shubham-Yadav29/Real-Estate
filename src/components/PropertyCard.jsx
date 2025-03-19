import { Link } from "react-router-dom"

const PropertyCard = ({ property }) => {
  const { id, image, title, price, location, beds, baths, area, featured } = property

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-[#FF5A3C] text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded">For Sale</div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 text-gray-700 text-xs font-semibold px-2 py-1 rounded">{price}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-[#FF5A3C] transition-colors">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#FF5A3C] mr-1"
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
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#FF5A3C] mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6z"></path>
              <path d="M6 10v4"></path>
              <path d="M10 10v4"></path>
              <path d="M14 10v4"></path>
              <path d="M18 10v4"></path>
            </svg>
            <span className="text-sm text-gray-600">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#FF5A3C] mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 14h3a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2H3v4z"></path>
              <path d="M3 18h2a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2H3v4z"></path>
              <path d="M8 6h13"></path>
              <path d="M8 10h13"></path>
              <path d="M8 14h13"></path>
              <path d="M8 18h13"></path>
            </svg>
            <span className="text-sm text-gray-600">{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#FF5A3C] mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span className="text-sm text-gray-600">{area} m²</span>
          </div>
        </div>
        <Link
          to={`/property/${id}`}
          className="block w-full bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white text-center px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard

