import { FooterProps } from "./Footer.Props";
import styles from './Footer.module.css';

export const Footer = ({...props}: FooterProps):JSX.Element => {
    return (
        <div
            {...props}
        >
            Footer
        </div>
    );
};