import clsx from 'clsx';
import styles from './SideBar.module.css'
import React, { PropsWithChildren } from 'react';

interface Props {
    children: React.ReactNode,
    
}

function SideBar(props: Props) {
    return ( <div className={clsx(styles.wrapper)}>
        {props.children}
    </div> );
}

export default SideBar;