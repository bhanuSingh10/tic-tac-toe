import React from 'react'
import Icon from '../icons/icon';
import './card.css'

export default function card({player}) {

    let icon=<Icon/>
    if(player=='X'){
        icon=<Icon name='cross'/>

    }
    else if(player=='O'){
        icon =<Icon name="circle"/>
    }
  return (
    <div className="card">
      {icon}
    </div>
  )
}
