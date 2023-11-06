import '../styles/Pagination.css'

const Pagination = ({currentPage,setPage,filteredData})=>{

    function handlePrevPage() {
        setPage((prev)=>prev-1)
    }
    function handleNextPage() {
        setPage((prev)=>prev+1)
    }
    function handleNumberClick(selectedPage) {
        setPage(selectedPage)
    }
    
return (
    <div>
        <ul className="pagination_btn">
            {currentPage>1 && <li onClick={handlePrevPage}>Prev</li>}
                {
                    [...Array(Math.ceil(filteredData?.length/10))].map((_,i)=>{
                        return <li key={i+1} onClick={()=>handleNumberClick(i+1)} className={currentPage===i+1 ? 'selected_page' : ''} >{i+1}</li>
                    })
                }
                {currentPage<Math.ceil(filteredData.length/10) && <li onClick={handleNextPage}>Next</li>}
            </ul>
        </div>
    )
}

export default Pagination