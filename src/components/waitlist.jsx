import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Navbar from "./NavBar";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import Account from "./Account";

function Waitlist() {
  const [email, setEmail] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [waitlistData, setWaitlistData] = useState([]);

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    const waitlistCollection = collection(db, 'waitlist');
    const querySnapshot = await getDocs(waitlistCollection);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setWaitlistData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const waitlistRef = collection(db, 'waitlist');
      if (!email || !selectedFurniture || !selectedColor) {
        console.log('All fields are required');
        return;
      }
      await addDoc(waitlistRef, {
        email: email,
        selectedFurniture: selectedFurniture,
        selectedColor: selectedColor,
      });
      setEmail('');
      setSelectedColor('');
      setSelectedFurniture('');
      console.log("Successfully added");
      fetchWaitlistData(); // Refresh the waitlist data after adding a new entry
    } catch (error) {
      console.error('Error adding', error);
    }
  };

  const deleteFurniture = async (id) => {
    try {
      await deleteDoc(doc(db, 'waitlist', id));
      console.log("Successfully deleted");
      const updatedWaitlist = waitlistData.filter(item => item.id !== id);
      setWaitlistData(updatedWaitlist);
    } catch (error) {
      console.error('Error deleting', error);
    }
  };
  
  return (
    <>
      <Navbar style={{ position: 'fixed', top: 0 }} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-20 pt-16 pb-16 mb-4 w-120">
          <div className='mb-8'>
            <label htmlFor="email" className='block text-gray-700 text-lg font-bold mb-2'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='shadow appearance-none border rounded w-full py-2 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type='email' />
          </div>
          <div className='mb-8'>
            <label htmlFor="selectedFurniture" className='block text-gray-700 text-lg font-bold mb-2'>Select Furniture</label>
            <select value={selectedFurniture} onChange={(e) => setSelectedFurniture(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="selectedFurniture">
              <option value="">Select...</option>
              <option value="Chair">Chair</option>
              <option value="Clock">Clock</option>
              <option value="End Table">End Table</option>
              <option value="Painting">Painting</option>
              <option value="Sofa">Sofa</option>
            </select>
          </div>
          <div className='mb-8'>
            <label htmlFor="selectedColor" className='block text-gray-700 text-lg font-bold mb-2'>Select Color</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="selectedColor">
              <option value="">Color</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Pink">Pink</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Submit</button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Waitlist Information</h2>
          <ul>
            {waitlistData.map((item) => (
              <li key={item.id} className="mb-2 flex items-center justify-between">
                <div>
                  <strong>Email:</strong> {item.email},{" "}
                  <strong>Furniture:</strong> {item.selectedFurniture},{" "}
                  <strong>Color:</strong> {item.selectedColor}
                </div>
                <button onClick={() => deleteFurniture(item.id)} className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 border-b-4 border-red-700 hover:border-red-500 rounded">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </>
  );
}

export default Waitlist;
