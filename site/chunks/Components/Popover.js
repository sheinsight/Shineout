/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Popover/cn.md'
import en from 'doc/pages/components/Popover/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    title: locate(
      '基本用法 \n Popover 放置在一个组件内部弹出',
      'Base \n The basic usage.'
    ),
    component: require('doc/pages/components/Popover/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-1-base.js'),
  },
  {
    name: '2-position',
    title: locate(
      '弹出位置 \n 内置了十二个弹出的位置',
      'Position \n Twelve pop-up positions are built in.'
    ),
    component: require('doc/pages/components/Popover/example-2-position.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-2-position.js'),
  },
  {
    name: '3-click',
    title: locate(
      '点击触发 \n 默认是移入组件触发，设置 trigger 为 \'click\'，可以改为点击触发',
      'Trigger \n Set the trigger property to change the trigger event to \'click\'.'
    ),
    component: require('doc/pages/components/Popover/example-3-click.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-3-click.js'),
  },
  {
    name: '4-confirm',
    title: locate(
      '确认 \n Popover.Confirm 提供弹出气泡式的确认框',
      'Confirm \n Popover.Confirm provide popover confirm.'
    ),
    component: require('doc/pages/components/Popover/example-4-confirm.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-4-confirm.js'),
  },
  {
    name: '5-func',
    title: locate(
      '关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件',
      'Close \n Set the content property to a function, you can handle the close event inside the popup panel.'
    ),
    component: require('doc/pages/components/Popover/example-5-func.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-5-func.js'),
  },
  {
    name: '6-type',
    title: locate(
      '样式 \n 内置四种样式',
      'Type \n Four styles are built in.'
    ),
    component: require('doc/pages/components/Popover/example-6-type.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-6-type.js'),
  },
  {
    name: '7-type',
    title: locate(
      ' \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式',
      ' \n Customize the style with background and border.'
    ),
    component: require('doc/pages/components/Popover/example-7-type.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-7-type.js'),
  },
  {
    name: '8-old',
    title: locate(
      '旧API \n 旧接口使用 Popover 包在组件外使用，通过 content 传递内容，已不推荐',
      'Old API \n Old API, is out of date.'
    ),
    component: require('doc/pages/components/Popover/example-8-old.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-8-old.js'),
  },
  {
    name: '9-event',
    title: locate(
      '事件 \n 提供了onOpen 和 onClose 事件',
      'Events \n provider onOpen and onClose event'
    ),
    component: require('doc/pages/components/Popover/example-9-event.js').default,
    rawText: require('!raw-loader!doc/pages/components/Popover/example-9-event.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
