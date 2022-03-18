import React from 'react';

class PostVideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {question: '', file: null, views: 0, experience: '', industry: '', user: this.props.currentUser.id }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(this.props)
    e.preventDefault();
    this.props.createVideo(this.state, this.props.currentUser.id)
  }
z
  handleChange(key) {
    return e => {
      if (key === 'question' || key === 'experience' || key === 'industry') {
        this.setState({[key]: e.currentTarget.value})
      } else {
        this.setState({[key]: e.target.files[0]})
      }
    }
  }


  render() {
    return (
      <div className='create-form-background'>
        <form className="vf">

          <div className='vf-title'>
            <h1>Create your View</h1>
          </div>

          <div className='vf-info'>

            <div className='vf-upload-container'>
              <input className='vf-upload' type="file" onChange={this.handleChange('file')}>
              </input>
              <span className='upload-text'>Drag and drop your View to upload</span>
              <button className='vf-submit' onClick={this.handleSubmit}>Create</button>
            </div>

            <div className='vf-detail-container'>
                <h2>Tell us a bit about you and your View</h2>

                <input list ="question" 
                  id='vf-question' 
                  type="text" 
                  placeholder="What interview question are you responding to?" 
                  value={this.state.question} 
                  onChange={this.handleChange('question')}>
                </input>
                <datalist id="question">
                  <option value="Tell me about yourself."></option>
                  <option value="What is your greatest strength?"></option>
                  <option value="What is your greatest weakness?"></option>
                  <option value="Describe a time you handled a stressful situation."> </option>
                  <option value="Tell me about a time when you failed and how you overcame it."></option>
                </datalist>
        
                <input list="industry"
                  id='vf-industry' 
                  type="text" 
                  placeholder="What industry are you in?" 
                  value={this.state.industry} 
                  onChange={this.handleChange('industry')}>
                </input>
                <datalist id="industry">
                  <option value="Communication Services" />
                  <option value="Consumer Discretionary" />
                  <option value="Energy" />
                  <option value="Financials" />
                  <option value="Health Care" />
                  <option value="Information Technology" />
                  <option value="Materials" />
                  <option value="Real Estate" />
                  <option value="Utilities" />
                </datalist>

                <input list="experience" 
                  id='vf-experience' 
                  type="text" 
                  placeholder="What work experience do you have?" 
                  value={this.state.experience} 
                  onChange={this.handleChange('experience')}>
                </input>
                <datalist id="experience">
                  <option value="Entry-level" />
                  <option value="Intermediate/experienced level" />
                  <option value="First-level management" />
                  <option value="Mid-level management" />
                  <option value="Senior/Executive management" />
                </datalist>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default PostVideoForm;