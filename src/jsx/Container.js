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
    await document.querySelector('div.wrapper')
    let component = document.querySelector('div.wrapper')
    component.addEventListener('scroll', (e) => {
      let scrollY = component.scrollTop
      let currentStep = this.checkCurrentStep(scrollY)
      console.log(scrollY)
      console.log('scroll ' + component.scrollHeight)
      console.log('client ' + component.clientHeight)
      console.log('offset' + component.offsetHeight)
      this.setState({
        currentStep: currentStep
      })
    })

    /* let ttt = document.querySelector('.stepAlign')
    for (let index = 0; index < ttt.length; index++) {
      console.log(ttt[index].scrollTop)
    } */
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
    await document.querySelector('div.wrapper')
    let clientHeight = document.querySelector('div.wrapper').clientHeight - 400
    let clientHeightPerStep = clientHeight / this.state.contents.length
    let milestones = []
    for (let index = 1; index < this.state.contents.length + 1; index++) {
      let stepsHeight = document.getElementById('section' + index).scrollHeight
      if (index !== 1) {
        stepsHeight = parseInt(milestones[index - 2]) + stepsHeight
      }
      stepsHeight = stepsHeight - clientHeightPerStep
      milestones.push(stepsHeight)
    }
    /* let maxHeight = component.scrollHeight - component.clientHeight
    let cornerStones = maxHeight / this.state.contents.length
    let milestones = [0, cornerStones]
    for (let index = 2; index < this.state.contents.length + 1; index++) {
      milestones.push(cornerStones * index)
    } */
    milestones.unshift(0)
    this.setState({
      milestones: milestones
    })
    console.log(milestones)
  }

  render () {
    return (
      <div className='displayContents'>
        <div className='fixedToTop'>
          <StepTracker currentStep={this.state.currentStep} contents={this.state.contents} />
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
