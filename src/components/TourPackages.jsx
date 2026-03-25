import React from 'react'

const TourPackages = () => {
  // Static package data
  const packages = [
    {
      id: 1,
      name: "Wilderness Explorer",
      duration: "2 Days / 1 Night",
      price: "₹ 8,499",
      image: "https://images.pexels.com/photos/2471264/pexels-photo-2471264.jpeg",
      features: ["2 Jungle Safaris", "Luxury Tent Stay", "All Meals Included", "Expert Naturalist"],
      badge: "Popular"
    },
    {
      id: 2,
      name: "Royal Safari",
      duration: "3 Days / 2 Nights",
      price: "₹ 15,999",
      image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
      features: ["3 Jungle Safaris", "5-Star Resort", "All Meals Included", "Private Jeep", "Bird Watching Tour"],
      badge: "Best Value"
    },
    {
      id: 3,
      name: "Wildlife Photography",
      duration: "4 Days / 3 Nights",
      price: "₹ 22,499",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg",
      features: ["4 Jungle Safaris", "Photography Guide", "Premium Accommodation", "All Meals", "Equipment Support"],
      badge: "Expert Choice"
    },
    {
      id: 4,
      name: "Family Adventure",
      duration: "2 Days / 1 Night",
      price: "₹ 12,999",
      image: "https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg",
      features: ["2 Jungle Safaris", "Family Resort", "Kids Activities", "All Meals", "Bonfire Night"],
      badge: "Family Friendly"
    }
  ]

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Gir National Park Tour Packages
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Experience the thrill of Gir with our specially curated wildlife safari packages
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Price ON Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
                
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Badge - Top Right */}
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {pkg.badge}
                </span>
                
                {/* Package Name ON Image - Bottom Left */}
                <div className="absolute bottom-3 left-3 z-10">
                  <h3 className="text-white font-bold text-lg">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-1 text-white/80 text-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                
                {/* Price ON Image - Bottom Right */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="bg-orange-600 text-white font-bold text-xl px-3 py-1 rounded-lg shadow-lg">
                    {pkg.price}
                  </div>
                </div>
              </div>
              
              {/* Content - Features List */}
              <div className="p-5">
                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Book Button */}
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition duration-300">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Packages Link */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition">
            View All Packages
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default TourPackages