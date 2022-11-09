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

                    <form className="form-inline justify-content-center row g-3">
                        <div className="col-auto">
                            <input type="password" className="form-control ml-3" id="inputPassword2" placeholder="Titre du livre" />
                        </div>
                        <div className="col-auto">
                            <input type="password" className="form-control ml-3" id="inputPassword2" placeholder="Auteur du livre" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" className="btn btn-secondary mb-3">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='container' style={}}>

            </div>
        </main>
    );
};

export default AddBooks;