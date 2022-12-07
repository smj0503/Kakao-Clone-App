import React from 'react';
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import personGray from "../public/icons/person-gray.png";
import personWhite from "../public/icons/person-white.png";
import chattingGray from "../public/icons/chatting-gray.png";
import chattingWhite from "../public/icons/chatting-white.png";

const AppLayout = ({children, tab}) => {

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div></div>
                <div className={styles.friendListBtn}>
                    <Link
                        href={{
                            pathname: '/profile',
                            query: { tab: 1 },
                        }}
                        as={'/profile'}
                    >
                        {tab === 1 ? <Image src={personWhite} alt="person icon" /> : <Image src={personGray} alt="person icon" />}
                    </Link>
                </div>
                <div className={styles.chattingListBtn}>
                    <Link
                        href={{
                            pathname: '/chatting',
                            query: { tab: 2 },
                        }}
                        as={'/chatting'}
                    >
                        {tab === 2 ? <Image src={chattingGray} alt="chatting icon" /> : <Image src={chattingWhite} alt="chatting icon" />}
                    </Link>
                </div>
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default AppLayout;
