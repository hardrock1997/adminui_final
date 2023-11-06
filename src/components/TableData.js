import {perPageLimit} from '../utils/constants'
import React from 'react'
import '../styles/Table.css'
import {useState,useEffect} from 'react'
import Edit from './Edit'
import ActionButtons from './ActionButtons'
import Checkbox from './Checkbox'

const TableData = ({currentPage,filteredData,setFilteredData})=>{
const [isEdit,setIsEdit] = useState(false);
const [editableValues,setEditableValues] = useState({
    name:'',
    email:'',
    role:''
});

useEffect(()=>{
    filteredData.map((employee)=>{
        employee.nameError=false;
        employee.roleError=false;
        employee.emailError=false;
        return employee;
    })
})

const noRowText = (
<tr>
    <td className='nothing_found_text'>
        Nothing found or All employee records are deleted!!
    </td>
</tr>
);

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
                     {employee.nameError ? <td style={{color:'red'}}>{employee.name}</td> : <td data-label='Name'>{employee.name}</td>}
                     {employee.emailError ? <td style={{color:'red'}}>{employee.email}</td>: <td data-label='Email'>{employee.email}</td>}
                     {employee.roleError ? <td style={{color:'red'}}>{employee.role}</td> : <td data-label='Role'>{employee.role}</td>}
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
                />
            </tr>
        </tbody>
    ))
    
  return filteredData.length > 0 ? tableData : noRowText

}

export default TableData;