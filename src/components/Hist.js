import React, { Component } from 'react'
import data from './data/data.json'
import Opciones from './Opciones'
import Recordatorio from './Recordatorio'
export class Hist extends Component {

    state ={
        count:2,
        historial:"",
        history:data[0]
    }
    
    componentDidUpdate(){
         return this.state.history
    }
    
    handleClick=(e)=>{
        // manejo del contador 
        this.setState({ count: this.state.count + 1 ,
                historial:this.state.historial+" "+e.currentTarget.value
        });
        // este estado setea la historia para trabajar las opciones en las que se vaya moviendo user
        // lo separo de linea para que sea mas facil de procesar la logica
        this.setState({history: data.find(ele=> ele.id === String(this.state.count)+e.currentTarget.value)})
    }
    
    render() {
        // Variable para manejar la historia en cambio inmediato y la seteo en 0 para manejar el render en false
        let cuento;
        this.state.count <= 6 ? cuento = this.componentDidUpdate(): cuento = 0;
        // lleva historial de las opciones elegidas
        let historial;
        historial=this.state.historial.trim().toUpperCase();
        return (
            <>

                {
                    cuento?
                    <>
                    <div className="historia">   
                    {cuento.historia}
                    <br/>
                    </div>
                    <Opciones manejo={this.handleClick} lista ={[cuento.opciones.a,cuento.opciones.b]} />
                    <Recordatorio recordatorio={historial} />
                    </>
                    : <p className="historia">"Hasta la proxima 😁"</p>
                }

            </>
        )
    }
}

export default Hist
