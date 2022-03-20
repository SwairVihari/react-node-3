import logo from './logo.svg';
import './App.css';
import  axios from "axios"
import Header from './Components/Header';
import Card from './Components/Card';

function App() {

  axios.get("/api/v1/test").then((response)=>{
    console.log(response.data.message);
  })
  return (
    <div className="App">
     <Header/>
     <Card/>
    </div>
  );
}

export default App;
