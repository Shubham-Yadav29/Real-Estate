import { Link } from "react-router-dom"

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-xl mb-6">Get in touch with our team of real estate experts</p>
          <div className="flex items-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FF5A3C]">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mx-auto mb-4">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Office Address</h3>
              <p className="text-gray-600">123 Villa Street, New York, NY 10001</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mx-auto mb-4">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Phone Number</h3>
              <p className="text-gray-600">+1 (234) 567-8900</p>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mx-auto mb-4">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Email Address</h3>
              <p className="text-gray-600">info@villaagency.com</p>
              <p className="text-gray-600">support@villaagency.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-[#FF5A3C] mx-auto mb-4">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden relative bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm h-[400px]">
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
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg h-32"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF5A3C] hover:bg-[#FF5A3C]/90 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs font-semibold px-2 py-1 rounded mb-4 mx-auto w-fit">
              FAQs
            </div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2">How do I schedule a property viewing?</h3>
              <p className="text-gray-600">
                You can schedule a property viewing by contacting our office via phone, email, or by filling out the
                contact form on our website. One of our agents will get back to you within 24 hours.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2">What documents do I need to buy a property?</h3>
              <p className="text-gray-600">
                Required documents typically include proof of identity, proof of income, bank statements, and credit
                history. Our agents will guide you through the specific requirements based on your situation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2">How long does the buying process take?</h3>
              <p className="text-gray-600">
                The buying process typically takes 30-60 days from offer acceptance to closing, depending on financing,
                inspections, and other factors. Our team works to make the process as efficient as possible.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2">Do you help with financing options?</h3>
              <p className="text-gray-600">
                Yes, we have partnerships with several financial institutions and can help you explore various financing
                options to find the best solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

