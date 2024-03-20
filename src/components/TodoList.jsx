/* eslint-disable no-unused-vars */
import React,{useState} from 'react'


const Todolist=({index,item,deleteItem,updateItem})=>{

    const [isUpdate,setIsUpdate]=useState(false);
    const [editText,setEditText]=useState(item);
    const [isEditing,setIsEditing]=useState(false);

    const handleUpdate=()=>
    {
        setIsUpdate(true);
    };

    const handleEdit=()=>{

        setIsEditing(true);
    };

    const handleInputChange=(e)=>{
        setEditText(e.target.value);
    };
    const handleSaveEdit=()=>{
        setIsEditing(false);
        setIsUpdate(false);

        updateItem(index,editText);
    };

    const handleDelete=()=>
    {
        deleteItem(index);
    };





    return (
        <div className={`todo-item ${isUpdate ? 'update' : ''}`}>
            {isEditing ? (
                <input type='text'
                value={editText}
                onChange={handleInputChange}
                autoFocus
                />
            ) :(
                <span>{item}</span>

            )}
            <div className='button-container'>
                {isEditing ?(
                    <button onClick={handleSaveEdit} className="save-button">
                        Save
                    </button>

                ):(
                    <button onClick={handleUpdate} className="update-button">
                        task Done
                    </button>
                )}
                <button onClick={isEditing ? handleSaveEdit : handleEdit} className={isEditing ? "Save-button" : "edit-button"}>
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                <button onClick={handleDelete} className="delete-button">
                    Detele
                </button>
            </div>
        </div>
    );
};

export default Todolist;