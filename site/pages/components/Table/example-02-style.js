/**
 * cn - 边框和底纹
 * en - Style (bordered, striped)
 */
import React from 'react'
import { Table } from 'shineout'
import { fetchSync } from 'doc/data/table'

const data = fetchSync(4)

const columns = [
  { title: 'id', render: 'id', width: 42 },
  { title: 'Name', render: d => `${d.firstName} ${d.lastName}` },
  { title: 'Country', render: 'country' },
  { title: 'Position', render: 'position' },
  { title: 'Office', render: 'office' },
]

export default function () {
  return (
    <Table keygen="id" striped bordered columns={columns} data={data} />
  )
}
