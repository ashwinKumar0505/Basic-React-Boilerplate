import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Home</h3>
    <p>This is home page</p>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);
export default Home;
