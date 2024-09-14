'use client'
import clsx from 'clsx';
import styles from './EventInfo.module.css'
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Button from '../Button';
import avt from "@/assets/image/avt.png";
interface Props {
    data: any
}
function EventInfo(props: Props) {
    const data = props.data;
    const time = data.time;
    const location = data.location;
    const start = new Date(time.startTime);
    const end = new Date(time.endTime);

    const toFullDayName = (day: number) => {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[day];
    }

    const toFullMonthName = (month: number) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month];
    }
    const timeFormat = (date: Date) => {
        return `${date.getHours()}:${date.getMinutes()<10? `0${date.getMinutes()}`: date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`
    }


    console.log(start.toDateString());
    
    return ( <div className={styles.wrapper}>
        <div className={clsx(styles.leftSideWrapper)}>
            <img
                className={styles.poster}
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/52/eac19ee0-8e0b-445b-932b-4d1c1d51904e" alt="User Avatar" />
            <div className={clsx(styles.datePickerWrapper)}>
                <div className={clsx(styles.dateIconWrapper)}>
                    <span className={clsx(styles.dateIconName)}>{start.toDateString().split(' ')[1].toLocaleUpperCase()}</span>
                        <div className={styles.dateIconDate}>
                            <span className={clsx(styles.dateWrapBefore)}>
                                
                                <span className={styles.dateNumeric}>
                                    {start.getDate()}  
                                </span>
                            </span>
                        </div>
                </div>
                <div className={styles.dateValueWrapper}>
                        <span className={styles.valueName}>{`${toFullDayName(start.getDay())}, ${toFullMonthName(start.getMonth())} ${start.getDate()}`}</span>
                            <span className={styles.valueValue}>{`${timeFormat(start)} - ${timeFormat(end)}`}</span>
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
                    <span className={styles.valueName}>{location.name}</span>
                    <span className={styles.valueValue}>{location.address}</span>
                </div>
            </div>  
            <Button click={()=> alert('register...')}>Register</Button>     
        </div>
        <div className={clsx(styles.rightSideWrapper)}>
            <span className={styles.title}>{data?.tile||`Build on Aptos`}</span>
            <span className={styles.hostedLabel}>Hosted by:</span>
            <div className={styles.hostWrapper}>
            <Image
                    width={36}
                    height={36}
                    style={{
                        objectFit: "cover",
                        borderRadius: "100px", //👈 and here you can select border radius
                    }}
                    src={avt} alt="User Avatar" />
                <span className={styles.hostUserName}>{data?.onwner||`Aptos Labs`}</span>
            </div>
            <div className={styles.about}>
                <span className={styles.aboutLabel}>About event:</span>
                <span className={styles.aboutContent}>{data?.content||`Develop dapps on Aptos, the layer-1 Proof of Stake blockchain from Aptos Labs. Realize your Aptos project with Moralis’ feature-rich suite of enterprise-grade APIs. Prototype and deploy your Aptos builds in a flash!
                Develop dapps on Aptos, the layer-1 Proof of Stake blockchain from Aptos Labs. Realize your Aptos project with Moralis’ feature-rich suite of enterprise-grade APIs. Prototype and deploy your Aptos builds in a flash!
                Develop dapps on Aptos, the layer-1 Proof of Stake blockchain from Aptos Labs. Realize your Aptos project with Moralis’ feature-rich suite of enterprise-grade APIs. Prototype and deploy your Aptos builds in a flash!
                Develop dapps on Aptos, the layer-1 Proof of Stake blockchain from Aptos Labs. Realize your Aptos project with Moralis’ feature-rich suite of enterprise-grade APIs. Prototype and deploy your Aptos builds in a flash!`}</span>
            </div>
        </div>
    </div> );
}

export default EventInfo;