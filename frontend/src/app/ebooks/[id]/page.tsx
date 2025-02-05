import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getBookData(id: string) {
  const res = await fetch(`https://gutendex.com/books/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BookPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const book = await getBookData(id);

  if (!book) return notFound();

  return (
    <div>
      <h1 className="font-bold text-3xl">{book.title}</h1>
        <Image src={book.formats["image/jpeg"]} alt={book.title} width={200} height={300} />
      <h2 className="font-bold">Summary</h2>
        <ul>
            {
                book.summaries.map((summary, index) => (
                    <li key={index}>{summary}</li>
                ))
            }
        </ul>
      <h2 className="font-bold">Authors</h2>
        <ul>
            {book.authors.map((author) => (
            <li key={author.name}>{author.name}</li>
            ))}
        </ul>
    </div>
  );
}
