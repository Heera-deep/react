import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
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
    </Router>
  );
};

export default App;
