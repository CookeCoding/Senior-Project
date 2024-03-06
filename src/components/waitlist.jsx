import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./NavBar";

function Waitlist() {
  const [email, setEmail] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <>
      <Navbar style={{ position: 'fixed', top: 0 }} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type='email' />
          </div>
          <div className='mb-4'>
            <label htmlFor="selectedFurniture" className='block text-gray-700 text-sm font-bold mb-2'>Select Furniture</label>
            <select value={selectedFurniture} onChange={(e) => setSelectedFurniture(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="selectedFurniture">
              <option value="">Select...</option>
              <option value="Chair">Chair</option>
              <option value="Clock">Clock</option>
              <option value="End Table">End Table</option>
              <option value="Painting">Painting</option>
              <option value="Sofa">Sofa</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor="selectedColor" className='block text-gray-700 text-sm font-bold mb-2'>Select Color</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="selectedColor">
              <option value="">Color</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Pink">Pink</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Waitlist;
