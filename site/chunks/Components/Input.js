/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'
import log from 'doc/utils/log'
import locate from 'doc/locate'

import cn from 'doc/pages/components/Input/cn.md'
import en from 'doc/pages/components/Input/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Input/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-1-base.js'),
  },
  {
    title: locate('大小 \n 提供了三种尺寸的输入框', 'Size'),
    component: require('doc/pages/components/Input/example-2-size.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-2-size.js'),
  },
  {
    title: locate('数字 \n type=number 时，会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数', 'number type'),
    component: require('doc/pages/components/Input/example-3-type.js').default,
    rawText: require('!raw-loader!doc/pages/components/Input/example-3-type.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
