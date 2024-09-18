import styles from './SuggestTag.module.css'
interface Props {
    data?: any
}
function SuggestTag(props: Props) {
    const data = props.data
    
    return ( <div className={styles.wrapper}>
        <img className={styles.poster} src={`https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/52/eac19ee0-8e0b-445b-932b-4d1c1d51904e`} alt="" />
        <div className={styles.infoWrapper}>
            <span className={styles.heading}>{`TP.Hồ Chí Minh | Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình Tang 2024`}</span>
            <div className={styles.userInfoWrapper}>
                <img className={styles.avatar} src={data?.avatar||`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IFiGYm00LFfyx9PSW2Zv_420pbSLJBjYqQ&s`} alt="" />
                <span className={styles.userName}>BlackMythWikong</span>
            </div>
        </div>
    </div> );
}

export default SuggestTag;