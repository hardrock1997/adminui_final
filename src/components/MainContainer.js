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

    const [page,setPage]=useState(1)
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
                        page={page}
                        setPage={setPage}
                        />
                    </div>
                    <div>
                    <table>
                        <SelectAllCheckBox
                        isSelectedAll={isSelectedAll}
                        setIsSelectedAll={setIsSelectedAll}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        page={page}
                        />
                        <TableData
                        page={page}
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
                        page={page}
                        setPage={setPage}
                        />
                        <Pagination
                        page={page}
                        setPage={setPage}
                        searchQuery={searchQuery}
                       />
                    </div>
                    </>
                ) }
        </>
    )
}


