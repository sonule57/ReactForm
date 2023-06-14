// parent page
import React from 'react'
import Card1 from './Card1'

const CardHome = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Card1 title={"data1"} price={"300"} path={"./assets/image/pet.jpg"}/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default CardHome