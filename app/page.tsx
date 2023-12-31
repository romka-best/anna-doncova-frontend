import Header from 'components/Header';
import Main from 'components/Main';
import Start from 'components/Start';
import PreRegister from 'components/PreRegister';
import Footer from 'components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Start />
                <PreRegister />
            </Main>
            <Footer />
        </>
    );
}
