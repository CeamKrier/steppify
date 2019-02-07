import 'progress-tracker'
import React from 'react'

export default class StepTracker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 'progress'

    }
  }

  componentWillUpdate () {
    this.organizeStepperHighlights(this.props.currentStep + 1)
  }

  handleClicksOnProgressBar (e) {
    e.preventDefault()
    document.querySelector('#section' + this.val).scrollIntoView({
      behavior: 'smooth'
    })
    this.ref.organizeStepperHighlights(this.val)
  }

  organizeStepperHighlights (target) {
    let steps = document.querySelectorAll('li.progress-step')
    for (let index = 0; index < steps.length; index++) {
      if (index < target - 1) {
        if (!steps[index].classList.contains('is-complete')) {
          steps[index].classList.add('is-complete')
        }

        if (steps[index].classList.contains('is-active')) {
          steps[index].classList.remove('is-active')
        }
      }

      if (index === target - 1) {
        if (steps[index].classList.contains('is-complete')) {
          steps[index].classList.remove('is-complete')
        }
        steps[index].classList.add('is-active')
      }

      if (index > target - 1) {
        if (steps[index].classList.contains('is-complete')) {
          steps[index].classList.remove('is-complete')
        }

        if (steps[index].classList.contains('is-active')) {
          steps[index].classList.remove('is-active')
        }
      }
    }
  }

  listItem (value, index, arr) {
    return (
      <li class='progress-step'>
        <a onClick={this.handleClicksOnProgressBar.bind({ref: this, val: parseInt(index) + 1})} href={'#section' + (parseInt(index) + 1)}>
          <span class='progress-marker'>{(parseInt(index) + 1)}</span>
          <span class='progress-text'>
            <h4 class='progress-title'> {value.title} </h4>
            {value.titleSummary}
          </span>
        </a>
      </li>
    )
  }

  unorderedList () {
    return (
      <ul class='progress-tracker progress-tracker--text progress-tracker--center displayProgressBar'>
        {this.props.contents.map((value, index, arr) => {
          return (
            this.listItem(value, index)
          )
        })}
      </ul>
    )
  }

  render () {
    return (
      this.unorderedList()
    )
  }
}
