import '../styles/Search.css'

const Search = ({setFilteredData,employees,currentPage,setPage})=>{

        function handleSearch(e) {
        const val=e.target.value;
        if(e.target.value==='') {
            setFilteredData(employees);
            return 
        }
        if(currentPage>1) {
            setPage(1);
        }
        const filteredEmployees = employees.filter((employee)=>{
                return employee.name.toLowerCase().includes(val) || employee.email.toLowerCase().includes(val) || employee.role.toLowerCase().includes(val);
            })
        setFilteredData(filteredEmployees);
    }

return (
   <input 
     type="text"
     placeholder="Search by name, email or role"
     className="search"
     onChange={handleSearch}
     data-testid='searchInput'
   />
)
}

export default Search;