import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import startChatting from "../../public/icons/start-chatting.png";
import close from "../../public/icons/close.png";

const userProfile = () => {
    const router = useRouter();
    const data = router.query;

    return (
        <div className={styles.profileDetail}>
            <div >
                <button type="button" className={styles.closeButton} onClick={() => router.back()}>
                    <Image
                        src={close}
                        alt="close icon"
                    />
                </button>
            </div>
            <div className={styles.userInfo}>
                <div>
                    <Image
                        src={data.img}
                        alt="profile image"
                        width={80}
                        height={80}
                        className={styles.userProfileImage}
                    />
                </div>
                <div className={styles.userName}>
                    {data.name}
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.chattingButton}>
                    <Link

                        href={{
                            pathname: `/chatting/${data.name}`,
                            query: data,
                        }}
                        as={`/chatting/${data.name}`}
                    >
                        <Image
                            src={startChatting}
                            alt="chatting icon"
                        />
                    </Link>
                </div>
                <div className={styles.startChatting}>
                    1:1 채팅
                </div>
            </div>
        </div>
    );
}

export default userProfile;
