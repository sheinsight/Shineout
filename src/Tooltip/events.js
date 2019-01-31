import { tooltipClass } from '../styles'

const div = document.createElement('div')
div.style.display = 'none'
document.body.appendChild(div)

const arrow = document.createElement('div')
arrow.className = tooltipClass('arrow')
div.appendChild(arrow)

const inner = document.createElement('div')
inner.className = tooltipClass('inner')
div.appendChild(inner)

let currentId

export function hide() {
  div.style.display = 'none'
  div.className = ''
  currentId = undefined
}

function clickaway() {
  hide()
  document.removeEventListener('click', clickaway)
}

export function show(props, id, innerStyle) {
  const { position, style, tip, trigger, animation } = props

  currentId = id

  div.style.cssText = 'display: none'
  Object.keys(style).forEach(k => {
    div.style[k] = style[k]
  })

  console.log(style, div.style)

  const className = tooltipClass('_', 'in', position, animation && 'animation')

  // fix safari
  setTimeout(() => {
    div.style.display = 'block'
    div.className = className
  }, 0)

  inner.innerText = tip
  inner.removeAttribute('style')
  if (innerStyle) {
    Object.keys(innerStyle).forEach(k => {
      inner.style[k] = innerStyle[k]
    })
  }

  if (trigger === 'click') {
    document.addEventListener('click', clickaway)
  }
}

export function move(id, left, top) {
  if (id === currentId) {
    div.style.left = `${left}px`
    div.style.top = `${top}px`
  }
}

export function isCurrent(id) {
  return id === currentId
}
