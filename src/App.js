import { Route, Routes } from 'react-router-dom';
import Navbara from './components/Navbar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
const App = () => {
  return (
    <>
      <Navbara />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
      </Routes>
    </>
  );
}
export default App;
