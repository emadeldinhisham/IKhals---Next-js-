"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({children}:any){

 const ref = useRef(null);
 const [show,setShow]=useState(false);

 useEffect(()=>{

  const observer = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
      setShow(true);
      observer.disconnect();
    }
  });

  if(ref.current) observer.observe(ref.current);

 },[]);

 return (
  <div
    ref={ref}
    className={`transition duration-700
    ${show ? "opacity-100 translate-y-0" :
    "opacity-0 translate-y-10"}`}
  >
    {children}
  </div>
 );
}
