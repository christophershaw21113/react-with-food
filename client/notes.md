<Button variant="primary" onClick={toggleDashboard}>
{isDashboardVisible ? <FaToggleOn /> : <FaToggleOff />}
</Button>

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
                <FaList />
              </MenuItem>
              <MenuItem>
                <FaSignOutAlt />
              </MenuItem>
            </Menu>
