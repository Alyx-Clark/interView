import React from 'react';
import { Link } from 'react-router-dom'; 
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
                <div className='nav-bar-container'>
                    <div className='nav-header-container'>
                        {/* <img/> */}
                        <div className='nav-header'>
                            <h1 className='inter'>inter</h1>
                            <Link to="/" className='home-link'><h1 className='view'>View</h1></Link>
                        </div>
                    </div>

                    <div className='search-bar-container'>
                        <input className="search-bar" type="text" placeholder='Search' />
                    </div>

                    <div className='functional-buttons-container'>
                        <div className='load-button-wrapper'>
                            <div className='load-button-container'>
                                <button className='profile-button'>
                                    <FaceIcon fontSize='large' color="action"/>
                                </button>
                            </div>
                            <span className='button-function'>Profile</span>
                        </div>

                        <div className='load-button-wrapper'>
                            <div className='load-button-container'>
                                <button className='create-button'><AddCircleOutlineIcon fontSize='large' color='action'/></button>
                            </div>
                            <span className='button-function'>Create View</span>
                        </div>

                        <div className='load-button-wrapper'>
                            <div className='load-button-container'>
                                <Link to="/">
                                    <button className="logout-button" onClick={this.logoutUser}>
                                        <ExitToAppIcon fontSize='large' color="action" />
                                    </button>
                                </Link>
                            </div>
                            <span className='button-function'>Log Out</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='nav-bar-container'>

                    <div className='nav-header-container'>
                        <div className='nav-header'>
                            <h1 className='inter'>inter</h1>
                            <h1 className='view'>View</h1>
                        </div>
                    </div>

                    <div className='user-auth-container'>
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