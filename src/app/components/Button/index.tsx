import styles from './Button.module.css'
interface ButtonProps {
    click: () => void
    children: React.ReactNode
}

function Button(props: ButtonProps) {
    return (
        <div className={styles.wrapper} onClick={() => props.click( )}>
             {props.children} 
        </div>

    );
}

export default Button;