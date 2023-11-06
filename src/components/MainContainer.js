import {useState,useEffect} from "react"
import Search from "./Search"
import TableData from "./TableData"
import React from "react"
import Pagination from "./Pagination"
import DeleteAll from "./DeleteAll"
import SelectAllCheckBox from "./SelectAllCheckBox"
import useGetEmployeesData from "../hooks/useGetEmployeesData"
import '../styles/Table.css'

const  MainContainer = ()=> {

 const [currentPage,setPage]=useState(1)
 const [isSelectedAll,setIsSelectedAll] = useState(false)
 const [employees,loading] = useGetEmployeesData()
 const [filteredData,setFilteredData] = useState([])

 useEffect(()=>{
    setFilteredData([...employees]);
 },[employees])

 const loadingElement = <h1 className="loading_text">Loading...</h1>
 const tableContent =
    <>   
    <Search
        setFilteredData={setFilteredData}
        employees={employees}
        currentPage={currentPage}
        setPage={setPage}
    />
    <table className="responsive">
        <SelectAllCheckBox
            isSelectedAll={isSelectedAll}
            setIsSelectedAll={setIsSelectedAll}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            currentPage={currentPage}
        />
        <TableData
            currentPage={currentPage}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
        />
    </table>
        <DeleteAll
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            setIsSelectedAll={setIsSelectedAll}
            currentPage={currentPage}
            setPage={setPage}
        />
        <Pagination
            currentPage={currentPage}
            setPage={setPage}
            filteredData={filteredData}
    />
</>

return loading ? loadingElement : tableContent

}

export default MainContainer


