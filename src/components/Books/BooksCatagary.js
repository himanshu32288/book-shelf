import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../../UIElements/Card';
import './BooksCatagary.css'
export default function BooksCatagary() {
    const book_catagory = ["Maths", "Story", "Physics", "Biology", "Comics", "Lorem ipsum"];
    return (
        <div className="books-catagory" >
            {
                book_catagory.map((catagory) => {
                    return (
                        <div className="cards-catagory" key={catagory}>
                            <Card>
                                <Link to={`books/${catagory}`}>
                                    <div className="catagory">
                                        <h3>{catagory}</h3>
                                    </div>
                                </Link>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
