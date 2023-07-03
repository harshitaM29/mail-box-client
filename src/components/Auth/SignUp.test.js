import SignUp from './SignUp';
import {render, screen} from '@testing-library/react'

describe('SignUp component', () => {
    test('renders email input', () => {
        render(<SignUp />)
        const labelElement = screen.getByLabelText('Email', {selector:'input'})
    });
    test('renders password input', () => {
        render(<SignUp />)
        const labelElement = screen.getByLabelText('Password', {selector:'input'})
    });
    test('renders confirm password input', () => {
        render(<SignUp />)
        const labelElement = screen.getByLabelText('Confirm Password', {selector:'input'})
    })
})