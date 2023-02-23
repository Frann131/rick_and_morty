

export default function validate(inputs) {
     const errors = {};
     const emailRegex = /\S+@\S+\.\S+/;
     const passRegex = new RegExp (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

     if(!emailRegex.test(inputs.username)) {
        errors.username = 'Email inválido'
     }
     if(!inputs.username) {
        errors.username = 'No se ingreso ningún email'
     }
     if(inputs.username.length>35) {
        errors.username = 'El email debe ser menor a 35 caracteres'
     }
     if(!passRegex.test(inputs.password)) {
        errors.password = 'Contraseña invalida'
     }
    return errors
}