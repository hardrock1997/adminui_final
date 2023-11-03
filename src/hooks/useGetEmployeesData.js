import {useEffect,useState} from 'react'
import { url,errorMessage } from '../utils/constants'

export default function useGetEmployeesData() {
    const [employees,setEmployees] = useState([])
    const [searchQuery,setSearchQuery] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        async function getData() {
            try {
                setLoading(true)
                const response = await fetch(url)
                if(response.ok===true) {
                    const data = await response.json()
                    if(data)setLoading(false)
                    const withSelectedProp = data.map((ele)=>{
                        return {...ele,selected:false,edit:false}
                    })
                    console.log(withSelectedProp)
                    setEmployees(withSelectedProp)
                    setSearchQuery(withSelectedProp)
                }
               else throw Error(errorMessage)
            } 
            catch(e) {
                console.log(error)
                setError(()=>{
                    throw e
                })
            }
        }
        getData()
    },[error])
    return [employees,searchQuery,loading,setSearchQuery,setEmployees]
}