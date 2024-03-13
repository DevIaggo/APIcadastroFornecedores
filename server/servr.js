
import dotenv from 'dotenv'
import app from '../Modulos/rotas/rotas.js'
dotenv.config({ path: './process.env'})


app.listen(process.env.PORT, () => {
   
    console.log(`SERVIDOR ON - Port ${process.env.PORT}`); 
    
    
}); 

