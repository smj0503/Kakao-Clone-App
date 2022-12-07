import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/AppLayout';
import styles from "../../styles/Home.module.css";
import search from "../../public/icons/search.png";
import Image from "next/image";
import Link from "next/link";
import Players from "../../players";
import {useRouter} from "next/router";

const Profile = () => {
    const router = useRouter();
    const data = router.query;
    console.log("data ? : ", data);
    const players = Players

    const copy = [...players];
    // 선수 이름 별로 정렬
    copy.sort((x, y) => {
        return x.name < y.name ? -1 : x.name > y.name ? 1 : 0
    });

    return (
        <>
            <Head><title>친구 목록</title></Head>
            <AppLayout tab={data.tab}>
                <div></div>
                {/*Head*/}
                <div className={styles.head}>
                    <div className={styles.title}>{"친구"}</div>
                    <div><Image src={search} alt="search icon" /></div>
                </div>

                {/*내 프로필*/}
                <div className={styles.userProfile}>
                    <div>
                        <Link
                            href={{
                                pathname: "/profile/손흥민",
                                query: {
                                    name: "손흥민",
                                    img: "https://t1.daumcdn.net/cafeattach/1Yeqd/783a409fea8926028372644ecff96f0160c044d9"
                                },
                            }}
                            as={"/profile/손흥민"}
                        >
                            <Image
                                src={'https://t1.daumcdn.net/cafeattach/1Yeqd/783a409fea8926028372644ecff96f0160c044d9'}
                                alt="my profile image"
                                width={40}
                                height={40}
                                className={styles.myProfileImage}
                            />
                        </Link>
                    </div>
                    <div className={styles.name}>{"손흥민"}</div>
                </div>

                {/*친구 목록*/}
                {
                    copy.map((p) => {
                        return (
                            <div className={styles.userProfile} key={p.id}>
                                <div>
                                    <Link
                                        href={{
                                            pathname: `/profile/${p.name}`,
                                            query: p,
                                        }}
                                        as={`/profile/${p.name}`}
                                    >
                                        <Image
                                            src={p.img}
                                            alt="my profile image"
                                            width={32}
                                            height={32}
                                            className={styles.profileImage}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.name}>{p.name}</div>
                            </div>
                        );
                    })
                }
            </AppLayout>
        </>
    );
}

export default Profile;
