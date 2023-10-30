import '../styles/Table.css'

export default function Checkbox

({checkedStatus,
id,
searchQuery,
setSearchQuery
}) {

    function handleCheckboxChange(id) {
        const array=searchQuery.filter((employee)=>{
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
        setSearchQuery(array)
    }
    
    return (
       <>
         <td>
           <input
                type="checkbox"
                checked={checkedStatus}
                onChange={()=>handleCheckboxChange(id)}
            />
         </td>
       </>
    )
}