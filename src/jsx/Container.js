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
      contents: [
        {
          title: 'Gee',
          titleSummary: 'Is always your sidekick on the adventures',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        },
        {
          title: 'Foo',
          titleSummary: 'Is the battlecry for the fight',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        },
        {
          title: 'Bar',
          titleSummary: 'Is the place where you find the inner self',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        },
        {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        },
        {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        },
        {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }
      ]
    })
  }

  async attachOnScrollEventListener () {
    await document.querySelector('div#wrapper')
    let component = document.querySelector('div#wrapper')
    component.addEventListener('scroll', (e) => {
      let scrollY = component.scrollTop
      let currentStep = this.checkCurrentStep(scrollY)
      console.log(currentStep)
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
    await document.querySelector('div#wrapper')
    let component = document.querySelector('div#wrapper')
    let maxHeight = component.scrollHeight - component.clientHeight
    let cornerStones = maxHeight / this.state.contents.length
    let milestones = [0, cornerStones]
    for (let index = 2; index < this.state.contents.length + 1; index++) {
      milestones.push(cornerStones * index)
    }
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
