import React, { Component } from 'react'

export class Recordatorio extends Component {
    render() {
        return (
            <div className="recordatorio"> 
            {/* la props recordatorio recibe el valor de el state "historial" desde el componente "Hist" */}
            Estas en la linea: {this.props.recordatorio.trim().toUpperCase()[this.props.recordatorio.trim().length-1]}
            <br/>
            Historial de Elegidas: {this.props.recordatorio.trim().toUpperCase()}
             <br/> 
            </div>
        )
    }
}

export default Recordatorio
