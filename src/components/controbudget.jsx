import React,{Fragment} from 'react'
import {revisarPresupuesto} from '../helpers'
import PropTypes from 'prop-types';
const Controlpresupuesto = ({initfalopa, initsobrante}) => {
    return (  
        <Fragment>
        <div className='alert alert-primary'>            
            presupuesto: $ {initfalopa}
        </div>
        <div className={revisarPresupuesto(initfalopa, initsobrante)}>
            total restante: $ {initsobrante}
        </div>
        </Fragment>
    );
}
Controlpresupuesto.propTypes = {
    initfalopa: PropTypes.number.isRequired,
    initsobrante: PropTypes.number.isRequired
}
export default Controlpresupuesto;