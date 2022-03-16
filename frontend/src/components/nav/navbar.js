import React from 'react';
import { Link } from 'react-router-dom'; 


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                    <Link to="/">
                        <button onClick={this.logoutUser}>Logout</button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className='nav-bar-container'>

                    <div className='nav-header-container'>
                        {/* <img/> */}
                        <div className='nav-header'>
                            <h1 className='inter'>inter</h1>
                            <h1 className='view'>View</h1>
                        </div>
                    </div>

                    <div className='user-auth-container'>
                        {/* <div className='link-container'>
                            <a>Link1</a>
                        </div>

                        <div className='link-container'>
                            <a>Link2</a>
                        </div>

                        <div className='link-container'>
                            <a>Link3</a>
                        </div> */}

                        <div className='login-button-container'>
                            <button className="login-button" onClick={() => this.props.open('login')}>Log in</button>
                        </div>
                        <br/>
                        <div className='signup-button-container'>
                            <button className="signup-button" onClick={() => this.props.open('signup')}>Sign up</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;