import React from 'react'

export default class StepContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 'content'
    }
  }

  render () {
    return (
      <div id={'section' + this.props.id} className='stepAlign'>
        <div className='bigHeight'>
          <div>
            {this.props.showTitles ? <h3 style={{width: '-webkit-fill-available'}}> {this.props.id + ' - ' + this.props.data.title}</h3> : undefined}
            <p>
              {this.props.data.content}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
