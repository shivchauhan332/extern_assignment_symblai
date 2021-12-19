import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from './Components/Header';
import Table from './Components/Table';
function App() {
  const apiURL = "http://localhost:8080/api/get-data";
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      response.data.data.sort((a,b)=>{
        return a.id - b.id;
      })
      setData(response.data.data);
    })
  }, [apiURL])
  return (
    <>
    <Header/>
    <Table data={data}/>
  </>
  );
}

export default App;
