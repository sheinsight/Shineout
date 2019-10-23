import React from 'react'
import PropTypes from 'prop-types'
import { PureComponent } from '../component'
import { CHANGE_TOPIC } from '../Datum/types'
import Checkbox from '../Checkbox/Checkbox'

export default class extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    allData: PropTypes.array,
    datum: PropTypes.object.isRequired,
    treeCheckAll: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.forceUpdate.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    this.props.datum.subscribe(CHANGE_TOPIC, this.handleUpdate)
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    this.props.datum.unsubscribe(CHANGE_TOPIC, this.handleUpdate)
  }

  getChecked() {
    const { data, datum } = this.props
    if (datum.length === 0 || !data) return false

    let checked
    for (const d of data) {
      if (datum.disabled(d)) continue
      const p = datum.check(d)
      if (checked === undefined) {
        checked = p
      } else if (checked !== p) {
        return 'indeterminate'
      }
    }

    return checked
  }

  handleChange(_, checked, index) {
    const { data, datum, allData } = this.props
    const checkedData = allData || data
    if (checked) {
      datum.add(checkedData, index)
    } else {
      datum.remove(checkedData, index)
    }
  }

  render() {
    if (this.props.datum.limit === 1) return null

    return <Checkbox {...this.props} checked={this.getChecked()} onChange={this.handleChange} />
  }
}
