import React from 'react'

export default class StepContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 'content'
    }
    this.sectionRender = this.sectionRender.bind(this)
  }

  sectionRender () {
    return (
      <div id={'section' + this.props.id} className='stepAlign'>
        <div className='bigHeight'>
          <div>
            <h3 style={{width: '-webkit-fill-available'}}> Section {this.props.id}</h3>
            <p>
              {this.props.content}
            </p>

          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      this.sectionRender()
    )
  }
}
