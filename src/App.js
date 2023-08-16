
import './App.css';
import { Route, Routes } from 'react-router-dom';
import{Box} from '@mui/material'
import Home from './pages/home';
import ExerciseDetail from './pages/exercisedetail';
import Navbar from './component/navbar';
import Footer from './component/Footer';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>

      <Footer/>
    </Box>
  );
}


export default App;
