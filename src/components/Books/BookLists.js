import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../../UIElements/Card';
import './BookLists.css'
function BookLists(props) {
    return (
        <div className="books">
            {
                props.books.map((book, i) => {
                    return (
                        <div className="cards" key={book.name + book.author + i}>
                            <Card >
                                <Link to={`/books/${book.type}/b${i}`}>
                                    <div className="book_image">
                                        <img src={book.img} alt={book.name} />
                                    </div>
                                    <header>
                                        <h5>{book.name}</h5>
                                        <p>{book.description}</p>
                                    </header>
                                </Link>
                            </Card>
                        </div>
                    )
                }

                )
            }
        </div >
    )
}

export default BookLists;