import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
            <div className='background'>
                <div className='main-page-background'>
                    <section className='main-section'>
                        <div className='slogan-container'>
                            <h1>Master the job interview</h1>
                            <button className='scroll-button'>SCROLL DOWN FOR MORE INFO</button>
                        </div>
                        <div className='main-img-container'>
                            {/* <span>img</span> */}
                            <img className='main-img' src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/teamwork-illustration.png">
                            </img>
                        </div>
                    </section>

                    <section className='sec-section'>
                        <div className='img1-container'>
                            <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/interview.png">
                            </img>
                        </div>
                        <div className='slogan2-container'>
                            <h1>Time to pass the interview</h1>
                            <h2>interView is a video platform where you can practice your interviewing skills and elicit feedback.
                                interView seeks to make the interviewing process <b>less scary</b>! Upload your video interview responses
                                and receive constructive feedback.
                            </h2>
                            <button className='scroll-button2'>SCROLL DOWN FOR MORE INFO</button>
                        </div>
                    </section>

                    {/* <section className='third-section'>
                       
                        <div className='extra-intro'>
                            <h2>whatever you wanna say here</h2>
                        </div>
                    </section> */}

                    <section className='last-section'>
                        <div className='slogan3-container' >
                            <h1>ABOUT US</h1>
                        </div>
                        <div className='img-slider'>
                            <button className='sliding-item' >
                                <img src="Alex.jpg">
                                </img>
                                <div className="personal-links" >
                                    <span>Alex Clark</span>
                                    <br/>
                                    <a href='https://www.linkedin.com/in/alex-b-clark-wrightstate/' target="_blank">LinkedIn</a>
                                    <br/>
                                    <a href='https://github.com/Alyx-Clark' target="_blank">Github</a>
                                </div>
                            </button>
                            <button className='sliding-item' >
                                <img src="Ian.jpg">
                                </img>
                                <div className="personal-links">
                                    <span>Ian Farr</span>
                                    <br/>
                                    <a href='https://www.linkedin.com/in/ian-farr/' target="_blank">LinkedIn</a>
                                    <br />
                                    <a href='https://github.com/IanFarr' target="_blank">Github</a>
                                </div>
                            </button>
                            <button className='sliding-item' >
                                <img src="Jonathan.jpg">
                                </img>
                                <div className="personal-links">
                                    <span>Jonathan Kim</span>
                                    <br />
                                    <a href='https://github.com/hwkcode' target="_blank">LinkedIn</a>
                                    <br />
                                    <a href='https://github.com/hwkcode' target="_blank">Github</a>
                                </div>
                            </button>
                            <button className='sliding-item'>
                                <img src="Qien.jpg">
                                </img>
                                <div className="personal-links">
                                    <span>Qien Gao</span>
                                    <br />
                                    <a href="https://github.com/qienzgao" target="_blank">LinkedIn</a>
                                    <br />
                                    <a href="https://www.linkedin.com/in/qien-gao-1390071a7/" target="_blank">Github</a>
                                </div>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default MainPage;
