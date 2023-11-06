import '../styles/Table.css'

const ActionButtons = ({isEdit,filteredData,editableValues,setEditableValues,setIsEdit,id,setFilteredData,setEmployees})=>{

function handleEdit() {
    setEmployeeToEdit(filteredData,editableValues)
    setEditedEmployeeValues(filteredData,editableValues)
    setIsEdit(!isEdit)
}

function setEmployeeToEdit(filteredData,editableValues) {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.edit=!isEdit
            setEditableValues({...editableValues,name:employee.name,email:employee.email,role:employee.role})
            return employee
        }
        return employee
    })
    }

function setEditedEmployeeValues(filteredData,editableValues) {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.name=editableValues.name
            employee.email=editableValues.email
            employee.role=editableValues.role
            return employee
        }
        return employee
    })
    }

function getEmployeesIfNotEdit(filteredData) {
    const afterCancelEdit=filteredData.map((employee)=>{
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
function deleteEmployee(id,filteredData) {
    const employeesAfterDeletion=filteredData.filter((employee)=>{
        return employee.id!==id
    })
    return employeesAfterDeletion
    }

function handleDeleteOrCancel(id) {
    if(isEdit===false) {
        const employeesAfterDeletion = deleteEmployee(id,filteredData)
        setFilteredData(employeesAfterDeletion)
        setEmployees(employeesAfterDeletion)
    }
    else {
        const afterCancelEdit=getEmployeesIfNotEdit(filteredData)
        setIsEdit(!isEdit)
        setFilteredData(afterCancelEdit)
    }
}


return (
        
    <td data-label='Action buttons' data-testid="mock-action-buttons">
    <button className="edit_btn" onClick={handleEdit}>
        {isEdit===false ? 'Edit' : 'Update'}
    </button>
    <button className="delete_btn" onClick={()=>handleDeleteOrCancel(id)}>
        {isEdit===false ? 'Delete' : 'Cancel'}
    </button>
    </td>

    )
}

export default ActionButtons