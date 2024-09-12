
import clsx from "clsx"
import styles from './SideBarButton.module.css'
import Link from "next/link";
interface Props {
    title: string,
    click: () => void,
    active: boolean,
    icon: React.ReactNode,
    to: string
}
function SideBarButton(props: Props) {
    return ( <Link href={props.to} onClick={()=> props.click()} className={clsx(styles.wrapper)}>
        {props.icon}
        <span className={clsx(styles.title, props.active&&styles.active)}>{props.title}</span>
    </Link> );
}

export default SideBarButton;