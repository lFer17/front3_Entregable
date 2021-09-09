import React, { Component } from 'react'

export class Opciones extends Component {
    render() {
        return (
            <ul className="opciones">
               {
                //    la props lista trae las opciones a renderizar  que vienen desde el comp Hist
                   this.props.lista.map((element,index) =>{
                       return(
                         <li className ="opcion" key ={index}>
                        {/* la propiedad que recibe el onClick viende de hist y maneja el cambio de historia */}
                         <button onClick={this.props.manejo} className="botones" value={index?"b":"a"}>
                             {index?"B":"A"}
                             </button> {element}
                         </li>
                       )
                   })
               }
            </ul>
        )
    }
}

export default Opciones
