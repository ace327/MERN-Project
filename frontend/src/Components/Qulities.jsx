import React from 'react'

import { data } from "../restApi.json"

const Qulities = () => {
  return (
    <div>
      <section className="qulities">
        <div className="container">
            {
                data[0].ourQualities.map(element => (
                    <div className="card" key ={element.id}>
                        <img src={element.image} alt={element.title} />
                    </div>
                ))
            }
        </div>
      </section>
    </div>
  )
}



export default Qulities
