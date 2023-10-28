import '../styles/Table.css'

export default function Edit({editableValues,setEditableValues}) {
  
    function handleEditableValues(e) {
        setEditableValues({...editableValues,[e.target.name]:e.target.value})
    }
    return (
        <>
        <td><input onChange={(e)=>handleEditableValues(e)} name='name' value={editableValues.name}/></td>
        <td><input onChange={(e)=>handleEditableValues(e)} name='email' value={editableValues.email}/></td>
        <td><input onChange={(e)=>handleEditableValues(e)} name='role' value={editableValues.role}/></td>
        </>
    )
}