import SelectAllCheckBox from '../SelectAllCheckBox'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('Select all rows in a page checkbox should be loaded',()=>{
    render(<SelectAllCheckBox/>)
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()
})
test('Name table heading should be loaded',()=>{
    render(<SelectAllCheckBox/>)
    const nameTableHeading = screen.getByText('Name')
    expect(nameTableHeading).toBeInTheDocument()
})
test('Email table heading should be loaded',()=>{
    render(<SelectAllCheckBox/>)
    const emailTableHeading = screen.getByText('Email')
    expect(emailTableHeading).toBeInTheDocument()
})
test('Role table heading should be loaded',()=>{
    render(<SelectAllCheckBox/>)
    const roleTableHeading = screen.getByText('Role')
    expect(roleTableHeading).toBeInTheDocument()
})
test('Actions table heading should be loaded',()=>{
    render(<SelectAllCheckBox/>)
    const actionsTableHeading = screen.getByText('Actions')
    expect(actionsTableHeading).toBeInTheDocument()
})