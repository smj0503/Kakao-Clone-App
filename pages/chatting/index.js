import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import search from "../../public/icons/search.png";
import Link from "next/link";
import Players from "../../players";
import {useRouter} from "next/router";

const ChattingList = () => {
    const router = useRouter();
    const data = router.query;
    const players = Players

    return (
        <>
            <Head><title>채팅 목록</title></Head>
            <AppLayout tab={data.tab}>
                <div></div>
                {/*Head*/}
                <div className={styles.head}>
                    <div className={styles.title}>{"채팅"}</div>
                    <div><Image src={search} alt="search icon" /></div>
                </div>

                {/*채팅 목록*/}
                {
                    players.map((p) => {
                        return (
                            <Link
                                href={{
                                    pathname: `/chatting/${p.name}`,
                                    query: p,
                                }}
                                as={`/chatting/${p.name}`}
                            >
                                <div className={styles.userProfile} key={p.id}>
                                    <div>
                                            <Image
                                                src={p.img}
                                                alt="my profile image"
                                                width={40}
                                                height={40}
                                                className={styles.myProfileImage}
                                            />
                                    </div>
                                    <div className={styles.name}>{p.name}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </AppLayout>
        </>
    );
}

export default ChattingList;
