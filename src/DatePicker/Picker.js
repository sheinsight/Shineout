import React from 'react'
import PropTypes from 'prop-types'
import { PureComponent } from '../component'
import utils from './utils'
import Year from './Year'
import Month from './Month'
import Day from './Day'
import Time from './Time'

class Picker extends PureComponent {
  constructor(props) {
    super(props)

    let mode
    switch (props.type) {
      case 'month':
        mode = 'month'
        break
      case 'time':
        mode = 'time'
        break
      default:
        mode = 'day'
    }

    this.state = { mode }
    this.defaultCurrent = utils.newDate()
    this.handleModeChange = this.handleModeChange.bind(this)
  }

  handleModeChange(mode) {
    setTimeout(() => {
      this.setState({ mode })
    }, 10)
  }

  render() {
    const { mode } = this.state
    const { current, children, ...otherProps } = this.props

    let Render
    switch (mode) {
      case 'year':
        Render = Year
        break
      case 'month':
        Render = Month
        break
      case 'time':
        Render = Time
        break
      default:
        Render = Day
    }

    return <Render {...otherProps} current={current || this.defaultCurrent} onModeChange={this.handleModeChange} />
  }
}

Picker.propTypes = {
  current: PropTypes.object,
  disabled: PropTypes.func,
  format: PropTypes.string,
  max: PropTypes.object,
  min: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object,
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Picker
