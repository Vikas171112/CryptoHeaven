import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Indicate submission is in progress
    setMessage(""); // Clear any previous messages

    emailjs
      .sendForm(
        "service_naijmdl", // Replace with your EmailJS Service ID
        "template_m06cx55", // Replace with your EmailJS Template ID
        e.target,
        "MUQPE1wu4M-UvfG20" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setMessage("Your message has been sent successfully!");
          e.target.reset(); // Reset the form
        },
        (error) => {
          setIsSubmitting(false);
          setMessage("An error occurred. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Contact Us
      </h2>
      <form className="space-y-6" onSubmit={sendEmail}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Full Name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email Address"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Subject of Your Message"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="html_message"
            required
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-6 text-center text-sm font-medium ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default ContactUs;
