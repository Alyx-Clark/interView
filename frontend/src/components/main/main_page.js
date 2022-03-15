import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
            <div className='main-page-background'>
                <section className='main-section'>
                    <div className='slogan-container'>
                        <h1>Whatever slogan goes here</h1>
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
                        <h1>Say something else here</h1>
                        <button className='scroll-button2'>SCROLL DOWN FOR MORE INFO</button>
                    </div>
                </section>

                <section className='third-section'>
                    <div className='img-slider'>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                        <div className='sliding-item'>
                            <img>
                            </img>
                        </div>
                    </div>
                    <div className='extra-intro'>
                        <h2>whatever you wanna say here</h2>
                    </div>
                </section>

                <footer className='last-section'>
                    <div className='rotating'>
                        <img>
                        </img>
                    </div>
                    <div className='personal-links'>
                        <span>personal links go here</span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default MainPage;
