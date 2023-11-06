import '../styles/Table.css';

const Edit = ({editableValues,setEditableValues})=>{
function handleEditableValues(e) {
    setEditableValues({...editableValues,[e.target.name]:e.target.value})
}

return (
    <>
        <td data-label='Name'><input onChange={(e)=>handleEditableValues(e)} name='name' value={editableValues.name}/></td>
        <td data-label='Email'><input onChange={(e)=>handleEditableValues(e)} name='email' value={editableValues.email}/></td>
        <td data-label='Role'><input onChange={(e)=>handleEditableValues(e)} name='role' value={editableValues.role}/></td>
    </>
    ) 
}

export default Edit