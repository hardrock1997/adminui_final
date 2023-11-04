import TableData from '../TableData'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MOCK_DATA } from '../../../mocks/mockTableData'
import { perPageLimit } from '../../utils/constants'

jest.mock('../Checkbox',()=>()=><div data-testid='mock-checkbox'></div>)
jest.mock('../ActionButtons', () => () => <div data-testid="mock-action-buttons"></div>)

let mockData
global.fetch = jest.fn(()=>{
   return  Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA)
    }
})
})
global.fetch().then((res)=>{
   return res.json()
}).then((data)=>{
    mockData=data
})
test('should render the rows according to the per page limit of pagination on first load',()=>{
    render(<TableData currentPage={1} searchQuery={mockData} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const rows = screen.getAllByTestId('tableData')
    expect(rows.length).toBe(perPageLimit)
})

test('should render the empty table text when no rows are rendered',()=>{
    render(<TableData currentPage={1} searchQuery={[]} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const text = screen.getByText('Nothing found or All employee records are deleted!!')
    expect(text).toBeInTheDocument()
})
