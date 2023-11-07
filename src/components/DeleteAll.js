import '../styles/Table.css'

const DeleteAll = ({filteredData,setFilteredData,setIsSelectedAll,currentPage,setPage})=>{

// delete all the rows that have been selected
function handleDeleteAll() {
    const afterDeleteAll = filteredData.filter((employee)=>!employee.selected);
    if(afterDeleteAll.length===filteredData.length) {
        alert('Select atleast one row to delete');
    }
    if(currentPage>1 && afterDeleteAll.length!==filteredData.length) {
            setPage(1);
    }
    setFilteredData(afterDeleteAll);
    setIsSelectedAll(false);
    }

return (
    <div>
        <button className="delete_all" onClick={handleDeleteAll}>Delete All</button>
    </div>
    )
}

export default DeleteAll;