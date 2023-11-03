import DeleteAll from '../DeleteAll'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('should load a  delete all button',()=>{
    render(<DeleteAll/>)
   const deleteAllButton=screen.getByRole('button')
   expect(deleteAllButton).toBeInTheDocument()
})

test('should have the correct text for the delete all button',()=>{
    render(<DeleteAll/>)
    const buttonText = screen.getByText('Delete All')
    expect(buttonText).toBeInTheDocument()
})