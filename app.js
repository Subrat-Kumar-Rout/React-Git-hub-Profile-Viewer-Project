import  React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/header.js";
 import Body from "./component/body.js";

function Main(){
    return(
      <>
      <Header></Header>
      <Body></Body>
      </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>)