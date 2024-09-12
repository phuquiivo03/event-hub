import clsx from "clsx";
import styles from "./Post.module.css";
import { Ellipsis, Bookmark } from "lucide-react";
import avt from "@/assets/image/avt.png";
import Image from 'next/image';
// import Poster from '@/assets/image/poster.avif';
function Post({data}: {data: any}) {

    return ( <div className={clsx(styles.wrapper)}>
        <div className={styles.headingWrapper}>
            <div className={styles.headingInfo}>
                <Image
                    width={36}
                    height={36}
                    style={{
                        objectFit: "cover",
                        borderRadius: "100px", //👈 and here you can select border radius
                    }}
                    src={avt} alt="User Avatar" />
                <span className={styles.username}>TonNgoQui</span>
            </div>
            <div className={styles.optionBtn}>
                <Ellipsis
                    color="gray"
                    size={32}
                    cursor={"pointer"}
                />
            </div>
        </div>
        <img className={clsx(styles.poster)} src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/52/eac19ee0-8e0b-445b-932b-4d1c1d51904e" alt="" />
        <div className={clsx(styles.contentWrapper)}>
            <div className={styles.contentHeading}>
                <span className={styles.title}>TP.Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình Tang 2024 Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch T</span>
                <Bookmark
                    size={32}
                    // color={styles.primary}
                    
                />
            </div>
            <span className={styles.detailLink}>See Detail</span>
        </div>

    </div> );
}

export default Post;

