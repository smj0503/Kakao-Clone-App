import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.homeDiv1}>
                {"Sony's Kakao Clone App"}
            </div>
            <div className={styles.homeDiv2}>
                <Link href={'/profile'}>
                    <div className={styles.loginButton}>
                        {"로그인"}
                    </div>
                </Link>
            </div>
        </div>
    );
}

