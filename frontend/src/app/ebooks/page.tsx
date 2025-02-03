'use client'

import { useState } from "react";
import BookThumbnail from "../components/BookThumbnail";

export default function Page() {
    const [value, setValue] = useState('');
    const [books, setBooks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);

        const searchParameter = value.replace(/ /gi, '%20');
        const url = 'https://gutendex.com/books/?search=' + searchParameter;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setBooks(data.results)
            })
            .catch(error => console.log(error));
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <h1>Ebooks Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
            </form>
            <main>
                <h2>Search Results</h2>
                { books.length > 0 && books.map((book, index) => {
                    return (                    
                        <BookThumbnail index={index} book={book} />
                    )
                })}
            </main>
        </>
    )
}