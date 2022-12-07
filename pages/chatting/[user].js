import React, { useState} from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import close from "../../public/icons/close.png";

const PrivateChatting = () => {
    const router = useRouter();
    const data = router.query;
    console.log("data ? : ", data);

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    return (
        <>
            {/*채팅창 Head*/}
            <div className={styles.chattingHead}>
                {/*close 버튼*/}
                <div className={styles.chattingTopBar}>
                    <Link href={'/chatting'}>
                        <Image src={close} alt="arrow"/>
                    </Link>
                </div>
                {/*상대방 정보*/}
                <div className={styles.partnerInfo}>
                    <div>
                        <Image
                            src={data.img}
                            alt="profile image"
                            width={40}
                            height={40}
                            className={styles.chattingPartnerProfileImage}
                        />
                    </div>
                    <div className={styles.chattingPartnerName}>
                        {data.name}
                    </div>
                </div>
            </div>

            {/*채팅창 Body*/}
            <div className={styles.privateConversation}>
                <div style={{ flexDirection: 'column'}}>
                {
                    messages.map((m, i)=>{
                        console.log("인덱스 ? : ", i);
                        return (
                            <div className={ i % 2 === 0 ? styles.positionTo : styles.positionFrom }>
                                <span className={ i % 2 === 0 ? styles.messageTo : styles.messageFrom }>{messages[i]}</span>
                            </div>
                        );
                    })
                }
                </div>
            </div>

            {/*채팅 메시지 입력 Bar*/}
            <div className={styles.messageInput}>
                <input onChange={(e)=>{
                        setInputMessage(e.target.value);
                    }}
                       className={styles.inputBar}
                />
                <button onClick={() => {
                    const temp = [...messages];
                    temp.push(inputMessage);
                    setMessages(temp);
                    setInputMessage('');
                }}
                        className={inputMessage === '' ? styles.sendButton : styles.sendButtonActivated}
                >
                    {"전송"}
                </button>
            </div>
        </>
    );
}

export default PrivateChatting;
