import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Magnificent Creations Inc</h1>
        <p className="mt-2 text-lg">Your Dream Home Starts Here</p>
      </header>

      {/* Navigation */}
      <nav className="bg-indigo-400 text-white text-center py-4">
        <a href="#" className="mx-4 font-semibold hover:underline">
          Home
        </a>
        <a href="#" className="mx-4 font-semibold hover:underline">
          Services
        </a>
        <a href="#" className="mx-4 font-semibold hover:underline">
          Gallery
        </a>
        <a href="#" className="mx-4 font-semibold hover:underline">
          Contact
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-2">Welcome</h2>
          <p>
            At Magnificent Creations Inc, we specialize in turning your vision
            into beautifully crafted spaces. From minimalistic interiors to
            grand traditional decor, our team delivers excellence with passion
            and precision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <ul className="list-disc list-inside">
            <li>Interior Design Consultation</li>
            <li>Custom Furniture & Decor</li>
            <li>Space Planning</li>
            <li>Renovation & Remodeling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p>
            Email us at:{" "}
            <a
              href="mailto:info@magnificentcreations.com"
              className="text-indigo-600 underline"
            >
              info@magnificentcreations.com
            </a>
          </p>
          <p>Call us: +91 79830 83328</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        <p>Developed by Shivam Kumar © 2025</p>
      </footer>
    </div>
  );
};

export default Page;