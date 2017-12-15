import React from 'react'
import {Table, Input, Button, FormFeedback}  from 'reactstrap'

const renderInvoiceItems = (deleteInvoiceItemAction) => ({id, name, price, quantity}, index) => (
  <tr key={id} className="animated slideInUp">
    <td>{name}</td>
    <td className="text-right">{price && price.toFixed(2)}</td>
    <td className="text-center">{quantity}</td>
    <td className="text-center">
      <Button
        color="danger"
        size="sm"
        onClick={() => deleteInvoiceItemAction(index)}
      >REMOVE PRODUCT</Button>
    </td>
  </tr>
)

const renderProduct = ({name, id}) => (
  <option key={id} value={id}>{name}</option>
)

const renderNewInvoiceItem = ({
  products, product, product: {id: product_id, price} = {}, quantity,
  addInvoiceItemAction, setProduct, setValue, showError, productError }) => (
  <tr>
    <td>
      <Input
        type="select"
        name="product"
        value={product_id}
        id="select-product"
        {...productError ? { valid: false } : {}}
        onChange={({target: {value}}) => setProduct(value)}
      >
        <option value="">Select Product</option>
        {products.map(renderProduct)}
      </Input>
      {productError && <FormFeedback className="animated fadeIn">{productError}</FormFeedback>}
    </td>
    <td className="text-right">{price}</td>
    <td>
      <Input
        type="number"
        value={quantity}
        min={1}
        className="text-center"
        onChange={({target: {value}}) => setValue('quantity', value)}
      />
    </td>
    <td width="20" className="text-center">
      <Button
        color="success"
        size="sm"
        className="w-100"
        onClick={() => product
          ? addInvoiceItemAction({product_id, ...product, quantity})
          : showError('productError', 'No product selected')
        }
      >ADD PRODUCT</Button>
    </td>
  </tr>
)

const ProductsTable = ({
  invoice_items, deleteInvoiceItemAction, products, product, price, quantity,
  addInvoiceItemAction, setProduct, setValue, showError, productError }) => (
  <Table className="table--striped table--compact">
    <thead>
    <tr>
      <th>Name</th>
      <th className="text-right">Price</th>
      <th width="20">Quantity</th>
      <th width="20" className="text-center">Action</th>
    </tr>
    </thead>
    <tbody>
      {invoice_items.map(renderInvoiceItems(deleteInvoiceItemAction))}
      {renderNewInvoiceItem({
        products, product, price, quantity, addInvoiceItemAction, setProduct, setValue, showError, productError
      })}
    </tbody>
  </Table>
)

export default ProductsTable
