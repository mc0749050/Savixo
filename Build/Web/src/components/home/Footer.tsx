import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Savixo</h1>
          <p className="text-sm leading-6">
            Savixo is your all-in-one platform for modern digital solutions,
            helping users connect with services seamlessly and efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-white font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Book Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Track Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                User Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support System
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm mb-3">Subscribe for latest updates</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-sm outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-md text-black font-semibold hover:bg-green-400">
              Go
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <p className="text-sm">Email: support@savixo.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">India</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaGithub className="cursor-pointer hover:text-white" />
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Savixo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
