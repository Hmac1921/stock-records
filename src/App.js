import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useContext } from 'react'
import Start from './pages/Start';
import Herd from './pages/Herd';
import Movements from './pages/Movements';
import Medicine from './pages/Medicine';
import BirthsAndDeaths from './pages/BirthsAndDeaths';
import NewStock from './pages/NewStock';
import { useDispatch } from 'react-redux';
import './App.css';
import { getHerd } from './actions/cowActions';
import { getMedicine } from './actions/medicineActions';




export default function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    fetch('http://localhost:5001/cows.json')
      .then(res => res.json())
      .then(data => dispatch(getHerd(data)))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5001/medicine.json')
      .then(res => res.json())
      .then(data => dispatch(getMedicine(data)))
  }, [])



  return (

    <Router>
      <section className='App'>
        <main>
          <Routes>
            <Route path='/' element={<Start />}></Route>
            <Route path='/herd' element={<Herd />}></Route>
            <Route path='/movements' element={<Movements />}></Route>
            <Route path='/medicine' element={<Medicine />}></Route>
            <Route path='/birthsAndDeaths' element={<BirthsAndDeaths />}></Route>
            <Route path='/newStock' element={<NewStock />}></Route>
          </Routes>
        </main>
        <footer>
          <nav>
            <Link to={"/"}> Start // </Link>
            <Link to={"/herd"}> Herd // </Link>
            <Link to={"/movements"}> Movements // </Link>
            <Link to={"/medicine"}> Medicine // </Link>
            <Link to={"/birthsAndDeaths"}> Births and Deaths // </Link>
            <Link to={"/newStock"}> New Stock </Link>
          </nav>
        </footer>
      </section>
    </Router>

  );
}


/*


 


*/