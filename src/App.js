// import './App.css';
import './styles/listitem.css'
import './styles/header.css'
import './styles/subheader.css'
import Products from "./components/ListItem/Products";
import Header from './components/Layout/Header';
import Subheader from './components/Layout/Subheader';



const App = () => {
  return (
   
    <div>
      <div> <Header/></div>
  <div><Subheader/></div>
      <Products/>
    </div>
  );
}


export default App;
