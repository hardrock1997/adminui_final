import '../styles/Table.css'
export default function DeleteAll({searchQuery,setSearchQuery,setIsSelectedAll,setEmployees,page,setPage}) {

    function handleDeleteAll() {
        const afterDeleteAll = searchQuery.filter((employee)=>{
           return  employee.selected===false
        })
        afterDeleteAll.length===searchQuery.length ? alert('Select atleast one row to delete!') : alert('Selected rows deleted')
        if((page===5 || page===4 || page===3 || page===2) && afterDeleteAll.length!==searchQuery.length)setPage(1)
        setSearchQuery(afterDeleteAll)
        setIsSelectedAll(false)
        setEmployees(afterDeleteAll)
    }

    return (
        <div>
            <button className="delete_all" onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}