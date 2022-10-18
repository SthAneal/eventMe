import { FlexDiv } from "../styles/globalStyleComponent";

type InputPropsType = {
    type:React.HTMLInputTypeAttribute
    name:string
    label:string
    labelFor:string
    required?:boolean
    pattern?:string
    title?:string
    errorMessage?:string
    flex?:string
    width?:string
    maxWidth?:string
    minWidth?:string
    alignSelf?:string
    minValue?:string
    maxValue?:string
    defaultValue?:string
    margin?:string
    padding?:string
    options?:{value:string,name:string}[]
    selected?:string
}

export const Input = ({type, name, label, labelFor, pattern,title, required, errorMessage, flex, width, maxWidth, minWidth, minValue, maxValue, defaultValue, alignSelf, margin, padding}:InputPropsType)=>{
    return(
        <FlexDiv 
            flex={flex?flex:1} 
            width={width?width:'100%'} 
            minWidth={minWidth?minWidth:''} 
            maxWidth={maxWidth?maxWidth:''} 
            alignSelf={alignSelf?alignSelf:''}
            flexDirection='column' 
            className='input-wrapper'
            padding={padding?padding:''}
            margin={margin?margin:''}
            >

            <label htmlFor={labelFor}>
                <span>{label}</span>
                {errorMessage? <span className="error-message">{errorMessage}</span>:''}
            </label>
            <input  autoComplete="true"
                    type={type} 
                    id={labelFor} 
                    name={name} 
                    pattern={pattern?pattern:".*?"} 
                    title={title?title:'At least one number of letters and numbers.'}
                    //value={defaultValue?defaultValue:""}
                    min={minValue?minValue:""}
                    max={maxValue?maxValue:""}
                    required={required?true:false}/>
        </FlexDiv>
    )
}


export const Select = ({name, label, labelFor,title, required, errorMessage, flex, width, maxWidth, minWidth, alignSelf, margin, padding, options, selected}:InputPropsType)=>{
    return(
        <FlexDiv 
            flex={flex?flex:1} 
            width={width?width:'100%'} 
            minWidth={minWidth?minWidth:''} 
            maxWidth={maxWidth?maxWidth:''} 
            alignSelf={alignSelf?alignSelf:''}
            flexDirection='column' 
            className='input-wrapper'
            padding={padding?padding:''}
            margin={margin?margin:''}
            >

            <label htmlFor={labelFor}>
                <span>{label}</span>
                {errorMessage? <span className="error-message">{errorMessage}</span>:''}
            </label>
            <select  
                id={labelFor} 
                name={name} 
                title={title?title:'Select one of the given options.'}
                required={required?true:false}>
                    <option value=''>Select an event type</option>
                    {
                        options?.map((opt)=>(
                            opt.value === selected?<option selected value={opt.value}>{opt.name}</option>:<option value={opt.value}>{opt.name}</option>
                        ))
                    }

            </select>
        </FlexDiv>
    )
}