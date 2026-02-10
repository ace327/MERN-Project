import React from 'react'
import {HiOutLineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios'
import {useState} from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
 
const Reservation = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);

    const handleReservation = async (e) => {

        e.preventDefault();
        try{

            const (data) = await axios.post("localhost",{firstName, lastName, email, phone, time},
                { 
                    header: {
                        "Content-Type": "application/json",
                    }, 
                    withCredentials: true,

                    }
                
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail();
            setTime();
            setDate();
            navigate("/success")
            
        } catch (error) {

            toast.error(error.response.data.message);



        };

    };

  return (
    <div>
        <section className="reservation" id="reservation">

            <div className="container">
                <div className="banner">
                    <img src="reservation.png" alt="" className="reservation" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>Make A Reservation</h1>
                        <p>For Further Questions,Please Call</p>
                        <form action="">
                            <div>
                                <input 
                                type="text"                       
                                placeholder=' First Name' 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} />



                                </div>
                        </form>
                    </div>
                    
                    
                </div>

            </div>




        </section>
      
    </div>
  )
}

export default Reservation
