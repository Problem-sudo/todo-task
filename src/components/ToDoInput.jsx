import React,{useState} from 'react'

function TodoInput(props)
{
    const [input,setInput]=useState('');
    const handleEnterPass=(e)=>{
        if(e.keyCode===13){
            props.addList(input)
            setInput("")
        }
    }

    return (
        <div className='input-container'>
            <input  type ="text" className='input-box-todo' placeholder='Enter your task'
            value={input}
            onChange={e=>{
                setInput(e.target.value)
            }}
            onKeyDown={handleEnterPass}
            />
            <button className='add-btn'
            onClick={()=>{
                props.addList(input)
                setInput("")
            }}> + </button>
        </div>
        
    );
    
}
export default TodoInput;