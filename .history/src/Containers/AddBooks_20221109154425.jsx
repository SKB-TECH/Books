import React from 'react';

const AddBooks = () => {
    return (
        <main role="main">
            <div className='jumbotron jumbotron-fluid'>
                <div className='container text-center'>
                    <h1 className='display-4'>
                        BOOKS
                    </h1>
                    <p>
                        Ajouter un livre dans votre biobliotheque
                    </p>

                    <form action="" className='form-inline justify-content-center'>
                        <div className='form-group'>
                            <input type="text"
                                className='form-control'
                                placeholder='Le titre du livre'
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddBooks;