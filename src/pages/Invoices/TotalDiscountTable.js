import React from 'react'
import {Table, Input, InputGroup, InputGroupAddon}  from 'reactstrap'

const TotalDiscountTable = ({ total, discount, setDiscountAction }) => (
  <div className="d-flex">
    <Table className="w-40 ml-auto table--compact">
      <thead>
      <tr>
        <th className="w-50">DISCOUNT</th>
        <th className="w-50">TOTAL</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <InputGroup>
            <Input
              type="number"
              min={0}
              max={100}
              value={discount}
              className="text-center"
              onChange={({target: {value}}) => setDiscountAction(value)}
            />
            <InputGroupAddon>%</InputGroupAddon>
          </InputGroup>
        </td>
        <td className="font-weight-bold text-right h4 animated pulse" key={`${total}`}>
          ${total.toFixed(2)}
        </td>
      </tr>
      </tbody>
    </Table>
  </div>
)

export default TotalDiscountTable
