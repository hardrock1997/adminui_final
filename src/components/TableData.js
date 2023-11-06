import {perPageLimit} from '../utils/constants'
import React from 'react'
import '../styles/Table.css'
import {useState} from 'react'
import Edit from './Edit'
import ActionButtons from './ActionButtons'
import Checkbox from './Checkbox'

const TableData = ({currentPage,filteredData,setFilteredData,setEmployees})=>{
const [isEdit,setIsEdit] = useState(false)
const [editableValues,setEditableValues] = useState({
    name:'',
    email:'',
    role:''
})

const noRowText = (
<tr>
    <td className='nothing_found_text'>
        Nothing found or All employee records are deleted!!
    </td>
</tr>
)

const tableData = filteredData.slice(currentPage*perPageLimit-perPageLimit,currentPage*perPageLimit).map((employee)=> (
        <tbody key={employee.id}>
            <tr className={!employee.selected ? '' : 'row_select'} data-testid='tableData'>
                <Checkbox
                    checkedStatus={employee.selected}
                    id={employee.id}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                />
                {
                 !employee.edit ? (
                    <>
                     <td data-label='Name'>{employee.name}</td>
                     <td data-label='Email'>{employee.email}</td>
                     <td data-label='Role'>{employee.role}</td>
                    </>
                     ) : 
                     (
                     <Edit
                         editableValues={editableValues}
                         setEditableValues={setEditableValues}
                     />
                     )
                   }
                <ActionButtons
                    isEdit={isEdit}
                    filteredData={filteredData}
                    editableValues={editableValues}
                    setEditableValues={setEditableValues}
                    setIsEdit={setIsEdit}
                    id={employee.id}
                    setFilteredData={setFilteredData}
                    setEmployees={setEmployees}
                />
            </tr>
        </tbody>
    ))
    
  return filteredData.length > 0 ? tableData : noRowText

}

export default TableData