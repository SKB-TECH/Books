import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div className='d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white'>
                <h4 className='mr-md-auto'>
                    <a href="/" className='text-decorat'>BOOKS</a>
                </h4>
            </div>
        </header>
    );
};

export default Navbar;