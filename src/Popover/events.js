import React from 'react'
import ReactDOM from 'react-dom'
import getCommonContainer from '../utils/dom/popContainer'
import { popoverClass } from '../styles'

let currentProps = null
const div = document.createElement('div')
div.style.display = 'none'

getCommonContainer().appendChild(div)

const arrow = document.createElement('div')
arrow.className = popoverClass('arrow')
div.appendChild(arrow)

const inner = document.createElement('div')
inner.className = popoverClass('content')
div.appendChild(inner)

let timer = null
let currentId

export function hide(delay = 500) {
  timer = setTimeout(() => {
    div.style.display = 'none'
    div.className = ''
    currentId = undefined
  }, delay)
}

const hide0 = hide.bind(null, 0)

function clickaway(e) {
  if (div.contains(e.target)) return
  hide(0)
  document.removeEventListener('click', clickaway)
}

div.addEventListener('mouseenter', () => {
  if (!timer) return
  clearTimeout(timer)
  document.addEventListener('click', clickaway)
})

div.addEventListener('mouseleave', () => {
  clearTimeout(timer)
  if (currentProps && currentProps.trigger === 'click') return
  hide()
})

export function show(props, id) {
  const { position, style, content, background, border, noArrow, type } = props
  currentProps = props
  // set current id
  currentId = id

  if (timer) clearTimeout(timer)

  div.style.cssText = 'display: none'
  Object.keys(style).forEach(k => {
    div.style[k] = style[k]
  })

  if (style.right) div.setAttribute('raw-right', style.right)
  if (style.left) div.setAttribute('raw-left', style.left)
  div.setAttribute('raw-top', style.top)
  div.style.background = background || ''
  inner.style.background = background || ''
  arrow.style.background = background || ''

  div.style.borderColor = border || ''
  arrow.style.borderColor = border || ''

  const className = popoverClass('_', position, type)

  arrow.style.display = noArrow ? 'none' : 'block'

  // fix safari
  setTimeout(() => {
    div.style.display = 'block'
    div.className = className
  }, 0)

  let newContent = typeof content === 'function' ? content(hide0) : content
  if (typeof newContent === 'string') newContent = <span className={popoverClass('text')}>{newContent}</span>
  ReactDOM.render(newContent, inner)

  document.addEventListener('click', clickaway)
}

export function move(id, pos) {
  if (id === currentId) {
    // eslint-disable-next-line no-return-assign
    Object.keys(pos).map(key => (div.style[key] = pos[key]))
  }
}

export function isCurrent(id) {
  return id === currentId
}
