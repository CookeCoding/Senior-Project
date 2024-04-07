import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const deleteFurniture = async (id) => {
        try {
            // Delete document from Firestore
            await deleteDoc(doc(db, 'furniture', id));
            console.log('Document successfully deleted!');
            
            // Update local state to reflect deletion
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    useEffect(() => {
        const fetchFurniture = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'furniture'));
                const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setData(newData);
                console.log('Fetched Data:', newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFurniture();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* Removed the checkbox header */}
                        <th scope="col" className="px-1 py-2"> {/* Reduced py from 3 to 2 */}
                            ID Number
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Furniture
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Color
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Date
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Description
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Condition
                        </th>
                        <th scope="col" className="px-3 py-2"> {/* Adjusted px and py */}
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-3 py-2">{item.id}</td>
                            <td className="px-3 py-2">{item.selectedFurniture || '-'}</td>
                            <td className="px-3 py-2">{item.selectedColor || '-'}</td>
                            <td className="px-3 py-2">{item.selectedDate || '-'}</td>
                            <td className="px-3 py-2">{item.description || '-'}</td>
                            <td className="px-3 py-2">{item.condition || '-'}</td>
                            <td className="px-3 py-2">
                                <button onClick={() => deleteFurniture(item.id)} className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 border-b-4 border-red-700 hover:border-red-500 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
