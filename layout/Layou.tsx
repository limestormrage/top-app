import { FunctionComponent } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import { SideBar } from './SideBar/SideBar';

const Layout = ({children}: LayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, undefined>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};