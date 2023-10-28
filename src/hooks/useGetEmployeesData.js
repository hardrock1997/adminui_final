import {useEffect,useState} from 'react'
import { url } from '../utils/constants'

export default function useGetEmployeesData() {
    const [employees,setEmployees] = useState([])
    const [searchQuery,setSearchQuery] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        async function getData() {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                if(data)setLoading(false)
                const withSelectedProp = data.map((ele)=>{
                    return {...ele,selected:false,edit:false}
                })
                setEmployees(withSelectedProp)
                setSearchQuery(withSelectedProp)
            } 
            catch(error) {
                // error handling is remaining
            }
        }
        getData()
    },[])
    return [employees,searchQuery,loading,setSearchQuery,setEmployees]
}