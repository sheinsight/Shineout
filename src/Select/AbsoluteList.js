import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import shallowEqual from '../utils/shallowEqual'
import { scrollConsumer } from '../Scroll/context'
import { selectClass } from '../styles'
import { docScroll } from '../utils/dom/document'

let root
function initRoot() {
  root = document.createElement('div')
  root.className = selectClass('root')
  document.body.appendChild(root)
}

export default function(List) {
  class AbsoluteList extends Component {
    constructor(props) {
      super(props)

      this.lastStyle = {}

      if (!root) initRoot()
      this.element = document.createElement('div')
      this.element.className = selectClass('absolute-wrapper')
    }

    componentDidMount() {
      root.appendChild(this.element)
    }

    componentWillUnmount() {
      root.removeChild(this.element)
    }

    getStyle() {
      const { parentElement, position, scrollElement, focus } = this.props
      const lazyResult = { focus, style: this.lastStyle }
      if (!focus) return lazyResult

      const style = {}
      if (parentElement) {
        const rect = parentElement.getBoundingClientRect()
        const scrollRect = scrollElement ? scrollElement.getBoundingClientRect() : {}

        if (
          rect.bottom < scrollRect.top ||
          rect.bottom > scrollRect.bottom ||
          rect.right < scrollRect.left ||
          rect.left > scrollRect.right
        ) {
          return { focus: false, style: this.lastStyle }
        }

        style.position = 'absolute'
        style.width = rect.width
        style.left = rect.left + docScroll.left
        if (position === 'drop-down') {
          style.top = rect.top + rect.height + docScroll.top
        } else {
          style.bottom = -(rect.top + docScroll.top)
        }
      }

      if (shallowEqual(style, this.lastStyle)) return lazyResult

      this.lastStyle = style
      return { focus, style }
    }

    render() {
      const { parentElement, position, scrollLeft, scrollTop, scrollElement, ...props } = this.props
      const className = selectClass('absolute-wrapper', position)
      const { focus, style } = props.focus ? this.getStyle() : { style: this.lastStyle }

      this.element.className = className
      return ReactDOM.createPortal(<List {...props} focus={focus} style={style} />, this.element)
    }
  }

  AbsoluteList.propTypes = {
    focus: PropTypes.bool,
    onBlur: PropTypes.func,
    parentElement: PropTypes.object,
    position: PropTypes.string,
    scrollElement: PropTypes.object,
    scrollLeft: PropTypes.number,
    scrollTop: PropTypes.number,
  }

  return scrollConsumer(AbsoluteList)
}
