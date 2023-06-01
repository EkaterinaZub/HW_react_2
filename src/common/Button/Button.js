import styles from './Button.module.css';

export const Button = ({ disabled, type, id, onClick, title, icon, iconStyle, addStyles }) => {

    return (
        <button className={[styles.button, addStyles].join(' ')}
            disabled={disabled}
            type={type}
            id={id}
            onClick={onClick}
            
        >
            <span>{title}</span>
            {icon && <img className={iconStyle}
                src={icon} alt='buy' />}</button>
    )
}