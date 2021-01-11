import React from 'react'
import PropTypes from 'prop-types'
import { getKey } from '../utils/uid'
import { Component } from '../component'
import { getFilterTree } from '../utils/tree'

export default Origin =>
  class extends Component {
    static propTypes = {
      onFilter: PropTypes.func,
      filterDelay: PropTypes.number,
      data: PropTypes.array,
      childrenKey: PropTypes.string,
      keygen: PropTypes.any,
    }

    static defaultProps = {
      filterDelay: 400,
    }

    constructor(props) {
      super(props)
      this.handleFilter = this.handleFilter.bind(this)
      this.state = {
        filterText: '',
        filter: null,
      }
    }

    getData() {
      const { data, childrenKey, keygen } = this.props
      const { filter } = this.state
      if (!filter) return data
      return getFilterTree(data, filter, undefined, node => getKey(node, keygen), childrenKey, true)
    }

    handleFilter(filterText) {
      const { filterDelay, onFilter } = this.props
      if (this.timer) clearTimeout(this.timer)

      if (filterText.length === 0) {
        this.setState({ filter: null, filterText })
        return
      }

      this.timer = setTimeout(() => {
        const fn = onFilter(filterText)
        if (typeof fn === 'function') {
          this.setState({ filter: fn, filterText })
        }
      }, filterDelay)
    }

    render() {
      const { onFilter } = this.props
      const { filterText, filter } = this.state
      if (!onFilter) return <Origin {...this.props} />
      return (
        <Origin
          {...this.props}
          data={this.getData()}
          filterText={filterText}
          onFilter={this.handleFilter}
          filterDataChange={filter}
        />
      )
    }
  }
