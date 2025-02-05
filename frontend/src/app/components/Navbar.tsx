import Link from "next/link"

const Navbar = () => {

    return(
        <nav>
            <Link href="/">Readio</Link>
            <Link href="/ebooks">Search</Link>
            <Link href="/library">Library</Link>
        </nav>
    )
}

export default Navbar