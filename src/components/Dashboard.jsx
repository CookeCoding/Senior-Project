import React from 'react';
import Navbar from './NavBar';
import Table from './Table';

const Dashboard = () => {
  
return (
    <div>
      <Navbar style={{ position: 'fixed', top: 0 }}></Navbar>
      <Table/>
    </div>
  );
};

export default Dashboard;
