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
            <h3 style={{width: '-webkit-fill-available'}}> {this.props.id + ' - ' + this.props.data.title}</h3>
            <p>
              {this.props.data.content}
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
