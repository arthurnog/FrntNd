import React from 'react';
import { render } from 'react-dom';

export default function Header({ title, children }) {
    return(
        <Header>
            <h1>{title}</h1>

            {children}
        </Header>
    );
}