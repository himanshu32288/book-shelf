import React from 'react'
import { useParams } from 'react-router-dom';
import BookLists from './BookLists';
function Bookitems() {
    const books = [{
        name: "Fundamental of physics",
        author: "AK JHA",
        description: "This book is intended as a textbook for undergraduate students of physics and applied physics. It includes thorough coverage of optics, mechanics, relativistic mechanics, lasers, optical fibres and holography. ",
        img: "https://images-na.ssl-images-amazon.com/images/I/41GNRTHPuXL._SX370_BO1,204,203,200_.jpg",
        type: "Physics"
    },
    {
        name: "Engineering mathematics",
        author: "HC TANEJA",
        description: "The text broadly divided in seven sections contains 26 chapters. The text covers topics on solid Geometry, infinite series, differential and integral calculus etc",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51X6G-dFXDL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
        type: "Maths"
    },
    {
        name: "Fundamental of physics",
        author: "AK JHA",
        description: "This book is intended as a textbook for undergraduate students of physics and applied physics. It includes thorough coverage of optics, mechanics, relativistic mechanics, lasers, optical fibres and holography",
        img: "https://images-na.ssl-images-amazon.com/images/I/41GNRTHPuXL._SX370_BO1,204,203,200_.jpg",
        type: "Physics"
    },
    {
        name: "THE SPRING OF A LION",
        author: "H. Rider Haggard",
        description: "The story which is narrated in the following pages came to me from the lips of my old friend Allan Quatermain, or Hunter Quatermain, as we used to call him in South Africa",
        img: "https://www.gutenberg.org/cache/epub/66915/pg66915.cover.medium.jpg",
        type: "Story"
    }
    ];
    const type = useParams().type;
    let query_books = books.filter((book, i) => {
        return book.type === type || !type;
    });
    return (
        <BookLists key={type} books={query_books} />
    )
}

export default Bookitems;
