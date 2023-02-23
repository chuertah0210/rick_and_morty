import React from 'react'
import validate from './validation'
import s from './Form.module.css'

const Form =({login})=>{
    const [userData, setUserData] = React.useState(
        { 
            username: '', 
            password: '' 
        }
        );
    const [errors, setErrors] = React.useState(
        { 
            username: '', 
            password: '' 
        }
        );


    const handleInputChange  =(event)=>{
        const property = event.target.name
       
        setUserData({
            ...userData,
            [property]: event.target.value
        })

        setErrors(validate({
            ...userData,
            [property]: event.target.value
          }))
    }

    const handleSubmit=(event)=>{   
        event.preventDefault(); 
        login(userData);
    }
    
return(
<div>
    <form className={s.form} onSubmit={handleSubmit}>
       <label htmlFor="username">username:</label>
       <input type="text" onChange={handleInputChange}  name="username" value={userData.username}/>
       {errors.username && <p style={{color:'red'}} >{errors.username}</p>}

       <label htmlFor="password">passsword:</label>
       <input type="text" onChange={handleInputChange} name="password" value={userData.password} />
       {errors.password && <p style={{color:'red'}} >{errors.password}</p>}
       <br/>
       <button type="submit">Login</button>
    </form>
</div>
)
}

export default Form;