import React from 'react';
import Child from './Child';
import { useState } from 'react';
const Parent = () => {

    const gift = "Phone";
    const [returnGift, setReturnGift] =useState(); 

  return (
    <div>
    <Child childGift={gift} Return={setReturnGift}/>
    {/* <Child childGift={"Bike"}/> */}
    <h1>This is recived return gift : {returnGift}</h1>
    </div>
  )
}

export default Parent