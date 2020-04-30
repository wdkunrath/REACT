import React from "react";
import axios from "axios";

export default class ComponentListClient extends React.Component {    
    state = {
        clientes: [],
        historicos: []
    }

    componentDidMount(){
        axios.get(`http://www.mocky.io/v2/598b16291100004705515ec5`)
        .then(resp => { 
            const clientes = resp.data;      
            this.setState ({clientes})            
        });

        axios.post(`http://www.mocky.io/v2/598b16861100004905515ec7`)
        .then(res => { 
            const historicos = res.data;      
            this.setState ({historicos})            
        });
    }

    render(){
        const historicoC = this.state.historicos.map( historico => historico)
        const listCliente = this.state.clientes.map((cliente, i) => {              
            return (
                <li key={i}>{cliente.nome}</li>               
            )
        })
        
        const valorTotalMax = historicoC.map((valorMax,i) => {
            // falta validar data = 2016 e pegar o nome do cliente
                var arr = valorMax.valorTotal;
                const unico = Math.max(arr,valorMax.valorTotal) 
                return unico
        })

        return(<div className="card">
        <div className="card-content">
            <h2>Maior compra única</h2>            
            {Math.max(...valorTotalMax)}
        </div>
        <div className="card-content">
            <h2>Vinho Recomendado</h2>
            <p>Cliente:<span></span></p>
            <p>Vinho:<span></span></p>
        </div>  
        <div className="card-content">
            <h2>Lista de Clientes</h2>
            <ol>{listCliente}</ol>
        </div>
        <div className="card-content">
            <h2>Clientes Fiéis</h2>                        
        </div>                       
    </div>)
    }    
}
