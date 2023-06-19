import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaHome, FaPlus, FaList, FaSignOutAlt, FaPizzaSlice } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const VerticalDashBoard = () => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);

  const toggleDashboard = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  return (
    <div>
   

      {/* Sidebar */}
      <Sidebar
      collapsed={!isDashboardVisible}
      collapsedWidth="75px"
      expandedWidth="250px"
      onMouseEnter={() => setIsDashboardVisible(true)}
      onMouseLeave={() => setIsDashboardVisible(false)}
        style={{
          marginRight: '10px',
          height: '200vh',
          transition: 'width 0.3s',
        }}
      >

<button className="toggle-button" onClick={toggleDashboard}>
        {isDashboardVisible ? <FaToggleOn /> : <FaToggleOff />}
      </button>

        {isDashboardVisible ? (
          <>
            <h3 style={{ textAlign: 'center', }}>ReactWithFood <span><FaPizzaSlice /></span></h3>
         
            <Menu>
              <MenuItem>
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/recipes/add">
                  <FaPlus /> New Recipe
                </Link>
              </MenuItem>
              <MenuItem>
              <Link to="/recipes/myrecipes">
                <FaList /> My Recipes
                </Link>
              </MenuItem>
              <MenuItem>
                <FaSignOutAlt /> Log Out
              </MenuItem>
            </Menu>
          </>
        ) : (

           
          <div className="dashboard-icons">
          
          <h3 style={{textAlign: 'center', marginTop: '20px', }}><FaPizzaSlice  /></h3>
            <Menu>
              <MenuItem>
                <Link to="/">
                  <FaHome />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/recipes/add">
                  <FaPlus />
                </Link>
              </MenuItem>
              <MenuItem>
              <Link to="/recipes/myrecipes">
                <FaList />
                </Link>
              </MenuItem>
              <MenuItem>
                <FaSignOutAlt />
              </MenuItem>
            </Menu>
           
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default VerticalDashBoard;
