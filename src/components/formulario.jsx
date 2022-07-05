import React,{useState} from 'react';
import Error from './ERROR';
import shortid from 'shortid';
import PropTypes from 'prop-types';
const Formulario = ({AgregarGasto,nuevocrearGasto}) => {
    const[Nombre,editNombre]=useState('')
    const[gastofalopa,falopaGastada]=useState(0)
    const[error,editerror]=useState(false)
    //cuando gasta falopa
    const agregarGasto = e => {
          e.preventDefault()
          //validacion
          if (gastofalopa < 1 || isNaN(gastofalopa) || Nombre.trim === ''){
            editerror(true)
                return
            }
            editerror(false)
        //elgasto
        const gasto={
            Nombre,
            gastofalopa,
            id: shortid.generate()
        }
        //pasar el gasto
        AgregarGasto(gasto)
        nuevocrearGasto(true)
        //reset form
        editNombre('')
        falopaGastada(0)
    }

     
    return ( 
        <form onSubmit={agregarGasto}>
            <h2>agregar gastos</h2>
            {error ?<Error message='Ambos campos son obligatorios o presupuesto invalido'/>:null}
            <div className='campo'>
                <label>Nombre del gasto</label>
                <input 
                type="text" 
                className="u-full-width" 
                placeholder='Ej.transporte' 
                value={Nombre}
                onChange={e =>editNombre(e.target.value)}/>
                <label>Cantidad gasto</label>
                <input 
                type="number" 
                className="u-full-width" 
                placeholder='Ej.1000' 
                value={gastofalopa}
                onChange={e =>falopaGastada(parseInt(e.target.value,10))}/>
            </div>
            <input 
            type="submit" 
            value='Agregar Gasto'
            className="u-full-width button-primary"
            />
        </form>
     );
}

Formulario.propTypes = {
    AgregarGasto: PropTypes.func.isRequired,
    nuevocrearGasto: PropTypes.func.isRequired
}
export default Formulario;