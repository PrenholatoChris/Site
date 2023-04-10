import './Introduction.css'
import React from 'react';
import { useState, useEffect, useCallback } from 'react';

function Introduction() {

  function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);
    var years = (otherDate.getFullYear() - birthDate.getFullYear());
    if (otherDate.getMonth() < birthDate.getMonth() || 
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
    }
    return years;
  }
  const birthDate = new Date('10/17/2001')
  const todayDate = new Date(Date.now())
  const myAge = calculateAge(birthDate , todayDate)
 
  const messages =[`Hi I'm Christian Prenholato.`,
    `I like to develop ideas that I find interesting`,
    `I'm From Espirito Santo - Brazil`,
    `Computer Science student at Federal University of Espirito Santo (UFES)`,
    `I'm ${myAge}`
  ]
  
  const [message,setMessage] = useState(`Hi I'm Christian Prenholato.`)

  let index = 0
  const shuffle = useCallback(() => {
    // let index = Math.floor(Math.random() * messages.length);
    // let aux = index;
    // while( aux == index){
    //   index = Math.floor(Math.random() * messages.length);
    // }

    if(index >= messages.length-1){
      index = 0
    }
    else{
      index++
    }
    let activeDot = document.getElementsByClassName("dot-on")[0]
    activeDot.className = "dot"

    let dot = document.getElementsByClassName("dot")[index]
    dot.className = "dot-on"

    setMessage(messages[index]);
    // aux = index;
  }, []);


  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle])
  


  return (
    <div onClick={shuffle} id='Introduction' className="Introduction">
      <div className='container'>
      

        <div>
          <span>{message}</span>
        </div>

        <div className='box'>    
        <div className="dot dot-on"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
        
      </div>
    </div>
  )
}

export default Introduction
