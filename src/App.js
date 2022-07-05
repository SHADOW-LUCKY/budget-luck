import './App.css'
import React, { useEffect, useState } from 'react'
import Pregunta from './components/pregunta'
import Formulario from './components/formulario'
import Listado from './components/listagastos'
import ControlPresupuesto from './components/controbudget'

function App() {
 const [initfalopa, actufalopa] = useState(0)
 const [initsobrante, actusobrante] = useState(0)
 const [component, showcomponent] = useState(true)
 const [gastos, agregarGastos] = useState([])
 const [gasto, AgregarGasto] = useState({})
 const [creargasto, nuevocrearGasto] = useState(false)
 //  useEffect para el presupuesto restante
 useEffect(() => {
  //pone el nuevo presupuesto
  if (creargasto) {
   agregarGastos([...gastos, gasto])
   nuevocrearGasto(false)
  }
  //resta del presupuesto actual
  const presupuestorestante = initsobrante - gasto.gastofalopa
  actusobrante(presupuestorestante)
 }, [gasto])

 return (
  <div className='container'>
   <header>
    <h1>Gasto semanal </h1>
    <div className='contenido-principal contenido'>
     {component ? (
      <Pregunta
       actufalopa={actufalopa}
       actusobrante={actusobrante}
       showcomponent={showcomponent}
      />
     ) : (
      <div className='row'>
       <div className='one-half column'>
        <Formulario
         AgregarGasto={AgregarGasto}
         nuevocrearGasto={nuevocrearGasto}
        />
       </div>
       <div className='one-half column'>
        <Listado gastos={gastos} />
        <ControlPresupuesto
         initfalopa={initfalopa}
         initsobrante={initsobrante}
        />
       </div>
      </div>
     )}
    </div>
   </header>
  </div>
 )
}

export default App
