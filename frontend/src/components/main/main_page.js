import React from 'react';

class MainPage extends React.Component {
    state = { showing1: false,
        showing2: false,
        showing3: false,
        showing4: false
}

    render() {
        const {showing1, showing2, showing3, showing4} = this.state
        return (
            <div className='background'>
                <div className='main-page-background'>
                    <section className='main-section'>
                        <div className='slogan-container'>
                            <h1>No need to worry with interView</h1>
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
                            <h2>interView is a video platform where users can practice their interviewing skills and elicit feedbacks.
                                interView seeks to make the interviewing process less scary by allowing users to record interview responses to the top behavioral questions
                                and receive constructive feedback on how they did with a score based on a grading rubric.
                            </h2>
                            <button className='scroll-button2'>SCROLL DOWN FOR MORE INFO</button>
                        </div>
                    </section>

                    <section className='third-section'>
                       
                        <div className='extra-intro'>
                            <h2>whatever you wanna say here</h2>
                        </div>
                    </section>

                    <section className='last-section'>
                        <div className='rotating' >
                            <h1>Contributers</h1>
                        </div>
                        <div className='img-slider'>
                            <button className='sliding-item' onFocus={() => this.setState({ showing1: true })}>
                                <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/smile.png">
                                </img>
                                <div className="personal-links" style={{ display: (showing1 ? 'block' : 'none') }}>LINKS</div>
                            </button>
                            <button className='sliding-item' onFocus={() => this.setState({ showing2: true })}>
                                <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/smile.png">
                                </img>
                                <div style={{ display: (showing2 ? 'block' : 'none') }}>LINKS</div>
                            </button>
                            <button className='sliding-item' onFocus={() => this.setState({ showing3: true })}>
                                <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/smile.png">
                                </img>
                                <div style={{ display: (showing3 ? 'block' : 'none') }}>LINKS</div>
                            </button>
                            <button className='sliding-item' onFocus={() => this.setState({ showing4: true })}>
                                <img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/smile.png">
                                </img>
                                <div style={{ display: (showing4 ? 'block' : 'none') }}>LINKS</div>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default MainPage;
