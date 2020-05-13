import Component from './Cascader'
import inputable from '../Form/inputable'
import inputBorder from '../hoc/inputBorder'
import { selectClass } from '../styles'
import { compose } from '../utils/func'
import absolute from '../Table/context'

const Cascader = compose(
  inputable,
  inputBorder({ className: selectClass('_'), tag: 'span' }),
  absolute
)(Component)

Cascader.displayName = 'ShineoutCascader'

export default Cascader
