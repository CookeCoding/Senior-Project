import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

const Table = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await db.collection('your_collection').get();
                const fetchedData = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(fetchedData);
            } catch (error) {
                setError("Error fetching data from Firebase");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {error ? (
                <div className="p-4 text-red-500">{error}</div>
            ) : (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Furniture
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Issued
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Condition
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td className="p-4">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                </td>
                                <td className="px-6 py-3">{item.idNumber}</td>
                                <td className="px-6 py-3">{item.furniture}</td>
                                <td className="px-6 py-3">{item.color}</td>
                                <td className="px-6 py-3">{item.date}</td>
                                <td className="px-6 py-3">{item.description}</td>
                                <td className="px-6 py-3">{item.issued}</td>
                                <td className="px-6 py-3">{item.condition}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
