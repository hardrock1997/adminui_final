import '../styles/Table.css'
import { validateRole,validateEmail,validateName } from '../utils/constants'

const ActionButtons = ({isEdit,filteredData,editableValues,setEditableValues,setIsEdit,id,setFilteredData})=>{

let responseOfRoleValidation = true
let responseOfEmailValidation = true
let responseOfNameValidation = true

function handleEdit() {
    setEmployeeToEdit(filteredData,editableValues);
    setEditedEmployeeValues(editableValues);
    setIsEdit(!isEdit);
}

function setEmployeeToEdit(filteredData,editableValues) {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.edit=!isEdit;
            setEditableValues({...editableValues,name:employee.name,email:employee.email,role:employee.role});
            return employee;
        }
        return employee;
    })
}

function handleIfNameIsWrong() {
        filteredData.map((employee)=>{
            if(id===employee.id) {
                employee.name='Please enter a proper name';
                employee.email=editableValues.email;
                employee.role=editableValues.role;
                employee.nameError=true;
                return employee;
            }
            return employee;
        })
}

function handleIfEmailIsWrong() {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.name=editableValues.name;
            employee.email='Please enter a proper email'
            employee.role=editableValues.role;
            employee.emailError=true;
            return employee;
        }
        return employee;
    })
}

function handleIfRoleIsWrong() {
    filteredData.map((employee)=>{
        if(id===employee.id) {
            employee.name=editableValues.name;
            employee.email=editableValues.email;
            employee.role='Please enter a proper role';
            employee.roleError=true;
            return employee;
        }
        return employee;
    })
}

function handleIfValidationPasses() {
    filteredData.map((employee)=>{
        if(id===employee.id) {
           employee.name=editableValues.name;
           employee.email=editableValues.email;
           employee.role=editableValues.role;
           return employee;
       }
       return employee;
   })
}

function validate(editableValues) {
    if(editableValues.role!=='' && editableValues.email!=='' && editableValues.name!=='') {
        responseOfRoleValidation = validateRole(editableValues.role);
        responseOfEmailValidation = validateEmail(editableValues.email);
        responseOfNameValidation = validateName(editableValues.name);
    }
}

function setEditedEmployeeValues(editableValues) {
validate(editableValues);
if(responseOfEmailValidation && responseOfNameValidation && responseOfRoleValidation) {
    handleIfValidationPasses();
}
else if(!responseOfNameValidation) {
  handleIfNameIsWrong();
} 
else if(!responseOfEmailValidation) {
  handleIfEmailIsWrong();
}
else if(!responseOfRoleValidation) {
  handleIfRoleIsWrong();
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
    <button className="edit_btn" onClick={handleEdit}>
        {!isEdit ? 'Edit' : 'Update'}
    </button>
    <button className="delete_btn" onClick={()=>handleDeleteOrCancel(id)}>
        {!isEdit ? 'Delete' : 'Cancel'}
    </button>
    </td>

    )
}

export default ActionButtons;