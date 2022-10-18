import React from "react"

type ButtonPropType = {
    children:React.ReactNode
    typeVariant:'contained'|'outlined'|'text'
    typeColor?:'primary'|'secondary'
    width?:string
    maxWidth?:string
    onClickFnc?:()=>void
}

export const Button = ({children, typeVariant, typeColor, width, maxWidth, onClickFnc}:ButtonPropType)=>{
    
    return(
       <button 
        style={{width:`${width ? width:'100%'}`, maxWidth:`${maxWidth? maxWidth:''}`}} 
        className={`${typeVariant} ${typeColor}`}
        onClick={onClickFnc?()=>onClickFnc():()=>console.log('do nothing')}
        >{children}</button>
    )
}