import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Navbar from './NavBar';
import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className='fixed bottom-1 left-4 max-w-[600px] mx-auto my-16 p-4 '>
        <h1 className='bottom-0 left-0 text-2xl font-bold py-4'>Account</h1>
        <p>User Email: {user && user.email}</p>
  
        <button onClick={handleLogout} className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Logout
        </button>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                
                <tr key={name}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <div>
        <Link to="/add">
  <button className='px-4 py-2 rounded-sm border border-green-500 bg-green-600 hover:bg-blue-500 w-full max-w-xs mx-auto my-2 text-white'>
    Add
  </button>
  </Link>
  </div>

  <div>
  <button className='px-4 py-2 rounded-sm border border-red-500 bg-red-600 hover:bg-red-500 w-full max-w-xs mx-auto my-2 text-white'>
    Delete
    
  </button>
</div>

      
    </div>
  );
};

export default Account;
