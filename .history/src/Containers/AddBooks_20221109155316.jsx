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
                        <form class="row g-3"></form>
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                            </div>
                        </form>
                        <div className="form-group">
                            <button className="btn btn outline-secondary mt-3">
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddBooks;