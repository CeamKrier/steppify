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
      currentStep: -1
    }
    this.attachOnScrollEventListener()
    this.milestoneHandler()
  }

  componentDidMount () {
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
      console.log(scrollY)
      console.log('scroll ' + component.scrollHeight)
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
    let stepperHeight = document.getElementsByClassName('fixedToTop')[0].clientHeight
    let milestones = []
    for (let index = 1; index < this.state.contents.length + 1; index++) {
      let stepsHeight = document.querySelector('#section' + index + ' h3').offsetTop
      let decrementPerStep = 20
      if (index === this.state.contents.length) {
        decrementPerStep = 70
      }
      milestones.push(stepsHeight - stepperHeight - decrementPerStep)
    }
    milestones.push(milestones[this.state.contents.length - 1] + 100)
    this.setState({
      milestones: milestones
    })
    console.log(milestones)
  }

  render () {
    return (
      <div className='displayContents'>
        <div className='fixedToTop'>
          <StepTracker milestones={this.state.milestones} currentStep={this.state.currentStep} contents={this.state.contents} />
        </div>

        <div className='contentContainer'>
          {this.state.contents.map((value, index) => {
            return <StepContent id={index + 1} content={value.content} />
          })}
        </div>
      </div>
    )
  }
}
