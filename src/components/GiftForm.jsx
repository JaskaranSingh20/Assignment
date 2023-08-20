import React, { useEffect, useState } from 'react'

function GiftForm() {

    const [show, setShow] = useState(true);   // to toggle on off .right div beased on screen
    const [data, setData] = useState({
        relationship: "",
        age: "",
        occasion: "",
        interests: "",
        budget: ""
    })

    useEffect(()=>{

        const mobile  = window.innerWidth;
        if(mobile <= 600){
            setShow(false);
        }
    },[])

    const handleChange = (e)=>{             //to get all the data user enters 

        // console.log(e.target.name);

        const {name, value} = e.target;

        setData((prev)=>{
            console.log(prev)
                return {
                    ...prev,
                    [name] : value,
                }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setData({            // cleaning the data storage
            relationship: "",
            age: "",
            occasion: "",
            interests: "",
            budget: ""
        })
    };
    
  return (
    <div className='giftpage'>
        <div className="left">
            
            <div className="cirle1"></div>
            <div className="cirle2"></div>
            <div className="cirle3"></div>

            <form className='formStyle' onSubmit={handleSubmit} >
                <h2 id='hH2'>AI CURATED GIFT IDEAS</h2>
                <p>Our AI-powered tool will guide you in choosing the perfect gift when you're unsure about what to buy. Simply fill out the form below with information about the recipient and your budget, and we'll suggest a curated list of gifts!</p>
            <div>
                <label htmlFor='relationship'>Relationship</label>
                <input type="text" name="relationship" value={data.relationship}  onChange={handleChange}/>
            </div>
            <div >
                <label htmlFor='age'>Age</label>
                <input type="text" name="age" value={data.age} onChange={handleChange}/>
            </div>
            <div >
                <label htmlFor='occasion'>Occasion</label>
                <input type="text" name="occasion" value={data.occasion} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='interests'>Interests</label>
                <input type="text" name="interests" value={data.interests} onChange={handleChange}/>
            </div>
            <div >
                <label htmlFor='budget'>Budget</label>
                <input type="text" name="budget" value={data.budget} onChange={handleChange}/>
            </div>

            <button id='giftbtn'>Get Gift Suggestions</button>
            </form>
        </div>

        {show && (
        <div className="right">
            <img src='./newgift2.png'/>  
                <div className="cirle4"></div>
                <div className="cirle5"></div>
        </div>)}
    </div>
  )
}

export default GiftForm