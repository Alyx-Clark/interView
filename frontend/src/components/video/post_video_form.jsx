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
    // debugger
    this.props.createVideo(this.state, this.props.currentUser.id)
    debugger
  }

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
      <form className="vf">
        <div className='vf-title'>Post a video</div>
        <div className='vf-info'>
            <div>hello</div>
          <input className='vf-upload' type="file" onChange={this.handleChange('file')}></input>
          <div>
              <input id='vf-question' type="text" placeholder="question" value={this.state.question} onChange={this.handleChange('question')}></input>
              <input id='vf-industry' type="text" placeholder="industry" value={this.state.industry} onChange={this.handleChange('industry')}></input>
              <input id='vf-experience' type="text" placeholder="experience" value={this.state.experience} onChange={this.handleChange('experience')}></input>
          </div>
          <button className='vf-submit' onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default PostVideoForm;