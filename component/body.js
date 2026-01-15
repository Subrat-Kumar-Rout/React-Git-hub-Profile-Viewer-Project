import  {useState,useEffect, Component} from "react";

function Body(){
    const [render,setrender] = useState([]);
    const [count,setcount] = useState("");

    async function fetching(limit){
        const ran = Math.floor(1+Math.random()*1000)
        const data = await fetch(`https://api.github.com/users?since=${ran}&per_page=${limit}`);
        const jdata = await data.json();

        setrender(jdata);
    }

    useEffect(()=>{
        fetching(10);
    },[])

    return(
          <>
         
            <div>
                 <input type="text" placeholder="type here" value={count} onChange={(e)=>setcount(e.target.value)}></input>
                 <button onClick={(e)=>fetching(Number(count))}>search</button>
            
            <div className="profiles">
            {
            render.map((value)=>{
                return(
                    <div key={value.id} className="card">
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url}>Profile Link</a>
                    </div>
                )
            })
        }
        </div>
        </div>
         
          </>
    )
}

export default Body;


// import { useEffect, useState } from "react";

// function Body(){

//    const [Profile,setProfile] = useState([]);
//    const [numberofProfile,setnumberofProfile] = useState("");
 
//    async function generateProfile(count){
//       const ran = Math.floor(1+Math.random()*10000);
//       const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
//       const data = await response.json();
      

//       setProfile(data);
//    }

//    useEffect(()=>{
//     generateProfile(10);
//    },[]);
   

//    return (
//        <div className="but">
//        <input type="text" className="inpu" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
//        <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
//       <div className="profiles">
//        {
//         Profile.map((value)=>{ 
//            return (<div key={value.id} className="cards">
//               <img src={value.avatar_url}></img>
//               <h2>{value.login}</h2>
//               <a href={value.html_url} target="_blank">Profile</a>
//             </div>)
//         })
//        }
//       </div>
//       </div>
//    )

// }

// export default Body;