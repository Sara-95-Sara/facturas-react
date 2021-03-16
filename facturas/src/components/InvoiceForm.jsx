import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'

const InvoiceForm = () => {

    const [redirect, setRedirect] = useState(false)

    const cancelar = () => {
        console.log("Cancelando")
        setRedirect(true)
    }

    //const guardar = () =>{
    //    console.log("Guardar")
    //    setRedirect(true)
    //}
    
    return (
        <div>
            {redirect && <Redirect to="/"/>}
            <form className="ui form">
                <div className="field">
                    <label>Cliente</label>
                    <input type="text"  value={this.state.value} onChange={this.handleChange} name="first-name" placeholder="Cliente" />
                </div>
                <div className="field">
                    <label>Importe</label>
                    <input type="text" name="first-name" placeholder="Importe" />
                </div>
                <div className="field">
                    <label>Fecha</label>
                    <input type="text" name="first-name" placeholder="Fecha" />
                </div>
            </form>

            <button className="ui negative button" onClick={guardar}>Guardar</button>
            <button className="ui negative button" onClick={cancelar}>Cancelar</button>

        </div>
    )
}

export default InvoiceForm
