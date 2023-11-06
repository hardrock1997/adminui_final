import '../styles/Table.css'

const DeleteAll = ({filteredData,setFilteredData,setIsSelectedAll,currentPage,setPage})=>{

function handleDeleteAll() {
    const afterDeleteAll = filteredData.filter((employee)=>!employee.selected)

    afterDeleteAll.length===filteredData.length ? alert('Select atleast one row to delete!') : alert('Selected rows deleted')
        if(currentPage>1 && afterDeleteAll.length!==filteredData.length) {
            setPage(1)
        }
    setFilteredData(afterDeleteAll)
    setIsSelectedAll(false)
    }

return (
    <div>
        <button className="delete_all" onClick={handleDeleteAll}>Delete All</button>
    </div>
    )
}

export default DeleteAll