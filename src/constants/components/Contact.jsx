import { CONTACT } from "../../constants"
import { motion } from "framer-motion"
import { useState } from "react"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState(null) 

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/xqallwrq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("SUCCESS")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("ERROR")
      }
    } catch (error) {
      setStatus("ERROR")
    }
  }

  return (
    <div className="border-t border-stone-900 pb-20 px-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center mb-8 tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-2 text-lg text-stone-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="my-2 text-lg text-stone-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="text-blue-400 hover:underline">
          {CONTACT.email}
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded bg-stone-900 text-white border border-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {status === "SUCCESS" && (
          <p className= "text-cyan-600 mt-4">Thanks! Your message has been sent successfully.</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-400 mt-4">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}

export default Contact
