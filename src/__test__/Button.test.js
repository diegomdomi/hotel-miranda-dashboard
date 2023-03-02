import React from 'react'
import { render,  screen } from '@testing-library/react';
import ButtonStyled from '../Components/ButtonStyled';

describe("button Submit form",() => {
    test('check if button is in DOM', () =>{
        render(<ButtonStyled/>)
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test("button color props",() => {
        const color ='red'
        render(
      <ButtonStyled  color={color}></ButtonStyled>
    );
    const MyButtonRoots = screen.getByRole('button')
    const style = window.getComputedStyle(MyButtonRoots)

    expect(style.cursor).toBe('pointer')
    expect(style.color).toBe(color)
    
});
test("checking message props", ()=>{
    const testMessage = 'Test Message';
    
    render(<ButtonStyled>{testMessage}</ButtonStyled>)
    expect(screen.getByText(testMessage)).toBeInTheDocument()
    
    })
test("change background-color props", ()=>{
    const background = 'green';
    
    render(<ButtonStyled background={background}></ButtonStyled>)

    const MyButtonRoots = screen.getByRole('button')
    const style = window.getComputedStyle(MyButtonRoots)

    expect(style.backgroundColor).toBe(background)
    })
    
})