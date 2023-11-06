import '../styles/Table.css'
import { perPageLimit } from '../utils/constants'

const SelectAllCheckBox = ({isSelectedAll,setIsSelectedAll,filteredData,setFilteredData,currentPage})=>{


function handleAllCheckboxChange() {
    setIsSelectedAll(!isSelectedAll);
    const selectedEmployees=filteredData.slice(currentPage*perPageLimit-perPageLimit,currentPage*perPageLimit);
    for(let i=0;i<selectedEmployees.length;++i) {
        const id=selectedEmployees[i].id;
         for(let i=0;i<filteredData.length;++i) {
            if(filteredData[i].id===id) {
                filteredData[i].selected=!isSelectedAll;
            }
        }
    }
    setFilteredData([...filteredData]); 
    }

return (
    <thead>
        <tr>
        <th> 
            <input
                 type="checkbox"
                 checked={isSelectedAll}
                 onChange={handleAllCheckboxChange}
            />
        </th>
        <th>Name</th> 
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
        </tr>
    </thead>
)
}

export default SelectAllCheckBox