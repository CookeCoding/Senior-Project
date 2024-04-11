import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        setError('Please enter a search term');
        return;
      }

      const furnitureRef = collection(db, 'furniture');
      const q = query(furnitureRef, where('setSelectedFurniture', '==', searchTerm));

      const querySnapshot = await getDocs(q);
      const results = [];

      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });

      if (results.length === 0) {
        setError('No results found');
      } else {
        setSearchResults(results);
        setError('');
      }

      console.log('Search term:', searchTerm);
      console.log('Search results:', results);

    } catch (error) {
      console.error('Error searching documents:', error);
      setError('Error searching documents');
    }
  };

  return (
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <input
        type="text"
        className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Enter item name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <h3>Search Results:</h3>
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>{item.setSelectedFurniture}</li>
            // You can display other item details as needed
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
