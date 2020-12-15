import React from 'react'

interface IShowKey {
  value: string
  label?: string
}

export interface ITableData {
  data: any[]
  showKeys?: IShowKey[],
  TRComponent?: any
}

export interface ITRComponent {
  index: number
  row: any
  cells: any[]
} 

export default function TableData({ data, showKeys, TRComponent = TR }: ITableData) {
  if (data.length === 0) return null
  const keys = getHead(data, showKeys)
  const getCells = (row: any) => getCellsFromKeys(row, keys)
  return (
    <table>
      <thead>
        <tr>
          {keys.map(({ value, label }) => (
            <th key={value}>{label || value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, key) => (
          <TRComponent key={key} index={key} row={row} cells={getCells(row)} />
        ))}
      </tbody>
    </table>
  )
}
const TR = ({ cells }: ITRComponent) => (
  <tr>
    {cells.map((cell, key) => (
      <td key={key}>
        {cell}
      </td>
    ))}
  </tr>
)

const getHead = (data: any[], showKeys: IShowKey[] = []): IShowKey[] => {
  if (showKeys.length > 0) return showKeys
  return Object.keys(data[0]).map(value => ({ value }))
}

const getCellsFromKeys = (row: any = {}, showKeys: IShowKey[] = []): any[] => {
  return showKeys.map(({ value }) => row[value])
}
