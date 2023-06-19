import React, { ReactNode } from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Layout.scss'

type layoutProps = {
    children: ReactNode,
}

const Layout: React.FC<layoutProps> = ({children}) => {
    return(
        <div id='wrapper'>
            <Header />
            <main id='main'>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;