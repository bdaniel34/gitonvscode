import { useState,useEffect } from "react"

 
 export default function Fetch(){
  const api = "https://catfact.ninja/fact";
  const [first, setfirst] = useState()
  useEffect(()=>{
    fetch(api)
    .then(res=>res.json())
    .then((data=>setfirst(data.fact)))
  },[])

  return(
    <div>{first}</div>
  )
 }