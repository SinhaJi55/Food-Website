import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-600 text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
       
        <div>
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <p>Delicious Eats Pvt. Ltd.</p>
          <p>34, Curry Street, Jamalpur, Bihar - 811214</p>
          <p>India</p>
        </div>

       
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>📞 +91 98765 4321099</p>
          <p>📧 support@deliciouseats.com</p>
          <p>🕒 Open: 10am - 11pm daily</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Delicious Eats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
