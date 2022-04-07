import logo from './logo.svg';
import './components/firstPage/firstPage.css';
import './App.css';
import FirstPage from './components/firstPage/firstPage';
import SecondPage from './components/secondPage/SecondPage';
import ThirdPage from './components/thirdPage/ThirdPage';
import Cursor from './components/cursor/Cursor';

function App() {
  return (
    <div className='containerAllComponents'>
    
      <Cursor />
      <div className="strips">
          <div className="strips__one"></div>
          <div className="strips__two"></div>
          <div className="strips__three"></div>
          <div className="strips__four"></div>
          <div className="strips__five"></div>
          <div className="strips__six"></div>
        </div>
 <FirstPage />
 <SecondPage />
 <ThirdPage />
    </div>
   
   
  );
}

export default App;
