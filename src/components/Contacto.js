import React from 'react';
import { FormControl, Grid, Button, TextField } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// const Contacto = (props) => {
//     const [dato,setDato] = useState({
//        nombre:'',
//        apellido: '',
//        mail:'',
//        mensaje:''
//     });

//     function handleSubmit(e) {
//         e.preventDefault()
//         if (!dato.nombre || !dato.apellido) return
//         props.datosForm(dato);

//     }
    
//     function handleChange(e){
//         setDato({
//             ...dato,
//             //name="nombre"  value="hola"
//             [e.target.name]:e.target.value
//         });
//     }
//     return ( <form onSubmit={handleSubmit} className="formu">
//         <label>Nombre:</label><br/>
//         <input type="text" value={dato.nombre} name="nombre" onChange={handleChange}/><br/>
//         <label>Apellido:</label><br/>
//         <input type="text" value={dato.job} name="apellido" onChange={handleChange}/><br/>
//         <label >Correo electronico:</label><br/>
//         <input type="email" value={dato.mail} name="mail" onChange={handleChange}/><br/>
//         <label >Mensaje:</label><br/>
//         <textarea name="mensaje" cols="30" rows="10"></textarea><br/>
//         <input type="submit"/>
//     </form> );
// }
// export default Contacto;

const Contacto2 = () => {
    return ( 
        <Grid container>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                    <Input id="nombre" aria-describedby="nombre-helper" />
                    <FormHelperText id="nombre-helper">Nombre/s</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="apellido">Apellido</InputLabel>
                    <Input id="apellido" aria-describedby="apellido-helper" />
                    <FormHelperText id="apellido-helper">Apellido/s</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" aria-describedby="email-helper" />
                    <FormHelperText id="email-helper">Tu email personal</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <TextField
                id="standard-multiline-static"
                label="Mensaje"
                multiline
                rows={4}
                defaultValue=""
                />
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" color="primary">Enviar</Button>    
            </Grid>
        </Grid>
     );
}
 
export default Contacto2;


 