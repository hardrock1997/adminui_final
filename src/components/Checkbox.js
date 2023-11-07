import '../styles/Table.css'

const Checkbox = ({checkedStatus,id,filteredData,setFilteredData})=>{

// toggle the checked status of the checkbox of a row
function handleCheckboxChange(id) {
    const employeesWithToggledCheckbox = filteredData.map(employee=> {
    if(id===employee.id) {
        return {...employee, selected:!employee.selected}
    }
    return employee
    })
    setFilteredData(employeesWithToggledCheckbox)
}

return (
<>
    <td>
        <input
            type="checkbox"
            checked={checkedStatus}
            data-testid='mock-checkbox'
            onChange={()=>handleCheckboxChange(id)}
        />
    </td>
</>
)}

export default Checkbox;