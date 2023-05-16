import React, {useState} from 'react';
// import post from '../services/post'
import '../Login.css'
import axios from 'axios';



function RegistrationForm() {
const [user, setUser] = useState({
    name:"",
    email:"",
    contact:"",
    course:""
})

const handleChange = e=>{
    console.log(user)
    const {name,value}=e.target
    setUser({
        ...user,
        [name]:value
    })
}


const register=()=>{
    const {name,email,contact,course}=user
    if(name && email && contact && course){
        alert("posted")
        axios.post("localhost:5000/student", user)
         .then(res =>console.log(res))
         console.log(name,email,contact,course)
    }else{
        alert("invalid")
    }

}
// const form = document.querySelector('form')
// const errormsg = document.querySelector('.error')
// const success =document.getElementById('success')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     errormsg.innerHTML = ''
//     success.innerHTML= ''

//     const formData = new FormData(form)
//     fetch("localhost:5000/student",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'

//         },
//         body:JSON.stringify({
//             name:formData.get('name'),
//             email:formData.get('email')
//         })
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data)
//         })

     
//     })
// })

    return(
        


        <form >
            <div className="form">
                <div className='errormsg'></div>
                <div id='success'></div>
          <div className="form-body">
              <div className="name">
                  <label className="form__label" >Full Name </label>
                  <input className="form__input" type="text" name="name" placeholder="Enter Your Full Name" value={user.name} onChange={handleChange}/>
              </div>
              <div className="email">
                  <label className="form__label">Email </label>
                  <input  type="email" name="email" className="form__input" placeholder="Email" value={user.email} onChange={handleChange}/>
              </div>
              <div className="contact">
                  <label className="form__label" >Contact </label>
                  <input className="form__input" type="text"  name="contact" placeholder="contact" value={user.contact} onChange={handleChange}/>
              </div>
              <div className="course">
                  <label className="form__label" >Course </label>
                  <input className="form__input" type="text" name="course" placeholder="course" value={user.course} onChange={handleChange}/>
              </div>
          </div>
          <div class="footer">
          <button type="submit" className="btn" onClick={register}>Register</button>
          </div>
      </div>   
      <p></p>
        </form>
         
    )       
}

export default RegistrationForm;