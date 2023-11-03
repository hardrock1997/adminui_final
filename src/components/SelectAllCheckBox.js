import '../styles/Table.css'
import { perPageLimit } from '../utils/constants'
export default function SelectAllCheckBox({isSelectedAll,setIsSelectedAll,searchQuery,setSearchQuery,currentPage}) {
    function handleAllCheckboxChange() {
        setIsSelectedAll(!isSelectedAll)
        const selectedEmployees=searchQuery.slice(currentPage*perPageLimit-perPageLimit,currentPage*perPageLimit)
        for(let i=0;i<selectedEmployees.length;++i) {
            const id=selectedEmployees[i].id
            for(let i=0;i<searchQuery.length;++i) {
                if(searchQuery[i].id===id) {
                    searchQuery[i].selected=!isSelectedAll
                }
            }
        }
        setSearchQuery([...searchQuery])  
    }
    return (
                    <thead>
                            <tr>
                                <th> <input
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