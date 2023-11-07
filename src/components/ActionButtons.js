import '../styles/Table.css'
import {handleIfEmailIsWrong,handleIfRoleIsWrong,handleIfNameIsWrong,handleIfValidationPasses,validate } from '../utils/validations.js'

const ActionButtons = ({isEdit,filteredData,editableValues,setEditableValues,setIsEdit,id,setFilteredData})=>{

function handleEdit(id) {
    console.log(id)
    setEmployeeToEdit(filteredData,editableValues,id);
    console.log(editableValues)
    setEditedEmployeeValues(editableValues,id);
    setIsEdit(!isEdit);
}

function setEmployeeToEdit(filteredData,editableValues,id) {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.edit=!isEdit;
            setEditableValues({...editableValues,name:employee.name,email:employee.email,role:employee.role});
            return employee;
        }
        return employee;
    })
}

function setEditedEmployeeValues(editableValues,id) {
const [responseOfNameValidation,responseOfEmailValidation,responseOfRoleValidation]=validate(editableValues);
if(responseOfEmailValidation && responseOfNameValidation && responseOfRoleValidation) {
    handleIfValidationPasses(filteredData,editableValues,id);
}
else if(!responseOfNameValidation) {
  handleIfNameIsWrong(filteredData,editableValues,id);
} 
else if(!responseOfEmailValidation) {
    console.log('hey there')
  handleIfEmailIsWrong(filteredData,editableValues,id);
}
else if(!responseOfRoleValidation) {
  handleIfRoleIsWrong(filteredData,editableValues,id);
}
}

function getEmployeesIfNotEdited(filteredData) {
    const afterCancelEdit=filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.edit=!isEdit;
            employee.name=editableValues.name;
            employee.email=editableValues.email;
            employee.role=editableValues.role;
            return employee;
        }
        return employee;
    })
    return afterCancelEdit
}

function deleteEmployee(id,filteredData) {
    const employeesAfterDeletion=filteredData.filter((employee)=>{
        return employee.id!==id;
    })
    return employeesAfterDeletion;
    }

function handleDeleteOrCancel(id) {
    if(isEdit===false) {
        const employeesAfterDeletion = deleteEmployee(id,filteredData);
        setFilteredData(employeesAfterDeletion);
    }
    else {
        const afterCancelEdit=getEmployeesIfNotEdited(filteredData);
        setIsEdit(!isEdit);
        setFilteredData(afterCancelEdit);
    }
}

return (
        
<td data-label='Action buttons' data-testid="mock-action-buttons">
  <button className="edit_btn" onClick={()=>handleEdit(id)}>
     {!isEdit ? 'Edit' : 'Update'}
  </button>
  <button className="delete_btn" onClick={()=>handleDeleteOrCancel(id)}>
     {!isEdit ? 'Delete' : 'Cancel'}
  </button>
</td>
)}

export default ActionButtons;