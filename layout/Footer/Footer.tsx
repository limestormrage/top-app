import { FooterProps } from "./Footer.Props";
import cn from "classnames";
import { format } from "date-fns";
import styles from './Footer.module.css';

export const Footer = ({className, ...props}: FooterProps):JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)}
            {...props}
        >
            <div>
                OwlTop © 2020 - {format(new Date(), 'y')} Все права защищены
            </div>
            <a
                href="#"
                target="_blank" 
                className={styles.link}
            >
                Пользовательское соглашение
            </a>
            <a 
                href="#"
                className={styles.link}
            >
                Политика конфиденциальности
            </a>
        </footer>
    );
};