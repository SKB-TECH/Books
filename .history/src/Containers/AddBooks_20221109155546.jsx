import React from 'react';

const AddBooks = () => {
    return (
        <main role="main">
            <div className='jumbotron jumbotron-fluid'>
                < className='container text-center'>
                <h1 className='display-4'>
                    BOOKS
                </h1>
                <p>
                    Ajouter un livre dans votre biobliotheque
                </p>

                <form className="form-inline justify-content-center row g-3">
                    <div className="col-auto">
                        <label for="inputPassword2" classNmae="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddBooks;