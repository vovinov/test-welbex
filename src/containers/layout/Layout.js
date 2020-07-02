import React from 'react';

import './layout.css';

function Layout({children}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Layout
