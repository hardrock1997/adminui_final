const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let responseOfRoleValidation = true;
let responseOfEmailValidation = true;
let responseOfNameValidation = true;

const validateRole=(role) =>{
    console.log('role is ', role)
 if((role==='admin' || role==='member') && role.length>0) {
    return true;
} else {
    return false;
}}

const validateEmail=(email) =>{
 if(emailRegex.test(email) && email.length>0) {
    return true;
} else {
    return false;
}}

const validateName = (name)=>{
 if(name.length>1) {
    return true
 } else {
    return false
 }}

export  const handleIfEmailIsWrong = (filteredData,editableValues,id) =>{
 filteredData.map((employee)=>{
    if(id===employee.id) {
        employee.name=editableValues.name;
        employee.email='Please enter a proper email';
        employee.role=editableValues.role;
        employee.emailError=true;
        return employee;
    }
    return employee;
})}

export const  handleIfRoleIsWrong=(filteredData,editableValues,id)=> {
  filteredData.map((employee)=>{
    if(id===employee.id) {
        employee.name=editableValues.name;
        employee.email=editableValues.email;
        employee.role='Please enter a proper role';
        employee.roleError=true;
        return employee;
    }
    return employee;
})}

export const handleIfNameIsWrong=(filteredData,editableValues,id)=> {
  filteredData.map((employee)=>{
    if(id===employee.id) {
        employee.name='Please enter a proper name';
        employee.email=editableValues.email;
        employee.role=editableValues.role;
        employee.nameError=true;
        return employee;
    }
    return employee;
})}

export const handleIfValidationPasses=(filteredData,editableValues,id)=> {
  filteredData.map((employee)=>{
    if(id===employee.id) {
        employee.name=editableValues.name;
        employee.email=editableValues.email;
        employee.role=editableValues.role;
        return employee;
    }
    return employee;
})}

export const validate=(editableValues)=> {
  if(editableValues.role!=='' && editableValues.email!=='' && editableValues.name!=='') {
     responseOfRoleValidation = validateRole(editableValues.role);
     responseOfEmailValidation = validateEmail(editableValues.email);
     responseOfNameValidation = validateName(editableValues.name);
}  
  if(editableValues.email==='' && editableValues.role!=='' && editableValues.name!=='') {
    responseOfEmailValidation=false;
} if(editableValues.name==='' && editableValues.role!=='' && editableValues.email!=='') {
    responseOfNameValidation=false;
} if(editableValues.role==='' && editableValues.name!=='' && editableValues.email!=='') {
    responseOfRoleValidation=false;
}
 return [responseOfNameValidation,responseOfEmailValidation,responseOfRoleValidation];
}

