import Image from "next/image";
import Link from "next/link";

const BookThumbnail = ({ book }) => {
    return (
        <article className="w-[234px] border border-gray-400 p-4">
            <Link href={`/ebooks/${book.id}`}>
                <Image src={book.formats["image/jpeg"]} alt="" width={200} height={300} className=""/>
                <h3>{book.title}</h3>
            </Link>

        </article>
    )
}

export default BookThumbnail;