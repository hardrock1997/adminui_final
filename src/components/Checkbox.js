import '../styles/Table.css'

export default function Checkbox

({checkedStatus,
id,
filteredData,
setFilteredData
}) {

    function handleCheckboxChange(id) {
        const array=filteredData.filter((employee)=>{
            if(id===employee.id && employee.selected===true) {
                employee.selected=false
                return employee
            }
            else if(id===employee.id && employee.selected===false) {
                employee.selected=true
                return employee
            }
            else return employee
        })
        setFilteredData(array)
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
    )
}