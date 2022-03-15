import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '', 
            industry: '',
            experience: '', 
            password: '',
            // password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/tweets');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            fullname: this.state.fullname,
            password: this.state.password,
            // password2: this.state.password2, 
            industry: this.state.industry, 
            experience: this.state.experience
        };

        this.props.signup(user, this.props.history);
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
            <div className="signup-form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
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
                        {/* <br />
                        <input type="password"
                            className='password-input'
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        /> */}
                        <br />
                        <input type="text"
                            className='fullname-input'
                            value={this.state.fullname}
                            onChange={this.update('fullname')}
                            placeholder="Full name"
                        />
                        <br/>
                        <input type="text"
                            className='industry-input'
                            value={this.state.industry}
                            onChange={this.update('industry')}
                            placeholder="Select your industry"
                            list="industry"
                        />  
                        <datalist id="industry">
                            <option value="option1"/>
                            <option value="option2"/>
                            <option value="option3"/>
                            <option value="option4"/>
                            <option value="option5"/>
                        </datalist>
                        <br/>
                        <input type="text"
                            className='experience-input'
                            value={this.state.experience}
                            onChange={this.update('experience')}
                            placeholder="Select your experience"
                            list="experience"
                        />
                        <datalist id="experience">
                            <option value="option1" />
                            <option value="option2" />
                            <option value="option3" />
                            <option value="option4" />
                            <option value="option5" />
                        </datalist>
                        <br />
                        <button className='submit-button' type="submit" value="Submit" >Sign up</button>
                        {this.renderErrors()}
                        <h3 className='or'>OR</h3>
                        <button className='demo-login'>Demo Login</button>

                        <button className="otherwise" onClick={this.props.login}>
                            Already have an account? Log in here!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);