import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import { SideBar } from './SideBar/SideBar';

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <SideBar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};