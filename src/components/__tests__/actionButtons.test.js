import ActionButtons from '../ActionButtons'
import {render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MOCK_DATA } from '../../../mocks/mockTableData'


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



test('should load with two buttons',()=>{
    render(<ActionButtons isEdit={false} searchQuery={mockData} editableValues={{}} setIsEdit={jest.fn()} id={1} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const actionButtons = screen.getAllByRole('button')
    expect(actionButtons).toHaveLength(2)
})

test('should have edit button by default on load',()=>{
    render(<ActionButtons isEdit={false} searchQuery={mockData} editableValues={{}} setIsEdit={jest.fn()} id={1} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const editButtonText = screen.getByText('Edit')
    expect(editButtonText).toBeInTheDocument()
})

test('should have delete button by default on load',()=>{
    render(<ActionButtons isEdit={false} searchQuery={mockData} editableValues={{}} setIsEdit={jest.fn()} id={1} setSearchQuery={jest.fn()} setEmployees={jest.fn()}/>)
    const deleteButtonText = screen.getByText('Delete')
    expect(deleteButtonText).toBeInTheDocument()
})

let props;
beforeEach(() => {
  props = {
    isEdit: false,
    searchQuery:mockData,
    editableValues: { name: '', email: '', role: '' },
    setEditableValues: jest.fn(),
    setIsEdit: jest.fn(),
    id: 1,
    setSearchQuery: jest.fn(),
    setEmployees: jest.fn()
  };
})

test('should call handleEdit when Edit button is clicked', () => {
    render(<ActionButtons {...props} />)
    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton);
    expect(props.setIsEdit).toHaveBeenCalledWith(true);
  })

  test('should call handleDeleteOrCancel when Delete button is clicked', () => {
    render(<ActionButtons {...props} />);
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(props.setSearchQuery).toHaveBeenCalledWith(mockData);
    expect(props.setEmployees).toHaveBeenCalledWith(mockData);
  })