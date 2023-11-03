import ActionButtons from '../ActionButtons'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('should load with two buttons',()=>{
    render(<ActionButtons/>)
    const actionButtons = screen.getAllByRole('button')
    expect(actionButtons).toHaveLength(2)
})
