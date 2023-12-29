import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import './App.css'


import Navbar from './components/Navbar'
// import Inspiring from './components/Inspiring'
import Articles from './components/Articles'
function App() {

  return (
    <div className='container'>
      <Navbar />
{/* 
      <Inspiring /> */}
      <Articles />
    </div>
  )
}

export default App
