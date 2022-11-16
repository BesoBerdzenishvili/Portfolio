import React from "react";

export default function Contact() {
  return (
    <div>
      <form
        target="_blank"
        action="https://formsubmit.co/223f77ea7abb83f05ae69cf5ea4c9a1c"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name *" required />
        <input type="email" name="email" placeholder="Your Email *" required />
        <input type="text" name="subject" placeholder="Write a Subject" />
        <textarea
          placeholder="Your Message"
          name="message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
