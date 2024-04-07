import React, { useState, useEffect } from 'react';
import { Doughnut, Line, Bar, PolarArea } from 'react-chartjs-2';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { CategoryScale, ArcElement, LinearScale, Chart } from 'chart.js';
import { PolarAreaController } from 'chart.js';
import { registry } from 'chart.js';
import 'chart.js/auto';

registry.addControllers(PolarAreaController);

Chart.register(CategoryScale, ArcElement, LinearScale,PolarAreaController);

const ChartM = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Items',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const [doughnutData, setDoughnutData] = useState(ChartM);
  const [lineData, setLineData] = useState(ChartM);
  const [barData, setBarData] = useState(ChartM);
  const [totalWaitlistCount, setTotalWaitlistCount] = useState(0);
  const [error, setError] = useState('');
  const [waitlistData, setWaitlistData] = useState([]);
  const [polarData, setPolarData] = useState(ChartM);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'furniture'));
        const newData = querySnapshot.docs.map(doc => doc.data().selectedFurniture);
        const counts = {};
        newData.forEach(item => {
          if (counts[item]) {
            counts[item] += 1;
          } else {
            counts[item] = 1;
          }
        });

        const updatedDoughnutData = {
          labels: Object.keys(counts),
          datasets: [{
            ...ChartM.datasets[0],
            data: Object.values(counts),
          }],
        };

        const updatedLineData = {
          labels: Object.keys(counts),
          datasets: [{
            ...ChartM.datasets[0],
            data: Object.values(counts),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        };

        const updatedBarData = {
          labels: Object.keys(counts),
          datasets: [{
            ...ChartM.datasets[0],
            data: Object.values(counts),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        };
        const updatedPolarData = {
          labels: Object.keys(counts),
          datasets: [{
            ...ChartM.datasets[0],
            data: Object.values(counts),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
        };
    
        setPolarData(updatedPolarData);
        setDoughnutData(updatedDoughnutData);
        setLineData(updatedLineData);
        setBarData(updatedBarData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchWaitlistData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'waitlist'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setWaitlistData(data);
        setTotalWaitlistCount(data.length);
      } catch (error) {
        console.error('Error fetching waitlist data:', error);
        setError('Error fetching waitlist data');
      }
    };

    fetchData();
    fetchWaitlistData();
  }, []);

  const chartStyles = "flex-1 p-100";

  const barOptions = {
    scales: {
      x: {
        type: 'category',
        labels: barData.labels,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  
  return (
    <div className="container mx-auto p-8">
  <div className="flex flex-wrap">
    <div className="flex-1 p-4">
      <h2 className="text-5xl font-bold mb-4 text-center">Total Waitlist Entries</h2>
      <p className="text-4xl font-bold text-center">{totalWaitlistCount}</p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>

    {/* Side by side charts */}
    <div className="flex justify-between w-full p-8">
      <div className={chartStyles}>
        <h1 className="text-center font-bold">Polar Area Chart</h1>
        <PolarArea data={polarData} className="w-full h-64" />
      </div>
      <div className={chartStyles}>
        <h1 className="text-center font-bold">Doughnut</h1>
        <Doughnut data={doughnutData} className="w-full h-64" />
      </div>
      <div className={chartStyles}>
        <h1 className="text-center font-bold">Line Chart</h1>
        <Line data={lineData} className="w-full h-64" />
      </div>
    </div>

    {/* Bar Chart at the bottom */}
    <div className="w-full p-8">
      <div className={chartStyles}>
        <h1 className="text-center font-bold">Bar Chart</h1>
        <Bar data={barData} options={barOptions} className="w-full h-96" />
      </div>
    </div>
  </div>
</div>


    );
    
  };
  
  export default Dashboard;
