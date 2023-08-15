import React, { useState } from 'react'
import Card from "../cards/card"
import './Grid.css'
export default function Grid({numberOfCards}) {
    const [board,setBoard]=useState(Array(numberOfCards).fill(""));
  return (
    <div className='grid'>
      {board.map((el,idx)=><Card key={idx}/>)}
    </div>
  )
}
