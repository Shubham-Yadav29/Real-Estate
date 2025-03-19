    import React, { useState } from 'react'
    import { ToastContainer, toast } from 'react-toastify'
    import 'react-toastify/dist/ReactToastify.css'

    const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
        ...formData,
        [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Show success toast
        toast.success('Message sent successfully!')

        // Reset the form data state
        setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        })
    }

    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <span className="text-orange-500 font-medium">CONTACT US</span>
            <h2 className="text-3xl font-bold mt-2">
                Get In Touch With
                <br />
                Our Agents
            </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Your Name"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Your Email"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                    </label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Subject"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded">
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </div>
        <ToastContainer />
        </section>
    )
    }

    export default Contact
