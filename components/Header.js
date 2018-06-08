import  Link from 'next/link'

const linkStye = {
    marginRight: 15
};

const Header =() =>(
    <div>
        <Link href="/">
            <a style={linkStye}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStye}>About</a>
        </Link>
    </div>
);

export default Header;