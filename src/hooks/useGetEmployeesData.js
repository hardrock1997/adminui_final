import {useEffect,useState} from 'react'
import { url } from '../utils/constants'

export default function useGetEmployeesData() {
    const [employees,setEmployees] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

useEffect(()=>{
    const fetchData = async() =>{
        try {
            setLoading(true)
            const response = await fetch(url)
            if(!response.ok) {
                throw Error(response.status+' '+response.statusText)
            }
            const data = await response.json()
            if(data) {
                const employeeDataWithExtraProperties = data.map((ele)=>{
                    return {...ele,selected:false,edit:false,nameError:false,emailError:false,roleError:false}
                })
                setEmployees(employeeDataWithExtraProperties)
            }     
             
        } catch(e) {
            setError(()=>{
                throw e
            })
        } finally {
            setLoading(false)
        }
    }
    // fetches the employees data from the server
    fetchData()

    },[error])

    return [employees,loading]
}