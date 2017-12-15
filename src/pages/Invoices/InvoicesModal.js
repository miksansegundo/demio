import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup, Input, Label } from 'reactstrap'
import ProductsTable from './ProductsTable'
import TotalDiscountTable from './TotalDiscountTable'

const renderCustomer = ({name, id}) => (
  <option key={id} value={id}>{name}</option>
)

const CustomerList = ({ customers, updateCustomerAction, customer: {id} }) => (
  <div className="mr-5 w-25">
    <Label for="select-customer">Customer</Label>
    <Input
      type="select"
      name="customer"
      value={id}
      id="select-customer"
      onChange={({target: {value}}) => updateCustomerAction(value)}
    >
      {customers.map(renderCustomer)}
    </Input>
  </div>
)

const CustomerData = ({ customer: { id, address, phone }}) => (
  <div className="w-25 ml-auto text-right">
    <div className="overflow-hidden">
      <Label>Address</Label>
      <p key={`${id}-address`} className="animated slideInRight">
        {address.split(',').map(
          line => <span key={line} className="d-block">{line}</span>
        )}
      </p>
      <Label>Phone</Label>
      <p key={`${id}-phone`} className="animated slideInRight">{phone}</p>
    </div>
  </div>
)

const InvoiceModal = ({
  isOpen, toggleModal, saveInvoiceAction, updateInvoiceAction, deleteInvoiceAction, updateCustomerAction,
  customers, price, quantity, addInvoiceItemAction, deleteInvoiceItemAction, setProduct, setDiscountAction,
  products, product, setValue, showError, productError, invoice: {id, total, discount, invoice_items, customer = customers[0]}
}) => (
  <Modal isOpen={isOpen} toggle={toggleModal} size="lg" className="invoices-modal">
    <ModalHeader>ADD NEW INVOICE</ModalHeader>
    <ModalBody>
      <div className="d-flex flex-1">
        <CustomerList customers={customers} updateCustomerAction={updateCustomerAction} customer={customer} />
        <CustomerData customer={customer} />
      </div>
      <FormGroup>
        <Label>Products</Label>
        <ProductsTable
          {...{price, quantity, addInvoiceItemAction, deleteInvoiceItemAction, setProduct,
          invoice_items, products, product, setValue, showError, productError}}
        />
        <TotalDiscountTable total={total} discount={discount} setDiscountAction={setDiscountAction} />
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => {
        toggleModal()
        if (id) {
          updateInvoiceAction({
            id, customer, discount, total, invoice_items
          })
        } else {
          saveInvoiceAction({
            customer, discount, total, invoice_items
          })
        }
      }}
      >SAVE INVOICE</Button>{' '}
      <Button color="danger" onClick={() => {
        toggleModal()
        deleteInvoiceAction(id)
      }}>DELETE INVOICE</Button>
    </ModalFooter>
  </Modal>
)

export default InvoiceModal
