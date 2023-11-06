export const perPageLimit=10;
export const url = `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`;
export const errorMessage = <>Could not fetch the data!'</>
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validateRole=(role) =>{
 if(role==='admin' || role==='member') {
    return true;
} else {
    return false;
}}

export const validateEmail=(email) =>{
 if(emailRegex.test(email)) {
    return true;
} else {
    return false;
}}

export const validateName = (name)=>{
 if(name.length>1) {
    return true
 } else {
    return false
 }}