import Layout from '../components/MyLayout'
import Footer from '../components/footer'
import ImageLogo from '../components/imageLogo'
import LestTalkLink from '../components/letsTalkLink'

export default () => (
    <Layout>
        <div  style={{backgroundColor:"#333"}}>
            <div style={{
                height:"100vh",
                display:"flex",
                justifyContent: "center",
                alignContent: "center"
            }}>
                <section className="section center green-text text-darken-3" style={{
                    display:"flex",
                    flexDirection:"column",
                    alignContent: "center",
                    justifyContent: "center"
                }}>
                    <div style={{}}>
                        <img style={{width:"300px"}} src="../static/img/barner1-02.svg" alt=""/>
                    </div>
                </section>
            </div>
        </div>
        <div>
            <section className="section row teal"
                     style={{minHeight:"50vh",
                         textAlign:"center",
                         padding:"50px",
                         boxSizing:"border-box",
                         margin:"auto"
                     }}>
                <div className="col s12">
                    <h2>Hello</h2>
                    <p className="flow-text">I'm a web developer with a strong passion of any code related activity:
                        you can say 'I am in love with programming :)</p>
                </div>
            </section>
        </div>
        <section className="section orange darken-4"
                 style={{minHeight:"50vh",
                     textAlign:"center",
                     padding:"50px",
                     boxSizing:"borderBox"
                 }}>
            <div>
                <h2 className="flow-text">Web Technologies I am familiar with </h2>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <div>
                                    <ImageLogo/>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div>
                                    <h3 className="flow-text">well, Most of them!!!</h3>
                                    <p>I am not saying that I am a wizard at every single one,
                                        but combined with my fast learning ability, The unknown is
                                        what attracts me!!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section teal"
                 style={{minHeight:"50vh",
                     textAlign:"center",
                     padding:"50px",
                     boxSizing:"borderBox"
                 }}>

            <div>
                <h2 className="flow-text">I am easy to find</h2>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <div>
                                    <h3 className="flow-text">Lets get in touch!</h3>
                                    <table className="">
                                        <tr>
                                            <td>Email:</td>
                                            <td>karekkhaleb@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Tel:</td>
                                            <td>+250783339057</td>
                                        </tr>
                                        <tr>
                                            <td>GitHub</td>
                                            <td><a target="_blank" style={{
                                                color:"black",
                                                textDecoration:"none"
                                            }} href="https://github.com/karekkhaleb">karekkhaleb</a></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <div>
                                    <img className="responsive-img" src="../static/img/emailPNG.png" alt="" style={{}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="pLink" style={{
            position: 'fixed',
            right: '0%',
            top: '50vh',
        }}>
            <LestTalkLink/>
        </div>
        <Footer/>
    </Layout>
);