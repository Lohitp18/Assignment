import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, MapPin, Phone, Mail, Building } from 'lucide-react';
import SchoolCard from '../components/SchoolCard';

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: string;
}

const ShowSchools: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const storedSchools = JSON.parse(localStorage.getItem('schools') || '[]');
      
      // Add some sample data if no schools exist
      if (storedSchools.length === 0) {
        const sampleSchools = [
          {
            id: 1,
            name: "Greenwood International School",
            address: "123 Education Street, Knowledge Park",
            city: "Mumbai",
            state: "Maharashtra",
            contact: "9876543210",
            email_id: "info@greenwood.edu",
            image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
          },
          {
            id: 2,
            name: "Sunrise Public School",
            address: "456 Learning Avenue, Academic City",
            city: "Delhi",
            state: "Delhi",
            contact: "9876543211",
            email_id: "contact@sunrise.edu",
            image: "https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800"
          },
          {
            id: 3,
            name: "Blue Hills Academy",
            address: "789 Wisdom Road, Scholar's District",
            city: "Bangalore",
            state: "Karnataka",
            contact: "9876543212",
            email_id: "admin@bluehills.edu",
            image: "https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
        ];
        localStorage.setItem('schools', JSON.stringify(sampleSchools));
        setSchools(sampleSchools);
      } else {
        setSchools(storedSchools);
      }
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading schools...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Schools</h1>
          <p className="text-gray-600">
            Discover educational institutions in your area
          </p>
        </div>
        
        <Link
          to="/add"
          className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add School
        </Link>
      </div>

      {schools.length === 0 ? (
        <div className="text-center py-16">
          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Schools Found</h2>
          <p className="text-gray-500 mb-6">Start by adding your first school to the database</p>
          <Link
            to="/add"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add First School
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-medium">
              📚 {schools.length} {schools.length === 1 ? 'school' : 'schools'} registered
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowSchools;