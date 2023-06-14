import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const VerticalDashBoard = () => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };


  return (
    <Sidebar style={{marginRight: '15px', backgroundColor: "red", height: '100vh'}}>
     <h3 style={{textAlign: "center"}}> ReactWithFood </h3>
    <Menu>
      <MenuItem><Link to={'/'}> Home </Link></MenuItem>
      <MenuItem><Link to={'/recipes/add'}> New Recipe</Link> </MenuItem>
      <MenuItem> My Recipes </MenuItem>
      <MenuItem> Log Out </MenuItem>
    </Menu>
  </Sidebar>
  );
};

export default VerticalDashBoard;
