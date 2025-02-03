import Image from "next/image";

const BookThumbnail = ({ book }) => {
    return (
        <article className="w-[234px] border border-gray-400 p-4">
            <Image src={book.formats["image/jpeg"]} alt="" width={200} height={300} className=""/>
            <h3>{book.title}</h3>
        </article>
    )
}

export default BookThumbnail;