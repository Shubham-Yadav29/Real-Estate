    import { Link } from "react-router-dom"

    const AboutPage = () => {
    return (
        <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1920&auto=format&fit=crop"
                alt="About Us"
                className="w-full h-full object-cover brightness-[0.7]"
            />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Villa Agency</h1>
            <p className="text-white/90 text-lg max-w-xl mb-6">
                Learn more about our company and our mission to provide the best luxury properties
            </p>
            <div className="flex items-center gap-2 text-white/80">
                <Link to="/" className="hover:text-white">
                Home
                </Link>
                <span>/</span>
                <span className="text-[#FF5A3C]">About Us</span>
            </div>
            </div>
        </section>

        {/* About Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 relative">
                <div className="relative z-10">
                    <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                    alt="About Villa Agency"
                    className="rounded-xl w-full"
                    />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FF5A3C]/10 rounded-xl -z-10"></div>
                </div>
                <div className="lg:w-1/2">
                <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 w-fit">
                    About Us
                </div>
                <h2 className="text-3xl font-bold mb-6">We Provide The Best Property For You</h2>
                <p className="text-gray-600 mb-6">
                    Villa Agency is a leading real estate company specializing in luxury properties. With over 12 years of
                    experience in the market, we have established ourselves as trusted advisors for clients seeking
                    exceptional homes and investment opportunities.
                </p>
                <p className="text-gray-600 mb-6">
                    Our team of experienced professionals is dedicated to providing personalized service and expert guidance
                    throughout the buying, selling, or renting process. We understand that each client has unique needs and
                    preferences, and we tailor our approach accordingly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                    "Premium Locations",
                    "Professional Agents",
                    "Exclusive Properties",
                    "Transparent Pricing",
                    "24/7 Support",
                    "Verified Properties",
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#FF5A3C]"
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
                    </div>
                    ))}
                </div>
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
                </div>
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                { number: 34, label: "Buildings Finished Now" },
                { number: 12, label: "Years Experience" },
                { number: 24, label: "Awards Won 2023" },
                { number: 8, label: "Offices Worldwide" },
                ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="relative">
                    <div className="text-4xl font-bold text-[#FF5A3C] mb-2">{stat.number}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF5A3C]/10 rounded-full"></div>
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 mx-auto w-fit">
                Our Values
                </div>
                <h2 className="text-3xl font-bold">Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                    Our mission is to connect people with their dream properties while providing exceptional service and
                    expertise. We strive to make the real estate process seamless, transparent, and enjoyable for all our
                    clients.
                </p>
                <ul className="space-y-2">
                    {[
                    "Client-Centered Approach",
                    "Integrity in Every Transaction",
                    "Innovative Solutions",
                    "Community Engagement",
                    ].map((item, i) => (
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
                    ))}
                </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                    We envision being the leading luxury real estate agency globally, known for our exceptional properties,
                    personalized service, and innovative approach to real estate. We aim to set new standards in the
                    industry.
                </p>
                <ul className="space-y-2">
                    {["Global Expansion", "Technological Innovation", "Sustainable Development", "Industry Leadership"].map(
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
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 mx-auto w-fit">
                Our Team
                </div>
                <h2 className="text-3xl font-bold">Meet Our Expert Agents</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our team of experienced real estate professionals is dedicated to helping you find your dream property
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                {
                    name: "John Smith",
                    title: "Senior Real Estate Agent",
                    phone: "+1 (234) 567-8900",
                    email: "john@villaagency.com",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
                },
                {
                    name: "Sarah Johnson",
                    title: "Luxury Property Specialist",
                    phone: "+1 (234) 567-8901",
                    email: "sarah@villaagency.com",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
                },
                {
                    name: "Michael Brown",
                    title: "Commercial Property Expert",
                    phone: "+1 (234) 567-8902",
                    email: "michael@villaagency.com",
                    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop",
                },
                {
                    name: "Emily Davis",
                    title: "Residential Sales Manager",
                    phone: "+1 (234) 567-8903",
                    email: "emily@villaagency.com",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
                },
                ].map((agent, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                        <img
                        src={agent.image || "/placeholder.svg"}
                        alt={agent.name}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold">{agent.name}</h3>
                        <p className="text-[#FF5A3C] mb-4">{agent.title}</p>
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
                            <span className="text-gray-600">{agent.phone}</span>
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
                            <span className="text-gray-600">{agent.email}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 mx-auto w-fit">
                Testimonials
                </div>
                <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with Villa Agency
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                {
                    name: "Robert Wilson",
                    location: "Miami, FL",
                    rating: 5,
                    text: "Working with Villa Agency was an absolute pleasure. They helped me find my dream home in Miami and made the entire process smooth and stress-free. Highly recommended!",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
                },
                {
                    name: "Jennifer Adams",
                    location: "New York, NY",
                    rating: 5,
                    text: "The team at Villa Agency went above and beyond to help me sell my property. Their market knowledge and professional approach resulted in a quick sale at a great price.",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
                },
                {
                    name: "David Thompson",
                    location: "Los Angeles, CA",
                    rating: 4,
                    text: "I was impressed by the personalized service provided by Villa Agency. They took the time to understand my requirements and showed me properties that perfectly matched my criteria.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                },
                ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                    </div>
                    <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    ))}
                    </div>
                    <p className="text-gray-600">"{testimonial.text}"</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
                    <p className="text-gray-600 max-w-xl">
                    Contact our team today to start your journey towards finding the perfect property that meets all your
                    requirements.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                    to="/contact"
                    className="bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors text-center"
                    >
                    Contact Us
                    </Link>
                    <Link
                    to="/properties"
                    className="border border-[#FF5A3C] text-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-6 py-3 rounded-md text-sm font-medium transition-colors text-center"
                    >
                    View Properties
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
    }

    export default AboutPage

