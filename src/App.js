import "./App.css";
import react, { useState, useEffect } from "react";
import Data from "./Data"

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [showData, setShowData] = useState([]);

  const loadData = () => {
    /*Get data from the api*/
    fetch(url, {
      method: "GET",
    })
      /* Convert the data to json format*/
      .then((res) => res.json())

      .then((result) => {
        if (result) {
          setShowData(result);
        }
      })

      /*Error function */
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  });

  return (
    /*react Accordian toggle to show and hide content*/

    <div className="container">
      {/* This is inline css with react js */}
      <h5 style={{textAlign:"center", color:"white" , height:"50px" , justifyContent:"center" , display: "flex" , lineHeight:"40px" , backgroundColor:"orangered"}}>React Accordian</h5>

      <div className="row">
        {showData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            {/* <Data title={item.title} body={item.body}/> */}
            <Data {...item} />
          </div>
        ))}
      </div>
      {/* <p>{JSON.stringify(showData)}</p> Not needed  */} 
    </div>
  );
};
export default App;
