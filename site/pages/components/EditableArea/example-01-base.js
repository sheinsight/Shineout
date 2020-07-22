/**
 * cn - 基本用法
 *    -- EditableArea 默认展示一行，超过一行的内容用...代替
 * en - Base
 *    -- Editablearea displays one line by default, and replace the content of the newline with...
 */

import React from 'react'
import { EditableArea } from 'shineout'

export default function () {
  return <EditableArea bordered placeholder="input something" style={{ width: 300 }} />
}
