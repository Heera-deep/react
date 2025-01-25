// import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import MyCalendar from "./Components/MyCalendar";
import MyWebcam from "./Components/MyWebcam";
import ConfettiComponent from "./Components/ConfettiComponent";
import SwiperWithEffect from "./Components/SwiperWithEffect";
import FullForm from "./Components/FullForm";
import JoyrideTour from "./Components/JoyrideTour";
import Simple from "./Components/Simple";
import TodoList from "./Components/TodoList";
import Card from "./Components/CardItems/card";
import SingalCard from "./Components/CardItems/SingalCard";
import ResponsiveForm from "./Components/ResponsiveForm";

const App = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary  w-100 ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-3">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/MyCalendar">
                  MyCalendar
                </NavLink>
                <NavLink className="nav-link" to="/MyWebcam">
                  MyWebcam
                </NavLink>
                <NavLink className="nav-link" to="/ConfettiComponent">
                  ConfettiComponent
                </NavLink>
                <NavLink className="nav-link" to="/SwiperWithEffect">
                  SwiperWithEffect
                </NavLink>
                <NavLink className="nav-link" to="/FullForm">
                  FullForm
                </NavLink>
                <NavLink className="nav-link" to="/JoyrideTour">
                  JoyrideTour
                </NavLink>
                <NavLink className="nav-link" to="/TodoList">
                  TodoList
                </NavLink>
                <NavLink className="nav-link" to="/ResponsiveForm">
                ResponsiveForm
                </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes Configuration */}
      <Routes>
        <Route path="/MyCalendar" element={<MyCalendar />} />
        <Route path="/MyWebcam" element={<MyWebcam />} />
        <Route path="/ConfettiComponent" element={<ConfettiComponent />} />
        <Route path="/SwiperWithEffect" element={<SwiperWithEffect />} />
        <Route path="/FullForm" element={<FullForm />} />
        <Route path="/JoyrideTour" element={<JoyrideTour />} />
        <Route path="/Simple" element={<Simple />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/SingalCard" element={<SingalCard />} />
        <Route path="/ResponsiveForm" element={<ResponsiveForm />} />
        <Route path="/" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
