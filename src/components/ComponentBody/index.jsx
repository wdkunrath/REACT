import React from "react";
import  ComponentListClient from "../ComponentListClient"

export function ComponentBody (){
    return (
      <div className="content-body"> 
        <h1>Software Ubots</h1> 
        <p className="color-white">Velasquez possui uma loja de vinhos e, ao longo dos anos, guardou dados de seus clientes e um histórico de compras. Velasquez quer personalizar o atendimento e contratou você para desenvolver um software que:</p>   
        <ol className="color-white">
            <li>Liste os clientes ordenados pelo maior valor total em compras.</li>
            <li>Mostre o cliente com maior compra única no último ano (2016).</li>
            <li>Liste os clientes mais fiéis.</li>
            <li>Recomende um vinho para um determinado cliente a partir do histórico de compras.</li>
        </ol>
        <ComponentListClient/>
      </div>
    )
  };
  
  export default ComponentBody;