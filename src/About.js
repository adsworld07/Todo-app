import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
export default function About() {
    return (
        <div>
            <h2 className=" my-3">Hello, I'm Aditya bastawad.</h2>
            <h3 className='text-success'>This is the Todo app built with React</h3>
            <div className='contaier my-3'><h4>Connect Me</h4>
        <SocialIcon url="https://github.com/adsworld07" />
        <SocialIcon url="https://www.linkedin.com/in/aditya-bastawad-0695a8192/" />
        <SocialIcon url="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCFSxBtZnbhngPKVdbrNzGJSTlMXTZfTdFbgkpBrhVZXzQmcjkGdNcqtdtqsTdbQBXbkVV" />
        <SocialIcon url="https://twitter.com/AdityaBastawad" />
        <SocialIcon url="https://www.instagram.com/____aditya.07/" /></div>
        </div>
    )
}
