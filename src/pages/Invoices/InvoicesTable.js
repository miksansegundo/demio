import React from 'react'
import {Table} from 'reactstrap'

const renderInvoiceRow = (editInvoiceAction, toggleModal) => ({ id, customer, discount, total }) => {
  return (
    <tr key={id} className="table__row--border-bottom" onClick={() => {
      editInvoiceAction(id)
      toggleModal()
    }}>
      <td>Invoice #{id}</td>
      <td>{customer.name}</td>
      <td className="text-center">{discount}%</td>
      <td className="text-right">{total.toFixed(2)}$</td>
    </tr>
  )
}
const InvoiceTable = ({invoices, editInvoiceAction, toggleModal}) => (
  <Table hover className="table--striped">
    <thead>
    <tr>
      <th>Invoice #</th>
      <th>Customer</th>
      <th width="20">Discount</th>
      <th>Total</th>
    </tr>
    </thead>
    <tbody>
      {invoices.map(renderInvoiceRow(editInvoiceAction, toggleModal))}
    </tbody>
  </Table>
)

export default InvoiceTable
