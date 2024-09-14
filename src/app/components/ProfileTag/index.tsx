import clsx from "clsx";
import styles from './ProfileTag.module.css'
import { Ellipsis } from "lucide-react";
function ProfileTag() {
    return ( <div className={clsx(styles.wrapper)}>
        <img src="https://avatars.githubusercontent.com/u/93850311?v=4" alt="" className={styles.avatar} />
        <div className={styles.profileWrapper}>
            <span className={styles.name}>
                WiKong Vo
            </span>

            <span className={styles.tag}>
                @wuiKong
            </span>
        </div>
        <span className={styles.option}>
            <Ellipsis size={32} />
        </span>
    </div> );
}

export default ProfileTag;