

 const validate=({username,password})=>{

    const errors={};

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=.*\d).{6,10}$/;

if(username.length>35) errors.username ='Debe tener un largo min de 35 char';

if(username==='') errors.username ='Debe tener un largo min de 35 char';   

if(!regexEmail.test(username)) errors.username='Debe ser un correo electrónico';

if(!regexPass.test(password)) errors.password='Password debe tener entre 6 y 10 char y al menos un numero';

return    errors;
}

export default validate;