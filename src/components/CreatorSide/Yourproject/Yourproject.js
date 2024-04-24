import React, { useState, useEffect } from 'react';
import Liveprojects from './Liveprojects'; 
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useHistory } from 'react-router-dom';
import Application from './Application';
import Fundsrelease from './Fundsrelease';
import Settings from './Settings';
import Updates from './Updates';
import Projectchange from './Projectchange';
import Categories from './Categories';

const Yourproject = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const history = useHistory();

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab) {
            setActiveTab(storedTab);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
        if (activeTab !== 'logout') {
            history.push(`/yourproject/${activeTab}`);
        } else {
            history.push('/');
        }
    }, [activeTab, history]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <Header />
        <section className='mainproject'>
            <div className="custom-container">
                <div className='mainprojectparent'>
                    <div className='left'>
                        <div className='leftcard'>
                            <a
                                onClick={() => handleTabClick('projects')}
                                className={activeTab === 'projects' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M9.15761 20.8541C8.97428 20.8541 8.82761 20.8174 8.71761 20.7716C8.35095 20.6341 7.72761 20.1849 7.72761 18.7641V12.8516H5.58261C4.35428 12.8516 3.91428 12.2741 3.75845 11.9349C3.60261 11.5866 3.46511 10.8807 4.27178 9.95492L11.2109 2.07158C12.1459 1.00825 12.9068 1.08158 13.2734 1.21908C13.6401 1.35658 14.2634 1.80575 14.2634 3.22658V9.13908H16.4084C17.6368 9.13908 18.0768 9.71658 18.2326 10.0557C18.3884 10.4041 18.5259 11.1099 17.7193 12.0357L10.7801 19.9191C10.1293 20.6616 9.56095 20.8541 9.15761 20.8541ZM12.7693 2.51158C12.7418 2.54825 12.5493 2.63991 12.2468 2.98825L5.30761 10.8716C5.05095 11.1649 5.01428 11.3482 5.01428 11.3849C5.03261 11.3941 5.19761 11.4857 5.58261 11.4857H8.41511C8.79095 11.4857 9.10261 11.7974 9.10261 12.1732V18.7732C9.10261 19.2316 9.18511 19.4332 9.22178 19.4882C9.24928 19.4516 9.44178 19.3599 9.74428 19.0116L16.6834 11.1282C16.9401 10.8349 16.9768 10.6516 16.9768 10.6149C16.9584 10.6057 16.7934 10.5141 16.4084 10.5141H13.5759C13.2001 10.5141 12.8884 10.2024 12.8884 9.82658V3.22658C12.8976 2.76825 12.8059 2.57575 12.7693 2.51158Z" fill="white" />
                                </svg>
                                Projects
                            </a>
                            <a
                                onClick={() => handleTabClick('applications')}
                                className={activeTab === 'applications' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M14.6667 20.8543H7.33333C3.9875 20.8543 2.0625 18.9293 2.0625 15.5835V6.41683C2.0625 3.071 3.9875 1.146 7.33333 1.146H14.6667C18.0125 1.146 19.9375 3.071 19.9375 6.41683V15.5835C19.9375 18.9293 18.0125 20.8543 14.6667 20.8543ZM7.33333 2.521C4.71167 2.521 3.4375 3.79516 3.4375 6.41683V15.5835C3.4375 18.2052 4.71167 19.4793 7.33333 19.4793H14.6667C17.2883 19.4793 18.5625 18.2052 18.5625 15.5835V6.41683C18.5625 3.79516 17.2883 2.521 14.6667 2.521H7.33333Z" fill="#8A97A9" />
                                    <path d="M16.9584 8.47917H15.1251C13.7317 8.47917 12.6042 7.35167 12.6042 5.95833V4.125C12.6042 3.74917 12.9159 3.4375 13.2917 3.4375C13.6676 3.4375 13.9792 3.74917 13.9792 4.125V5.95833C13.9792 6.59083 14.4926 7.10417 15.1251 7.10417H16.9584C17.3342 7.10417 17.6459 7.41583 17.6459 7.79167C17.6459 8.1675 17.3342 8.47917 16.9584 8.47917Z" fill="#8A97A9" />
                                    <path d="M10.9999 12.604H7.33325C6.95742 12.604 6.64575 12.2923 6.64575 11.9165C6.64575 11.5407 6.95742 11.229 7.33325 11.229H10.9999C11.3758 11.229 11.6874 11.5407 11.6874 11.9165C11.6874 12.2923 11.3758 12.604 10.9999 12.604Z" fill="#8A97A9" />
                                    <path d="M14.6666 16.271H7.33325C6.95742 16.271 6.64575 15.9593 6.64575 15.5835C6.64575 15.2077 6.95742 14.896 7.33325 14.896H14.6666C15.0424 14.896 15.3541 15.2077 15.3541 15.5835C15.3541 15.9593 15.0424 16.271 14.6666 16.271Z" fill="#8A97A9" />
                                </svg>
                                Applications
                            </a>
                            <a
                                onClick={() => handleTabClick('funds')}
                                className={activeTab === 'funds' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M12.2832 15.9684H9.9824C8.47907 15.9684 7.2599 14.7034 7.2599 13.1451C7.2599 12.7692 7.57157 12.4576 7.9474 12.4576C8.32323 12.4576 8.6349 12.7692 8.6349 13.1451C8.6349 13.9426 9.2399 14.5934 9.9824 14.5934H12.2832C12.8791 14.5934 13.3741 14.0617 13.3741 13.4201C13.3741 12.6226 13.0899 12.4667 12.6224 12.3017L8.92823 11.0001C8.21323 10.7526 7.25073 10.2209 7.25073 8.58007C7.25073 7.1684 8.3599 6.03174 9.71657 6.03174H12.0174C13.5207 6.03174 14.7399 7.29674 14.7399 8.85507C14.7399 9.2309 14.4282 9.54257 14.0524 9.54257C13.6766 9.54257 13.3649 9.2309 13.3649 8.85507C13.3649 8.05757 12.7599 7.40674 12.0174 7.40674H9.71657C9.12073 7.40674 8.62573 7.9384 8.62573 8.58007C8.62573 9.37757 8.9099 9.5334 9.3774 9.6984L13.0716 11.0001C13.7866 11.2476 14.7491 11.7792 14.7491 13.4201C14.7399 14.8226 13.6399 15.9684 12.2832 15.9684Z" fill="#8A97A9" />
                                    <path d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V5.5C10.3125 5.12417 10.6242 4.8125 11 4.8125C11.3758 4.8125 11.6875 5.12417 11.6875 5.5V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z" fill="#8A97A9" />
                                    <path d="M13.7499 20.8543H8.24992C3.27242 20.8543 1.14575 18.7277 1.14575 13.7502V8.25016C1.14575 3.27266 3.27242 1.146 8.24992 1.146H13.7499C18.7274 1.146 20.8541 3.27266 20.8541 8.25016V13.7502C20.8541 18.7277 18.7274 20.8543 13.7499 20.8543ZM8.24992 2.521C4.02409 2.521 2.52075 4.02433 2.52075 8.25016V13.7502C2.52075 17.976 4.02409 19.4793 8.24992 19.4793H13.7499C17.9758 19.4793 19.4791 17.976 19.4791 13.7502V8.25016C19.4791 4.02433 17.9758 2.521 13.7499 2.521H8.24992Z" fill="#8A97A9" />
                                </svg>
                                Release Funds
                            </a>
                            <a
                                onClick={() => handleTabClick('updates')}
                                className={activeTab === 'updates' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M12.2832 15.9684H9.9824C8.47907 15.9684 7.2599 14.7034 7.2599 13.1451C7.2599 12.7692 7.57157 12.4576 7.9474 12.4576C8.32323 12.4576 8.6349 12.7692 8.6349 13.1451C8.6349 13.9426 9.2399 14.5934 9.9824 14.5934H12.2832C12.8791 14.5934 13.3741 14.0617 13.3741 13.4201C13.3741 12.6226 13.0899 12.4667 12.6224 12.3017L8.92823 11.0001C8.21323 10.7526 7.25073 10.2209 7.25073 8.58007C7.25073 7.1684 8.3599 6.03174 9.71657 6.03174H12.0174C13.5207 6.03174 14.7399 7.29674 14.7399 8.85507C14.7399 9.2309 14.4282 9.54257 14.0524 9.54257C13.6766 9.54257 13.3649 9.2309 13.3649 8.85507C13.3649 8.05757 12.7599 7.40674 12.0174 7.40674H9.71657C9.12073 7.40674 8.62573 7.9384 8.62573 8.58007C8.62573 9.37757 8.9099 9.5334 9.3774 9.6984L13.0716 11.0001C13.7866 11.2476 14.7491 11.7792 14.7491 13.4201C14.7399 14.8226 13.6399 15.9684 12.2832 15.9684Z" fill="#8A97A9" />
                                    <path d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V5.5C10.3125 5.12417 10.6242 4.8125 11 4.8125C11.3758 4.8125 11.6875 5.12417 11.6875 5.5V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z" fill="#8A97A9" />
                                    <path d="M13.7499 20.8543H8.24992C3.27242 20.8543 1.14575 18.7277 1.14575 13.7502V8.25016C1.14575 3.27266 3.27242 1.146 8.24992 1.146H13.7499C18.7274 1.146 20.8541 3.27266 20.8541 8.25016V13.7502C20.8541 18.7277 18.7274 20.8543 13.7499 20.8543ZM8.24992 2.521C4.02409 2.521 2.52075 4.02433 2.52075 8.25016V13.7502C2.52075 17.976 4.02409 19.4793 8.24992 19.4793H13.7499C17.9758 19.4793 19.4791 17.976 19.4791 13.7502V8.25016C19.4791 4.02433 17.9758 2.521 13.7499 2.521H8.24992Z" fill="#8A97A9" />
                                </svg>
                                Updates
                            </a>
                            <a
                                    onClick={() => handleTabClick('projectchange')}
                                    className={activeTab === 'projectchange' ? 'active' : ''}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M3.66602 18.3336H18.3327M3.66602 18.3336V14.6669L10.9993 7.3336M3.66602 18.3336L7.33268 18.3336L14.666 11.0003M10.9993 7.3336L13.6289 4.704L13.6305 4.70244C13.9925 4.34047 14.1738 4.15916 14.3828 4.09125C14.5669 4.03143 14.7652 4.03143 14.9493 4.09125C15.1582 4.15911 15.3393 4.34021 15.7008 4.70168L17.2956 6.29649C17.6586 6.6595 17.8402 6.8411 17.9082 7.0504C17.968 7.2345 17.968 7.43282 17.9082 7.61693C17.8402 7.82608 17.6589 8.0074 17.2964 8.36989L17.2956 8.37067L14.666 11.0003M10.9993 7.3336L14.666 11.0003" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Project Changes
                                </a>
                                <a
                                    onClick={() => handleTabClick('categories')}
                                    className={activeTab === 'categories' ? 'active' : ''}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M12.2832 15.9684H9.9824C8.47907 15.9684 7.2599 14.7034 7.2599 13.1451C7.2599 12.7692 7.57157 12.4576 7.9474 12.4576C8.32323 12.4576 8.6349 12.7692 8.6349 13.1451C8.6349 13.9426 9.2399 14.5934 9.9824 14.5934H12.2832C12.8791 14.5934 13.3741 14.0617 13.3741 13.4201C13.3741 12.6226 13.0899 12.4667 12.6224 12.3017L8.92823 11.0001C8.21323 10.7526 7.25073 10.2209 7.25073 8.58007C7.25073 7.1684 8.3599 6.03174 9.71657 6.03174H12.0174C13.5207 6.03174 14.7399 7.29674 14.7399 8.85507C14.7399 9.2309 14.4282 9.54257 14.0524 9.54257C13.6766 9.54257 13.3649 9.2309 13.3649 8.85507C13.3649 8.05757 12.7599 7.40674 12.0174 7.40674H9.71657C9.12073 7.40674 8.62573 7.9384 8.62573 8.58007C8.62573 9.37757 8.9099 9.5334 9.3774 9.6984L13.0716 11.0001C13.7866 11.2476 14.7491 11.7792 14.7491 13.4201C14.7399 14.8226 13.6399 15.9684 12.2832 15.9684Z" fill="#8A97A9" />
                                        <path d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V5.5C10.3125 5.12417 10.6242 4.8125 11 4.8125C11.3758 4.8125 11.6875 5.12417 11.6875 5.5V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z" fill="#8A97A9" />
                                        <path d="M13.7499 20.8543H8.24992C3.27242 20.8543 1.14575 18.7277 1.14575 13.7502V8.25016C1.14575 3.27266 3.27242 1.146 8.24992 1.146H13.7499C18.7274 1.146 20.8541 3.27266 20.8541 8.25016V13.7502C20.8541 18.7277 18.7274 20.8543 13.7499 20.8543ZM8.24992 2.521C4.02409 2.521 2.52075 4.02433 2.52075 8.25016V13.7502C2.52075 17.976 4.02409 19.4793 8.24992 19.4793H13.7499C17.9758 19.4793 19.4791 17.976 19.4791 13.7502V8.25016C19.4791 4.02433 17.9758 2.521 13.7499 2.521H8.24992Z" fill="#8A97A9" />
                                    </svg>
                                    Categories
                                </a>
                            <a
                                onClick={() => handleTabClick('settings')}
                                className={activeTab === 'settings' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M11 14.4375C9.1025 14.4375 7.5625 12.8975 7.5625 11C7.5625 9.1025 9.1025 7.5625 11 7.5625C12.8975 7.5625 14.4375 9.1025 14.4375 11C14.4375 12.8975 12.8975 14.4375 11 14.4375ZM11 8.9375C9.86333 8.9375 8.9375 9.86333 8.9375 11C8.9375 12.1367 9.86333 13.0625 11 13.0625C12.1367 13.0625 13.0625 12.1367 13.0625 11C13.0625 9.86333 12.1367 8.9375 11 8.9375Z" fill="#8A97A9" />
                                    <path d="M13.9424 20.3408C13.7499 20.3408 13.5574 20.3133 13.3649 20.2674C12.7966 20.1116 12.3199 19.7541 12.0174 19.2499L11.9074 19.0666C11.3666 18.1316 10.6241 18.1316 10.0833 19.0666L9.98242 19.2408C9.67992 19.7541 9.20325 20.1208 8.63492 20.2674C8.05742 20.4233 7.46158 20.3408 6.95742 20.0383L5.38075 19.1308C4.82158 18.8099 4.41825 18.2874 4.24409 17.6549C4.07909 17.0224 4.16158 16.3716 4.48242 15.8124C4.74825 15.3449 4.82158 14.9233 4.66575 14.6574C4.50992 14.3916 4.11575 14.2358 3.57492 14.2358C2.23659 14.2358 1.14575 13.1449 1.14575 11.8066V10.1933C1.14575 8.85494 2.23659 7.7641 3.57492 7.7641C4.11575 7.7641 4.50992 7.60827 4.66575 7.34244C4.82158 7.0766 4.75742 6.65494 4.48242 6.18744C4.16158 5.62827 4.07909 4.96827 4.24409 4.34494C4.40909 3.71244 4.81242 3.18994 5.38075 2.8691L6.96658 1.9616C8.00242 1.34744 9.36825 1.70494 9.99158 2.7591L10.1016 2.94244C10.6424 3.87744 11.3849 3.87744 11.9258 2.94244L12.0266 2.76827C12.6499 1.70494 14.0158 1.34744 15.0608 1.97077L16.6374 2.87827C17.1966 3.1991 17.5999 3.7216 17.7741 4.3541C17.9391 4.9866 17.8566 5.63744 17.5357 6.1966C17.2699 6.6641 17.1966 7.08577 17.3524 7.3516C17.5083 7.61744 17.9024 7.77327 18.4433 7.77327C19.7816 7.77327 20.8724 8.8641 20.8724 10.2024V11.8158C20.8724 13.1541 19.7816 14.2449 18.4433 14.2449C17.9024 14.2449 17.5083 14.4008 17.3524 14.6666C17.1966 14.9324 17.2607 15.3541 17.5357 15.8216C17.8566 16.3808 17.9482 17.0408 17.7741 17.6641C17.6091 18.2966 17.2057 18.8191 16.6374 19.1399L15.0516 20.0474C14.7033 20.2399 14.3274 20.3408 13.9424 20.3408ZM10.9999 16.9491C11.8158 16.9491 12.5766 17.4624 13.0991 18.3699L13.1999 18.5441C13.3099 18.7366 13.4933 18.8741 13.7133 18.9291C13.9333 18.9841 14.1533 18.9566 14.3366 18.8466L15.9224 17.9299C16.1608 17.7924 16.3441 17.5633 16.4174 17.2883C16.4908 17.0133 16.4541 16.7291 16.3166 16.4908C15.7941 15.5924 15.7299 14.6666 16.1333 13.9608C16.5366 13.2549 17.3708 12.8516 18.4158 12.8516C19.0024 12.8516 19.4699 12.3841 19.4699 11.7974V10.1841C19.4699 9.6066 19.0024 9.12994 18.4158 9.12994C17.3708 9.12994 16.5366 8.7266 16.1333 8.02077C15.7299 7.31494 15.7941 6.3891 16.3166 5.49077C16.4541 5.25244 16.4908 4.96827 16.4174 4.69327C16.3441 4.41827 16.1699 4.19827 15.9316 4.0516L14.3457 3.1441C13.9516 2.90577 13.4291 3.04327 13.1908 3.4466L13.0899 3.62077C12.5674 4.52827 11.8066 5.0416 10.9908 5.0416C10.1749 5.0416 9.41408 4.52827 8.89158 3.62077L8.79075 3.43744C8.56158 3.05244 8.04825 2.91494 7.65409 3.1441L6.06825 4.06077C5.82992 4.19827 5.64658 4.42744 5.57325 4.70244C5.49992 4.97744 5.53658 5.2616 5.67408 5.49994C6.19658 6.39827 6.26075 7.3241 5.85742 8.02994C5.45408 8.73577 4.61992 9.1391 3.57492 9.1391C2.98825 9.1391 2.52075 9.6066 2.52075 10.1933V11.8066C2.52075 12.3841 2.98825 12.8608 3.57492 12.8608C4.61992 12.8608 5.45408 13.2641 5.85742 13.9699C6.26075 14.6758 6.19658 15.6016 5.67408 16.4999C5.53658 16.7383 5.49992 17.0224 5.57325 17.2974C5.64658 17.5724 5.82075 17.7924 6.05908 17.9391L7.64492 18.8466C7.83742 18.9658 8.06658 18.9933 8.27742 18.9383C8.49742 18.8833 8.68075 18.7366 8.79992 18.5441L8.90075 18.3699C9.42325 17.4716 10.1841 16.9491 10.9999 16.9491Z" fill="#8A97A9" />
                                </svg>
                                Settings
                            </a>
                            <a
                                onClick={() => handleTabClick('logout')}
                                className={activeTab === 'logout' ? 'active' : ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M13.9701 20.4143H13.8509C9.78089 20.4143 7.81922 18.8101 7.48005 15.2168C7.44339 14.8409 7.71839 14.5018 8.10339 14.4651C8.47922 14.4284 8.81839 14.7126 8.85505 15.0884C9.12089 17.9668 10.4776 19.0393 13.8601 19.0393H13.9792C17.7101 19.0393 19.0301 17.7193 19.0301 13.9884V8.01177C19.0301 4.28094 17.7101 2.96094 13.9792 2.96094H13.8601C10.4592 2.96094 9.10255 4.05177 8.85505 6.9851C8.80922 7.36094 8.49755 7.6451 8.10339 7.60844C7.71839 7.58094 7.44339 7.24177 7.47089 6.86594C7.78255 3.2176 9.75339 1.58594 13.8509 1.58594H13.9701C18.4709 1.58594 20.3959 3.51094 20.3959 8.01177V13.9884C20.3959 18.4893 18.4709 20.4143 13.9701 20.4143Z" fill="#8A97A9" />
                                    <path d="M13.6399 11.6875H1.83325C1.45742 11.6875 1.14575 11.3758 1.14575 11C1.14575 10.6242 1.45742 10.3125 1.83325 10.3125H13.6399C14.0158 10.3125 14.3274 10.6242 14.3274 11C14.3274 11.3758 14.0249 11.6875 13.6399 11.6875Z" fill="#8A97A9" />
                                    <path d="M11.5959 14.7585C11.4217 14.7585 11.2475 14.6943 11.11 14.5568C10.8442 14.291 10.8442 13.851 11.11 13.5852L13.695 11.0002L11.11 8.41518C10.8442 8.14935 10.8442 7.70935 11.11 7.44352C11.3759 7.17768 11.8159 7.17768 12.0817 7.44352L15.1525 10.5143C15.4184 10.7802 15.4184 11.2202 15.1525 11.486L12.0817 14.5568C11.9442 14.6943 11.77 14.7585 11.5959 14.7585Z" fill="#8A97A9" />
                                </svg>
                                Log Out
                            </a>
                        </div>
                    </div>
                    {activeTab === 'projects' && <Liveprojects />}
                    {activeTab === 'applications' && <Application />}
                    {activeTab === 'funds' && <Fundsrelease />}
                    {activeTab === 'updates' && <Updates />}
                    {activeTab === 'projectchange' && <Projectchange />}
                    {activeTab === 'categories' && <Categories />}
                    {activeTab === 'settings' && <Settings />}
                    
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default Yourproject;
