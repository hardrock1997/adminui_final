import '../styles/Pagination.css'
export default function Pagination

({page,
setPage,
searchQuery
}) {

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
            {page>1 && <li onClick={handlePrevPage}>Prev</li>}
                {
                    [...Array(Math.ceil(searchQuery.length/10))].map((_,i)=>{
                        return <li key={i+1} onClick={()=>handleNumberClick(i+1)} className={page===i+1 ? 'selected_page' : ''} >{i+1}</li>
                    })
                }
                {page<Math.ceil(searchQuery.length/10) && <li onClick={handleNextPage}>Next</li>}
            </ul>
        </div>
    )
}