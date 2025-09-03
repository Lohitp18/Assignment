import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-gray-900">SchoolHub</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              All Schools
            </Link>
            <Link
              to="/add"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === '/add'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Add School</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              location.pathname === '/'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            All Schools
          </Link>
          <Link
            to="/add"
            onClick={() => setIsOpen(false)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              location.pathname === '/add'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Add School</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
