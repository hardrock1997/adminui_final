import '../styles/Table.css'
export default function ActionButtons

({
    isEdit,
    searchQuery,
    editableValues,
    setEditableValues,
    setIsEdit,
    id,
    setSearchQuery,
    setEmployees
}) {

    function handleEdit() {
        setEmployeeToEdit(searchQuery,editableValues)
        setEditedEmployeeValues(searchQuery,editableValues)
        setIsEdit(!isEdit)
    }

    function setEmployeeToEdit(searchQuery,editableValues) {
        searchQuery.map((employee)=>{
            if(id===employee.id) {
                employee.edit=!isEdit
                setEditableValues({...editableValues,name:employee.name,email:employee.email,role:employee.role})
                return employee
            }
            return employee
        })
    }

    function setEditedEmployeeValues(searchQuery,editableValues) {
        searchQuery.map((employee)=>{
            if(id===employee.id) {
                employee.name=editableValues.name
                employee.email=editableValues.email
                employee.role=editableValues.role
                return employee
            }
            return employee
        })
    }

    function getEmployeesIfNotEdit(searchQuery) {
        const afterCancelEdit=searchQuery.map((employee)=>{
            if(id===employee.id) {
                employee.edit=!isEdit
                employee.name=editableValues.name
                employee.email=editableValues.email
                employee.role=editableValues.role
                return employee
            }
            return employee
        })
        return afterCancelEdit
    }
    function deleteEmployee(id,searchQuery) {
        const employeesAfterDeletion=searchQuery.filter((employee)=>{
            return employee.id!==id
        })
        return employeesAfterDeletion
    }

    function handleDeleteOrCancel(id) {
        if(isEdit===false) {
            const employeesAfterDeletion = deleteEmployee(id,searchQuery)
            setSearchQuery(employeesAfterDeletion)
            setEmployees(employeesAfterDeletion)
        }
        else {
        const afterCancelEdit=getEmployeesIfNotEdit(searchQuery)
            setIsEdit(!isEdit)
            setSearchQuery(afterCancelEdit)
        }
    }

    return (
        
          <td data-label='Action buttons'>
            <button className="edit_btn" onClick={handleEdit}>{isEdit===false ? 'Edit' : 'Update'}</button>
            <button className="delete_btn" onClick={()=>handleDeleteOrCancel(id)}>{isEdit===false ? 'Delete' : 'Cancel'}</button>
           </td>
        
    )
}