import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import icons from '../icons'
import Image from '../Image'
import { uploadClass } from '../styles'

class ImageResult extends PureComponent {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleRecover = this.handleRecover.bind(this)
    this.bindImage = this.bindImage.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
  }

  bindImage(image) {
    this.image = image
  }

  handleRemove() {
    this.props.onRemove(this.props.index)
  }

  handleRecover() {
    const { onRecover, value, index } = this.props
    onRecover(index, value)
  }

  handlePreview() {
    const { onPreview, renderResult, value, index, values } = this.props
    if (onPreview) {
      const url = renderResult(value)
      onPreview(url, value, index, values)
      return
    }
    if (!this.image) return
    this.image.preview()
  }

  renderOptions() {
    return (
      <div className={uploadClass('image-options')}>
        {
          <a className={uploadClass('options-item')} onClick={this.handlePreview}>
            {icons.Preview}
          </a>
        }
        {this.props.onRemove && (
          <a className={uploadClass('options-item')} onClick={this.handleRemove}>
            {icons.Delete}
          </a>
        )}
      </div>
    )
  }

  render() {
    const { value, renderResult, recoverAble, renderContent, style, showRecover, index, values } = this.props
    const className = uploadClass('image-item', 'image-result', recoverAble && 'to-be-delete')
    const url = renderResult(value)

    return (
      <div style={style} className={className}>
        {url &&
          (renderContent ? (
            renderContent(url, value, index, values)
          ) : (
            <Image
              ref={this.bindImage}
              src={url}
              href={url}
              fit="center"
              width="auto"
              height={0}
              className={uploadClass('image-bg')}
            />
          ))}

        {showRecover && (
          <a className={uploadClass('recover')} onClick={this.handleRecover}>
            {icons.Recovery}
          </a>
        )}

        {this.renderOptions()}
      </div>
    )
  }
}

ImageResult.propTypes = {
  index: PropTypes.number,
  onRemove: PropTypes.func,
  onRecover: PropTypes.func,
  recoverAble: PropTypes.bool,
  renderResult: PropTypes.func,
  showRecover: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.any,
  renderContent: PropTypes.func,
  values: PropTypes.array,
  onPreview: PropTypes.func,
}

ImageResult.defaultProps = {
  renderResult: a => a,
}

export default ImageResult
