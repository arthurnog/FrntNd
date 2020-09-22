import React from 'react';

export default function Header({ title, children }) {
    return(
        <Header>
            <h1>{title}</h1>

            {children}
        </Header>
    );
}