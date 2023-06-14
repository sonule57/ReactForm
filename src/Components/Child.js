import React from 'react';

const Child = (props) => {
    
    const returnGift = "Fruits"

    props.Return(returnGift);
  return (
    <div>
        <h1>This is Child 
            This is gift recived
            {props.childGift} hello tanisha
        </h1>
    </div> 
  )
}

export default Child