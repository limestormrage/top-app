import styles from './P.module.css';
import cn from 'classnames';
import { PProps } from './P.props';

export const P = ({size = 'medium', children, ...props}: PProps): JSX.Element => {
    return (
        <p 
            className={cn(styles.paragraph, {
                [styles.big] : size === 'big',
                [styles.small] : size === 'small',
            })}
            {...props}
        >
            {children}
        </p>
    );
};