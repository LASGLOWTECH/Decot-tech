import React, { useState } from "react";
import { Lady1 } from "../components/images";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const data = new FormData();
    data.append("access_key", "ca199daf-1a7c-45f0-9adf-b3fda752eb10");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Lady1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-Secondarycolor">Us</span>
          </h1>
          <p className="text-gray-200 text-base leading-relaxed md:max-w-md mx-auto md:mx-0">
            We’d love to hear from you! Whether you have a question about our
            services, need support, or simply want to connect, our team is here
            to help. Reach out through the form below, and we’ll get back to you
            as soon as possible.
          </p>
          <div className="w-24 h-1 bg-Secondarycolor mx-auto md:mx-0"></div>
        </div>

        {/* Right side - Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-4"
        >
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 bg-[#F6F5FA] border border-gray-200 focus:ring-2 focus:ring-Primarycolor rounded-md"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 bg-[#F6F5FA] border border-gray-200 focus:ring-2 focus:ring-Primarycolor rounded-md"
              required
            />
          </div>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] border border-gray-200 focus:ring-2 focus:ring-Primarycolor rounded-md"
            required
          />

          {/* Subject */}
          <input
            name="subject"
            type="text"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] border border-gray-200 focus:ring-2 focus:ring-Primarycolor rounded-md"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#F6F5FA] border border-gray-200 focus:ring-2 focus:ring-Primarycolor rounded-md"
            required
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full text-white px-6 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor rounded-md font-medium shadow-md transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status message */}
          {status && (
            <p
              className={`mt-2 text-sm text-center font-medium ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("⚠️") || status.includes("❌")
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
