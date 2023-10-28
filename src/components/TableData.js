import {perPageLimit} from '../utils/constants'
import React from 'react'
import '../styles/Table.css'
import {useState} from 'react'
import Edit from './Edit'
import ActionButtons from './ActionButtons'
import Checkbox from './Checkbox'


export default function TableData

({page,
searchQuery,
setSearchQuery,
setEmployees
}) {

    const [isEdit,setIsEdit] = useState(false)
    const [editableValues,setEditableValues] = useState({
        name:'',
        email:'',
        role:''
    })

    return (

                <tbody>
                   {
                        searchQuery.length>0  ? (
                           searchQuery.slice(page*perPageLimit-perPageLimit,page*perPageLimit).map((employee)=>{
                                return (
                                    <React.Fragment key={employee.id}>
                                    <tr className={employee.selected===true ? 'row_select' : ''}>
                                    <Checkbox
                                    checkedStatus={employee.selected}
                                    id={employee.id}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                        />
                                  {
                                    employee.edit===false ? (
                                    <>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.role}</td>
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
                                    searchQuery={searchQuery}
                                    editableValues={editableValues}
                                    setEditableValues={setEditableValues}
                                    setIsEdit={setIsEdit}
                                    id={employee.id}
                                    setSearchQuery={setSearchQuery}
                                    setEmployees={setEmployees}
                                    />
                                    </tr>
                                    </React.Fragment>
                                )
                            })
                        ) : 
                        (<tr><td className='nothing_found_text'>Nothing found or All employee records are deleted!!</td></tr> )

                    }
                </tbody>
    )
}