import HomeLink from '../components/backHomeLink'
import Layout from '../components/MyLayout'
import TalkForm from '../components/talkForm'

export default ()=>(
    <Layout>
        <div id="wrapper">
            <div className="blogPage">
                <HomeLink/>
                <h1 className="flow-text">Please talk to me!</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card grey darken-4">
                            <div style={{
                                minHeight:"250px"
                            }}
                                className="card-content flow-text center grey-text text-lighten-3 hoverable">
                                On my way to greatness :) I am always waiting for advices from potential people like you,
                                please tell me how you felt about all this or any other advice is appreciated!!
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <TalkForm />
                    </div>
                </div>
            </div>
            {/*language=CSS*/}
            <style jsx>
                {`
                    .blogPage {
                        padding: 27px;
                        //height: 100vh;
                        overflow: hidden;
                    }
                    #wrapper{

                    }
                `}
            </style>
        </div>
    </Layout>

);

















/*****

import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default (props) => (
    <Layout>
        <h1>{props.url.query.title}</h1>
        <div className="markdown">
            <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
            `}/>
        </div>

        <style jsx global>
            {`
                .markdown {
                   font-family: 'Arial';
                 }
                .markdown a {
                   text-decoration: none;
                   color: blue;
                 }
                .markdown a:hover {
                   opacity: 0.6;
                 }
                .markdown h3 {
                   margin: 0;
                   padding: 0;
                   text-transform: uppercase;
                 }

            `}
        </style>
    </Layout>
)
*****/

/*
import Layout from '../components/MyLayout'
import Link from 'next/link'

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js'},
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
}

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map(post=>(
                <li key={post.id}>
                    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>
            {`
            h1{
                font-family: "Arial";
            }

            ul{
                padding: 0;
            }
            li{
                list-style: none;
                margin: 5px 0;
            }
            a{
                text-decoration: none;
                color: blue;
            }
            a:hover{
                opacity: 0.6;
            }
            `}
        </style>
    </Layout>
)

*/
// import Layout from '../components/MyLayout'
// import fetch from 'isomorphic-unfetch'
//
// const Post = (props) => (
//     <Layout>
//         <h1>{props.show.name}</h1>
//         <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//         <img src={props.show.image.medium}/>
//     </Layout>
// );
//
// Post.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res =  await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const  show = await res.json();
//
//     console.log(`Fetched show: ${show.name}`);
//
//     return {show};
// };
//
// export default Post;


// const Content = (props) => (
//     <div>
//         <h1>{props.title}</h1>
//         <p>This is the blog post content.</p>
//     </div>
// );
//
// export default (props) => (
//     <Layout>
//         <Content title={props.url.query.title}/>
//     </Layout>
// );