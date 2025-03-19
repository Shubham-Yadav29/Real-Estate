import { useState } from "react"
import { Link } from "react-router-dom"
import PropertyCard from "../components/PropertyCard"
import { properties } from "../data/properties"

const PropertiesPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const propertiesPerPage = 6

    // Filter properties based on search criteria
    const filteredProperties = properties.filter((property) => {
        const matchesSearch =
            searchTerm === "" ||
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase())


        let matchesPrice = true
        if (priceRange === "under1m") {
            matchesPrice = Number.parseFloat(property.price.replace(/[^0-9.]/g, "")) < 1000000
        } else if (priceRange === "under2m") {
            matchesPrice = Number.parseFloat(property.price.replace(/[^0-9.]/g, "")) < 2000000
        } else if (priceRange === "over2m") {
            matchesPrice = Number.parseFloat(property.price.replace(/[^0-9.]/g, "")) >= 2000000
        }
        const matchesType = propertyType === "" || (property.type && property.type.toLowerCase().trim() === propertyType.toLowerCase().trim())
        const matchesLocation = location === "" || property.location.includes(location)
        
        return matchesSearch && matchesType && matchesLocation && matchesPrice
    })

    // Paginate the filtered properties
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)
    const paginatedProperties = filteredProperties.slice(
        (currentPage - 1) * propertiesPerPage,
        currentPage * propertiesPerPage
    )

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
                        alt="Properties"
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Properties</h1>
                    <p className="text-white/90 text-lg max-w-xl mb-6">
                        Browse our exclusive collection of luxury properties in prime locations
                    </p>
                    <div className="flex items-center gap-2 text-white/80">
                        <Link to="/" className="hover:text-white">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-[#FF5A3C]">Properties</span>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-end">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search properties..."
                                        className="w-full p-3 border border-gray-300 rounded-lg pl-10"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full md:w-40">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                >
                                    <option value="">All Types</option>
                                    <option value="villa">Villa</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="house">House</option>
                                    <option value="cottage">Cottage</option>
                                </select>
                            </div>
                            <div className="w-full md:w-40">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="">All Locations</option>
                                    <option value="Miami">Miami</option>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                </select>
                            </div>
                            <div className="w-full md:w-40">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                >
                                    <option value="">Any Price</option>
                                    <option value="under1m">Under $1M</option>
                                    <option value="under2m">Under $2M</option>
                                    <option value="over2m">Over $2M</option>
                                </select>
                            </div>
                            <div>
                                <button className="w-full md:w-auto bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center">
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
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold">Available Properties</h2>
                            <p className="text-gray-600">Showing {paginatedProperties.length} out of {filteredProperties.length} properties</p>
                        </div>
                    
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                    {paginatedProperties.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No properties found matching your criteria.</p>
                        </div>
                    )}
                    <div className="flex justify-center mt-12">
                        <nav className="flex items-center gap-1">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300"
                                disabled={currentPage === 1}
                            >
                                <span className="sr-only">Previous page</span>
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
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            {[...Array(totalPages).keys()].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page + 1)}
                                    className={`w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 ${
                                        currentPage === page + 1 ? "bg-[#FF5A3C] text-white" : ""
                                    }`}
                                >
                                    {page + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300"
                                disabled={currentPage === totalPages}
                            >
                                <span className="sr-only">Next page</span>
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
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PropertiesPage
