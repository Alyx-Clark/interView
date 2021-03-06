import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(this.props.close);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demo = {
            email: "apple@email.com",
            password: "password",
        }
        this.setState(demo);
        this.props.login(demo).then(this.props.close);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-form-container'>
                <form className='login-form'  onSubmit={this.handleSubmit}>
                    <button onClick={this.props.close} className="close-button">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <div className='session-header-container'>
                        <div className='session-header'>
                            <h1 className='inter'>inter</h1>
                            <h1 className='view'>View</h1>
                        </div>
                    </div>

                    <div>
                        <input type="text"
                            className='email-input'
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            className='password-input'
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <button className='submit-button' type="submit" value="Submit">Log in</button>
                        {this.renderErrors()}
                        <h3 className='or'>OR</h3>
                        <button className='demo-login' onClick={e => this.handleDemoUser(e)}>Demo log in</button>

                        <button className="otherwise" onClick={this.props.signup}>
                            Don't have an account? 
                            <br/>
                            Sign up for free!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);