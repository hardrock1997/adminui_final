import Checkbox from '../Checkbox'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('should have a checkbox on load',()=>{
    render(<Checkbox/>)
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()
})