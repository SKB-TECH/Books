import { React, useState } from 'react';

const AddBooks = () => {

    const initialState = {
        titre: '',
        auteur: ''
    }
    const [Data, setData] = useState(initialState);
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
                            <input type="password"
                             className="form-control ml-3" id="inputPassword2" placeholder="Titre du livre" />
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

            <div className='container' style={{ minHeight: '200px' }}>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='list-group'>
                            <li className='list-group-item list-group-item-light d-flex justify-content-between'>
                                Livre enregistrer avec succees
                            </li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger mt-2 '>Effacer le livre</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddBooks;