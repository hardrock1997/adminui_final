import Search from "../Search"
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MOCK_DATA } from "../../../mocks/mockTableData"
import MainContainer from "../MainContainer"
import TableData from "../TableData"
import { perPageLimit } from "../../utils/constants"

let mockData
global.fetch = jest.fn(()=>{
   return  Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA)
    }
})
})

beforeEach(()=>{
    global.fetch().then((res)=>{
        return res.json()
     }).then((data)=>{
         mockData=data
     })
})

jest.mock('../../hooks/useGetEmployeesData',()=>({
    __esModule: true,
  default: () => ([
    // employees
    [],
    // searchQuery
    "",
    // loading
    false,
    // setSearchQuery
    jest.fn(),
    // setEmployees
    jest.fn()
  ])
}))

test('Should load search input',()=>{
    render(<Search/>) 
    const textBox= screen.getByRole('textbox')
    expect(textBox).toBeInTheDocument()
})

test('Should have the correct placeholder',()=>{
    render(<Search/>)
    const placeHolderText = screen.getByPlaceholderText('Search by name, email or role')
    expect(placeHolderText).toBeInTheDocument()
})

test('should filter rows properly if input is admin on initial load',()=>{
   render(<MainContainer/>)
   const searchInput = screen.getByTestId('searchInput')
   fireEvent.change(searchInput,{target:{value:'admin'}})
   mockData=mockData.filter((employee)=>employee.role.toLowerCase().includes('admin'))
   render(<TableData currentPage={1} searchQuery={mockData} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
   const rows = screen.getAllByTestId('tableData')
   expect(rows.length).toBe(9)
})

test('should filter rows properly if input is member on initial load',()=>{
    render(<MainContainer/>)
    const searchInput = screen.getByTestId('searchInput')
    fireEvent.change(searchInput,{target:{value:'member'}})
    mockData=mockData.filter((employee)=>employee.role.toLowerCase().includes('member'))
    mockData=mockData.slice(1*perPageLimit-perPageLimit,perPageLimit*1)
    render(<TableData currentPage={1} searchQuery={mockData} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const rows = screen.getAllByTestId('tableData')
    expect(rows.length).toBe(10)
 })

