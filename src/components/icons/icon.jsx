import {FaRegCircle, FaTimes,FaPen} from 'react-icons/fa';
import card from '../cards/card';
import React from 'react';
function Icon({name}){
    if(name=="circle"){
        return <FaRegCircle />
    }
    if(name=="cross"){
        return <FaTimes />
    }
    else{
        return <FaPen/>
    }
}
export default Icon;
