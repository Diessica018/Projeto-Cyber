import React from 'react'
import "./modal.css"
export default function Modal({ isOpen }) {
  if (!isOpen) return null;

  // aqui você vai fazer uma renderização condicional e passar o booleano
  //  isopen caso for verdadeiro renderiza o container caso não n renderiza
  // é apenas isso e ja te expico os estilos q botei dps volto
  return (
    <div className='container'>
      <div className='modal'></div>
    </div>
  )
}

  
  


