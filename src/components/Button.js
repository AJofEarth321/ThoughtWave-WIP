import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//defines STYLES array utilized by Button using css classes.
const STYLES = ['btn--primary', 'btn--outline'];

//defines SIZES array utilized by Button using css classes.
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    //checks button style and defaults to first position of defined STYLES array if no style is given
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    //checks button size and defaults to first position of defined SIZES array if no size is given
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/contact-us' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}