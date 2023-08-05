import logo from './logo.svg';
import './App.css';
import TopNav from './component/TopNav';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className="App">
      <header>
        <div style ={{minHeight:"10vh", width:'100%', backgroundColor:'rgb(25 118 210 / 55%)'}}></div>
        <TopNav />
      </header>
      <main>
        <div className='main-body'>
          <AppRoutes/>
        </div>
      </main>
      <footer>
          <div style ={{minHeight:"10vh", width:'100%', backgroundColor:'rgb(25 118 210 / 55%)'}}></div>
      </footer>
    </div>
  );
}

export default App;
