import React, { useState } from 'react';
import Navbar from "./NavBar";

const Add = () => {
  const [itemName, setItemName] = useState('');
  const [color, setColor] = useState('');
  const [condition, setCondition] = useState('');
  const [issued, setIssued] = useState(false);
  const [selectedFurniture, setSelectedFurniture] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to the backend or processing it further
    console.log('Submitted:', { itemName, color, condition, issued, selectedFurniture, selectedColor, selectedDate, description });
  };

  return (
    <div>
      <Navbar style={{ position: 'fixed', top: 0 }}></Navbar>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="selectedFurniture" className="block text-gray-700 text-sm font-bold mb-2">
              Type of Furniture
            </label>
            <select
              value={selectedFurniture}
              onChange={(e) => {
                setSelectedFurniture(e.target.value);
                if (e.target.value === "Other") {
                  setItemName("");
                }
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedFurniture"
            >
              <option value="">Select...</option>
              <option value="Chair">Chair</option>
              <option value="Clock">Clock</option>
              <option value="End Table">End Table</option>
              <option value="Painting">Painting</option>
              <option value="Sofa">Sofa</option>
              <option value="Other">Other</option>
            </select>
            {selectedFurniture === "Other" && (
              <input
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemName"
                type="text"
                placeholder="Other Furniture Type"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="selectedColor" className="block text-gray-700 text-sm font-bold mb-2">
              Color
            </label>
            <select
              value={selectedColor}
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedColor"
            >
              <option value="">Select...</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Pink">Pink</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="selectedDate" className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedDate"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condition">
              Condition
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="condition"
              type="text"
              placeholder="Condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issued">
              Issued
            </label>
            <input
              className="mr-2 leading-tight"
              id="issued"
              type="checkbox"
              checked={issued}
              onChange={(e) => setIssued(e.target.checked)}
            />
            <label className="text-sm text-gray-700" htmlFor="issued">
              Yes, this item is currently issued
            </label>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
