import {useState} from "react"
import Search from "./Search"
import TableData from "./TableData"
import React from "react"
import Pagination from "./Pagination"
import DeleteAll from "./DeleteAll"
import SelectAllCheckBox from "./SelectAllCheckBox"
import useGetEmployeesData from "../hooks/useGetEmployeesData"
import '../styles/Table.css'

export default function MainContainer() {

    const [currentPage,setPage]=useState(1)
    const [isSelectedAll,setIsSelectedAll] = useState(false)
    const [employees,searchQuery,loading,setSearchQuery,setEmployees] = useGetEmployeesData()
  
    return (
        <>
            {
               loading===true ? (<h1 className="loading_text">Loading...</h1>) 
                :
                (
                    <>
                    <div>
                        <Search
                            setSearchQuery={setSearchQuery}
                            employees={employees}
                            page={currentPage}
                            setPage={setPage}
                        />
                    </div>
                    <div>
                    <table className="responsive">
                        <SelectAllCheckBox
                            isSelectedAll={isSelectedAll}
                            setIsSelectedAll={setIsSelectedAll}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            currentPage={currentPage}
                        />
                        <TableData
                            currentPage={currentPage}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            setEmployees={setEmployees}
                        />
                    </table>
                        <DeleteAll
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            setIsSelectedAll={setIsSelectedAll}
                            setEmployees={setEmployees}
                            currentPage={currentPage}
                            setPage={setPage}
                        />
                        <Pagination
                            currentPage={currentPage}
                            setPage={setPage}
                            searchQuery={searchQuery}
                       />
                    </div>
                    </>
                ) }
        </>
    )
}


