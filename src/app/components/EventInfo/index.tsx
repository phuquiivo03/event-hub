import clsx from 'clsx';
import styles from './EventInfo.module.css'
import Image from 'next/image';
import { MapPin } from 'lucide-react';

function EventInfo() {
    return ( <div className={styles.wrapper}>
        <div className={clsx(styles.leftSideWrapper)}>
            <img
                className={styles.poster}
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/52/eac19ee0-8e0b-445b-932b-4d1c1d51904e" alt="User Avatar" />
            <div className={clsx(styles.datePickerWrapper)}>
                <div className={clsx(styles.dateIconWrapper)}>
                    <span className={clsx(styles.dateIconName)}>AUG</span>
                        <div className={styles.dateIconDate}>
                            <span className={clsx(styles.dateWrapBefore)}>7</span>
                        </div>
                </div>
                <div className={styles.dateValueWrapper}>
                        <span className={styles.valueName}>Wednesday, August 7</span>
                            <span className={styles.valueValue}>6:00 PM - 9:00 PM</span>
                    </div>
            </div>
            <div className={clsx(styles.locationPickerWrapper)}>
                <div className={clsx(styles.locationIconWrapper)}>
                    <div className={styles.wrapperBefore}>
                        <MapPin
                            size={24}
                            stroke={"url(#gradientStroke)"}
                        />

                    </div>
                </div>
                <div className={styles.locationValueWrapper}>
                    <span className={styles.valueName}>FPT University HCMC</span>
                    <span className={styles.valueValue}>Thành Phố Thủ Đức, Hồ Chí Minh</span>
                </div>
            </div>       
        </div>
        <div className={clsx(styles.rightSideWrapper)}>

        </div>
    </div> );
}

export default EventInfo;