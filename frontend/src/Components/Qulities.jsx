import React from 'react'

const Qulities = () => {
  return (
    <div>
      <section className="qulities">
        <div className="container">
            {
                data[0].ourQualiities.map(element => (
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

<section className="qulities">
    <div className="container">
        {
            data[0].our
        }
    </div>
</section>

export default Qulities
