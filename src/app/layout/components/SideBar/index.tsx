import clsx from 'clsx';
import styles from './SideBar.module.css'
import React, { PropsWithChildren } from 'react';
import ProfileTag from '@/app/components/ProfileTag';

interface Props {
    children: React.ReactNode,
    
}

function SideBar(props: Props) {
    return ( <div className={clsx(styles.wrapper)}>
            <span className={styles.heading}>EventHub</span>
            {props.children}
            <ProfileTag />
    </div> );
}

export default SideBar;