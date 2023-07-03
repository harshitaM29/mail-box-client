import SignIn from './SignIn';
import {render, screen} from '@testing-library/react'

describe('SignIn component', () => {
    test('renders email input', () => {
        render(<SignIn />)
        const labelElement = screen.getByLabelText('Email', {selector:'input'})
    });
    test('renders password input', () => {
        render(<SignIn />)
        const labelElement = screen.getByLabelText('Password', {selector:'input'})
    });
  
})