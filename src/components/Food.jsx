import React, { useState } from 'react';
import { data } from '../Info/info.jsx';

const Food = () => {
  const [foods, setfood] = useState(data);

  const filterType = (category) => {
    setfood(data.filter((items) => items.category === category));
  };

  const filterprice = (price) => {
    setfood(data.filter((items) => parseInt(items.price) <= price));
  };

  return (
    <div className='py-12 px-4 max-w-screen-xl mx-auto'>
      <h1 className='text-orange-600 font-bold text-3xl text-center animate-bounce mb-6'>
        Top Menu Items!
      </h1>

      {/* Filter Type */}
      <div>
        <p className='fgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>Filter Type</p>
        <div className='flex flex-wrap gap-4 mb-10'>
          {['All', 'Sweet', 'beverage', 'spicy', 'main course'].map((type, i) => (
            <button
              key={i}
              onClick={() => (type === 'All' ? setfood(data) : filterType(type))}
              className='border-orange-500 rounded-xl text-black bg-blue-500 hover:text-white hover:font-bold hover:bg-indigo-500 px-6 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110'
            >
              {type === 'main course' ? 'Main-Course' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Price */}
      <div>
        <p className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>Choose Price</p>
        <div className='flex flex-wrap gap-4 mb-10'>
          {[50, 80, 100, 110].map((price, i) => (
            <button
              key={i}
              onClick={() => filterprice(price)}
              className='border-orange-500 rounded-xl text-black bg-blue-500 hover:text-white hover:font-bold hover:bg-orange-400 px-6 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110'
            >
              Less than ₹{price}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {foods.map((item, index) => (
          <div key={index} className='shadow-lg rounded-3xl p-4 bg-white'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-48 object-cover rounded-2xl transition-transform duration-500 hover:scale-105'
            />
            <div className='mt-3'>
              <p className='text-center text-gray-800 font-medium'>{item.name}</p>
              <p className='text-center mt-1'>
                <span className='bg-lime-300 text-black py-1 px-3 rounded-full'>
                  ₹{item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
