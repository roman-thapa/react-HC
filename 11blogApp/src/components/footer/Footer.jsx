import React from 'react';
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        }
    ];

    return (
        <footer className='py-6 bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='inline-block px-4 py-2 hover:bg-blue-100 rounded-full'
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null)}
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;
