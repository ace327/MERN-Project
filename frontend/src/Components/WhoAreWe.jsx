import React from 'react'

const WhoAreWe = () => {
  return (
    <div>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
            <div className="text_banner">

                {

                    data[0].who_are_we.map(element=> {

                        return (

                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight: "300"}} className="heading"></h1>
                                <p>{element.title}</p>


                            </div>
                        )
                    })
                }
            </div>
        </div>
        
      </section>
    </div>
  )
}

export default WhoAreWe
