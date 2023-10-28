import '../styles/Search.css'

export default function Search

({
    setSearchQuery,
    employees,
    page,
    setPage
}) {

    function handleSearch(e) {
        const val=e.target.value
        if(e.target.value==='') {
            setSearchQuery(employees)
            return 
        }
        if(page>1) {
            setPage(1)
        }
        const filteredEmployees = employees.filter((employee)=>{
                return employee.name.toLowerCase().includes(val) || employee.email.toLowerCase().includes(val) || employee.role.toLowerCase().includes(val)
            })
            setSearchQuery(filteredEmployees)
    }

    return (
        <div className='search_container'>
            <input 
            type="text"
            placeholder="Search by name, email or role"
            className="search"
            onChange={handleSearch}
            />
        </div>
    )

}