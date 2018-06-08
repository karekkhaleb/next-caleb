import React from 'react'


export default class ImageLogo extends React.Component{
    state = {
        iterator:0
    };
    render(){
        return(
            <div>
                <img className="techImg responsive-img" src={`../static/img/allTech.svg`} style={{maxWidth:"250px"}}/>

                {/*language=SCSS*/}
                <style>{`
                    .techImg{
                      animation: rotateMe 5s infinite linear;
                    }
                    @keyframes rotateMe {
                      from{
                        transform: rotateZ(0deg);
                      }
                      to{
                        transform: rotateZ(360deg);
                      }
                    }
                `}</style>
            </div>
        );
    }
}