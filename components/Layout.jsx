import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>ConSecure</title>
                <meta name='description' content="Experience ultimate privacy and seamless connectivity with our mobile secure VPN." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/Vector.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout