import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MyCalendar from './Components/MyCalendar';
import MyWebcam from './Components/MyWebcam';
import ConfettiComponent from './Components/ConfettiComponent';
import SwiperWithEffect from './Components/SwiperWithEffect';
import FullForm from './Components/FullForm';
import JoyrideTour from './Components/JoyrideTour';
import Simple from './Components/Simple';
import TodoList from './Components/TodoList';
import Card from './Components/CardItems/card';
import SingalCard from './Components/CardItems/SingalCard';

const App = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary  w-100 ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav gap-5">
        <a class="nav-link" href="#"> <NavLink to="/">Home</NavLink>      </a>
        <a class="nav-link active" >        <NavLink to="/MyCalendar">MyCalendar</NavLink>
        </a>
        <a class="nav-link" href="#">        <NavLink to="/MyWebcam">MyWebcam</NavLink>
        </a>
        <a class="nav-link" href="#"> <NavLink to="/ConfettiComponent">ConfettiComponent</NavLink>      </a>
        <a class="nav-link" href="#"> <NavLink to="/SwiperWithEffect">SwiperWithEffect</NavLink>      </a>
        <a class="nav-link" href="#"> <NavLink to="/FullForm">FullForm</NavLink>      </a>
        <a class="nav-link" href="#"> <NavLink to="/JoyrideTour">JoyrideTour</NavLink>      </a>
        <a class="nav-link" href="#"> <NavLink to="/TodoList">TodoList</NavLink>      </a>
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
        <Route path="/" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
