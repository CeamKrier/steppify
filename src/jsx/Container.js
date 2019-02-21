import React, { Component } from 'react'
import '../css/index.css'
import StepTracker from './StepTracker'
import StepContent from './StepContent'
import _ from 'lodash'

export default class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contents: [],
      milestones: [],
      currentStep: -1,
      position: this.props.position === 'top' || 'bottom' ? this.props.position : 'top'
    }
    this.attachOnScrollEventListener()
    this.milestoneHandler()
  }

  componentWillMount () {
    this.setState({
      contents: this.props.contents
    })
  }

  async attachOnScrollEventListener () {
    await document.querySelector('.contentContainer')
    let component = document.querySelector('.contentContainer')
    component.addEventListener('scroll', (e) => {
      let scrollY = component.scrollTop

      let currentStep = this.checkCurrentStep(scrollY)
      this.setState({
        currentStep: currentStep
      })
    })
  }

  checkCurrentStep (pos) {
    let step = -1
    for (let index = 0; index < this.state.milestones.length - 1; index++) {
      let val = _.inRange(pos, this.state.milestones[index], this.state.milestones[index + 1] + 1)
      if (val) {
        step = index
        break
      }
    }
    return step
  }

  async milestoneHandler () {
    await document.querySelector('.contentContainer')
    let stepperHeight = document.getElementsByClassName('stepper')[0].clientHeight
    let milestones = []
    for (let index = 1; index < this.state.contents.length + 1; index++) {
      let stepsHeight = document.querySelector('#section' + index + ' h3').offsetTop
      let decrementPerStep = 20
      if (index === this.state.contents.length) {
        decrementPerStep = 70
      }
      milestones.push(stepsHeight - stepperHeight - decrementPerStep)
    }
    milestones.push(document.querySelector('.contentContainer').scrollHeight)
    console.log(milestones)
    this.setState({
      milestones: milestones
    })
  }

  render () {
    return (
      <div className='displayContents'>
        <div className={this.state.position + ' stepper'}>
          <StepTracker milestones={this.state.milestones} currentStep={this.state.currentStep} contents={this.state.contents} />
        </div>

        <div className='contentContainer'>
          {this.state.contents.map((value, index) => {
            return <StepContent id={index + 1} data={value} />
          })}
        </div>
      </div>
    )
  }
}
