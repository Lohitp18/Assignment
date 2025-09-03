import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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

interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      <div className="relative overflow-hidden">
        <img
          src={school.image}
          alt={school.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {school.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start text-gray-600">
            <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-sm leading-relaxed">{school.address}</p>
              <p className="text-sm font-medium text-gray-800">
                {school.city}, {school.state}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-gray-400" />
            <a 
              href={`tel:${school.contact}`}
              className="text-sm hover:text-blue-600 transition-colors duration-200"
            >
              {school.contact}
            </a>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <a 
              href={`mailto:${school.email_id}`}
              className="text-sm hover:text-blue-600 transition-colors duration-200 truncate"
            >
              {school.email_id}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;