import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { inputClass, selectClass } from '../styles'
import { isObject } from '../utils/is'
import Input from './Input'

export const IS_NOT_MATCHED_VALUE = 'IS_NOT_MATCHED_VALUE'

const getResultContent = (data, renderResult) => {
  if (isObject(data) && data.IS_NOT_MATCHED_VALUE) {
    return data.value
  }
  return renderResult(data)
}

// eslint-disable-next-line
function Item({ renderResult, data, disabled, onClick }) {
  const value = isObject(data) && data.IS_NOT_MATCHED_VALUE ? data.value : data
  const click = disabled ? undefined : () => onClick(value)
  return (
    <a className={selectClass('item', disabled && 'disabled')} onClick={click}>
      {getResultContent(data, renderResult)}
      {!disabled && <span className={selectClass('indicator', 'close')} />}
    </a>
  )
}

class Result extends PureComponent {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(...args) {
    const { onRemove } = this.props
    setTimeout(() => {
      onRemove(...args)
    }, 10)
  }

  renderClear() {
    const { onClear, result, disabled } = this.props

    if (onClear && result.length > 0 && disabled !== true) {
      /* eslint-disable */
      return (
        <a
          data-role="close"
          className={selectClass('indicator', 'close')}
          href="javascript:;"
          onClick={onClear}
        />
      )
      /* eslint-enable */
    }

    return null
  }

  renderInput(text, key = 'input') {
    const { multiple, onFilter, focus, onInputFocus, onInputBlur, setInputReset } = this.props
    return (
      <Input
        key={`${key}.${focus ? 1 : 0}`}
        onInputFocus={onInputFocus}
        onInputBlur={onInputBlur}
        updatAble={!multiple}
        multiple={multiple}
        focus={focus}
        text={text}
        onFilter={onFilter}
        setInputReset={setInputReset}
      />
    )
  }

  renderPlaceholder() {
    const { focus, onFilter } = this.props

    if (focus && onFilter) {
      return this.renderInput(' ')
    }

    return (
      <span className={classnames(inputClass('placeholder'), selectClass('ellipsis'))}>
        {this.props.placeholder}&nbsp;
      </span>
    )
  }

  renderResult() {
    const { multiple, result, renderResult, onFilter, focus, datum, filterText } = this.props

    if (multiple) {
      const items = result.map((d, i) => (
        <Item key={i} data={d} disabled={datum.disabled(d)} onClick={this.handleRemove} renderResult={renderResult} />
      ))

      if (focus && onFilter) {
        items.push(this.renderInput(filterText, result.length))
      }

      return items
    }

    if (onFilter) {
      return this.renderInput(getResultContent(result[0], renderResult))
    }

    return <span className={selectClass('ellipsis')}>{getResultContent(result[0], renderResult)}</span>
  }

  render() {
    const result = this.props.result.length === 0 ? this.renderPlaceholder() : this.renderResult()

    return (
      <div className={selectClass('result')}>
        {result}
        {!this.props.multiple && (
          // eslint-disable-next-line
          <a className={selectClass('indicator', 'caret')} href="javascript:;" />
        )}
        {this.renderClear()}
      </div>
    )
  }
}

Result.propTypes = {
  datum: PropTypes.object,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  filterText: PropTypes.string,
  focus: PropTypes.bool,
  multiple: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  onClear: PropTypes.func,
  onFilter: PropTypes.func,
  onInputBlur: PropTypes.func,
  onInputFocus: PropTypes.func,
  result: PropTypes.array.isRequired,
  renderResult: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  setInputReset: PropTypes.func,
}

export default Result
