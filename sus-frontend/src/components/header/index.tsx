import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#393939",
        position: "sticky",
        top: "0",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <NavLink
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            justifyContent: "start",
          }}
        >
          SUS
        </NavLink>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#c4c4c4",

              textDecoration: "none",
              fontWeight: "bold",
            })}
            to="/"
          >
            Score
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#c4c4c4",
              marginLeft: "2em",
              textDecoration: "none",
              fontWeight: "bold",
            })}
            to="/results"
          >
            Results
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
