import React from 'react';
import { Link } from 'react-router-dom'

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
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='nav-bar-container'>
                    <div className='login-button-container'>
                        <button className="login-button" onClick={() => this.props.open('login')}>Log in</button>
                    </div>

                    <div className='signup-button-container'>
                        <button className="signup-button" onClick={() => this.props.open('signup')}>Sign up</button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1 className='nav-header'>interView</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;