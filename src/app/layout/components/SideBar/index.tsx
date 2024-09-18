import clsx from 'clsx';
import styles from './SideBar.module.css'
import React, { PropsWithChildren } from 'react';
import ProfileTag from '@/app/components/ProfileTag';

interface Props {
    children: React.ReactNode,
    right?: boolean,
}

function SideBar(props: Props) {
    return ( <div className={clsx(styles.wrapper, props.right&&styles.right)}>
            {!props.right&&<span className={styles.heading}>EventHub</span>}
            {props.children}
            <ProfileTag />
    </div> );
}

export default SideBar;