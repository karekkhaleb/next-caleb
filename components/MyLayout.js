import Header from './Header'
import Head from 'next/head'

const layoutStyle = {

};
const Layout = (props) => (
    <div style={layoutStyle}>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, user scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link href="../static/styles/materialize.min.css" rel="stylesheet"/>
            <link href="../static/styles/style.css" rel="stylesheet"/>
            <script src="../static/js/materialize.min.js"></script>
            <script src="../static/js/app.js"></script>
            <title>Caleb the developer</title>
        </Head>
        {/*<Header/>*/}
        {props.children}
    </div>
);

export default Layout;