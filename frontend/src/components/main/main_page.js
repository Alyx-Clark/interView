import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
            <div className='main-page-background'>
                <section className='main-section'>
                    <div className='slogan-container'>
                        <h1>Whatever slogan goes here</h1>
                    </div>
                    <div className='main-img-container'>
                        {/* <span>img</span> */}
                        <img className='main-img' src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/teamwork-illustration.png">
                        </img>
                    </div>
                </section>

                <section className='sec-section'>
                    <div className='img-group'>
                        <div className='img1-container'>
                            <img>
                            </img>
                        </div>
                        <div className='img2-container'>
                            <img>
                            </img>
                        </div>
                        <div className='img3-container'>
                            <img>
                            </img>
                        </div>
                    </div>
                    <div className='detail-intro'>
                        <h2>intro to interview</h2>
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
