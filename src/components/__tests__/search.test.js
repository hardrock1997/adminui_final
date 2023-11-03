import Search from "../Search"
// import TableData from "../TableData"
// import { MOCK_DATA } from "../../../mocks/mockTableData"
import {render,screen} from '@testing-library/react'
// import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom'

// global.fetch = jest.fn(()=>{
//     return Promise().resolve({
//         json:()=>{
//             return Promise.resolve(MOCK_DATA)
//         }
//     })
// })

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

// test('should filter',()=>{
//     render(<Search/>)
//     const searchInput = screen.getByTestId('searchInput')
//     console.log(searchInput)
//     fireEvent.change(searchInput,{target:{value:'admin'}})

// })
