// import { css } from '@emotion/react';
import React from 'react';
import Header from "components/molecules/Header"
import Footer from "components/molecules/Footer"
import TimeLine from 'components/molecules/TimeLine';

const Home: React.FC = () => {
    return (
        <>
        <Header />
        <div>
            <TimeLine />
        </div>
        <Footer />
        </>
    );
};

export default Home;

const styles = {
    
}
