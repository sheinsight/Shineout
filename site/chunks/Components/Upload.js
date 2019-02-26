/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Upload/cn.md'
import en from 'doc/pages/components/Upload/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate(
      '基本用法 \n 基础的文件上传',
      'Base \n Basic usage for uploading file'
    ),
    component: require('doc/pages/components/Upload/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-01-base.js'),
  },
  {
    name: '02-image',
    title: locate(
      '上传图片 \n 使用 Upload.Image 处理带预览的图片上传',
      'Image \n Use Upload.Image to upload and preview images.'
    ),
    component: require('doc/pages/components/Upload/example-02-image.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-02-image.js'),
  },
  {
    name: '03-button',
    title: locate(
      '按钮上传 \n 使用 Upload.Button 展示单个文件的上传进度',
      'Button \n Use Upload.Button to show the upload progress of individual files'
    ),
    component: require('doc/pages/components/Upload/example-03-button.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-03-button.js'),
  },
  {
    name: '04-validator',
    title: locate(
      '校验 \n 通过 validator.imageSize 校验图片长宽，本例为 200px * 100px',
      'Validator \n Set validator.imageSize to validate the width and height of the image.'
    ),
    component: require('doc/pages/components/Upload/example-04-validator.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-04-validator.js'),
  },
  {
    name: '05-filesize',
    title: locate(
      '文件大小 \n 文件大小校验，本例为 10KB',
      ' \n Set validator.size to validate the size of the file. This example is 10KB.'
    ),
    component: require('doc/pages/components/Upload/example-05-filesize.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-05-filesize.js'),
  },
  {
    name: '06-error',
    title: locate(
      '异常处理 \n onError 用来处理上传到服务器返回的异常',
      'Error \n Set onError to handle exceptions returned by uploading to the server.'
    ),
    component: require('doc/pages/components/Upload/example-06-error.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-06-error.js'),
  },
  {
    name: '07-recover',
    title: locate(
      '恢复删除 \n 设置 recoverAble 为 true，点击删除后，文件会标记为已删除，可以通过恢复图标恢复',
      'Recover \n Set reconverAble to true, Clicking delete icon will not remove the file, but will mark it as deleted.'
    ),
    component: require('doc/pages/components/Upload/example-07-recover.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-07-recover.js'),
  },
  {
    name: '08-request',
    title: locate(
      '自定义上传 \n 通过 request 函数，替代默认上传方法',
      'Custom Request \n Set request property to use your own XMLHttpRequest.'
    ),
    component: require('doc/pages/components/Upload/example-08-request.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-08-request.js'),
  },
  {
    name: '09-zip',
    title: locate(
      ' \n 此事例演示通过自定义函数压缩文件后上传',
      ' \n Zip file and upload.'
    ),
    component: require('doc/pages/components/Upload/example-09-zip.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-09-zip.js'),
  },
  {
    name: '10-defaultValue',
    title: locate(
      '默认值 \n 默认值示例',
      'defaultValue \n defaultValue example'
    ),
    component: require('doc/pages/components/Upload/example-10-defaultValue.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-10-defaultValue.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
