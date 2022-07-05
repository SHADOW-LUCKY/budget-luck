import React,{Fragment,useState}from 'react'
import Error from './ERROR'
import PropTypes from 'prop-types';
const Pregunta = ({actufalopa,actusobrante,showcomponent}) => {
    //state de la plata(falopa)
    const [falopa,editfalopa]=useState(0)
    const[error,editerror]=useState(false)
    //func pal useState
    const definirfalopa = e =>{
    editfalopa(parseInt(e.target.value,10))
    }
    //enviar la falopa
    const agregarfalopa = e =>{
        e.preventDefault()
        //si no se valida la falopa
        if (falopa < 1 || isNaN(falopa)) {
        editerror(true)
            return
        }
        //si se valida la falopa
        editerror(false)
        actufalopa(falopa)
        actusobrante(falopa)
        showcomponent(false)

    }
    return ( 
        <Fragment>
            {error 
            ?
            <Error message='Presupuesto invalido'/>
            :null}
            <h2>Coloca tu presupuesto</h2>
            <form  onSubmit={agregarfalopa}>
                <input 
                className='u-full-width' 
                type="number" 
                onChange={definirfalopa}
                placeholder ='Coloca tu presupuesto'/>
                <input 
                type="submit" 
                className='u-full-width button-primary' 
                value="crear presupuesto"/>
            </form>
        </Fragment>
     );
}
Pregunta.propTypes = {
    actufalopa: PropTypes.func.isRequired,
    actusobrante: PropTypes.func.isRequired,
    showcomponent: PropTypes.func.isRequired
} 
export default Pregunta;