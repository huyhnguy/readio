const BookThumbnail = ({ book, index }) => {
    return (
        <article key={index}>
            <img src={book.formats["image/jpeg"]} alt="" />
            <h3>{book.title}</h3>
        </article>
    )
}

export default BookThumbnail;