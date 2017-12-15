import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/data.actions'
import InvoicesModal from './InvoicesModal'
import CreateInvoiceButton from './CreateInvoiceButton'
import InvoicesTable from './InvoicesTable'

class Invoices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
      product: undefined,
      quantity: 1
    })
  }
  setValue = (key, value) => {
    this.setState({[key]: value})
  }
  showError = (key, message) => {
    this.setState({[key]: message})
  }
  setProduct = (id) => {
    const {products} = this.props
    this.setState({
      productError: false,
      product: products.find(({id: productId}) => productId === Number(id))
    })
  }
  render() {
    const {
      invoice, saveInvoiceAction, deleteInvoiceAction, editInvoiceAction,
      addInvoiceItemAction, deleteInvoiceItemAction, setDiscountAction,
      updateInvoiceAction, updateCustomerAction, invoices, customers, products, customer
    } = this.props
    return (
      <div className="Invoices d-flex flex-column flex-1 animated fadeIn">
        <div>
          <CreateInvoiceButton onClick={this.toggleModal} className="float-right" />
          <h1>INVOICES</h1>
        </div>
        <div className="table-container d-flex flex-column flex-1">
          <InvoicesTable invoices={invoices} editInvoiceAction={editInvoiceAction} toggleModal={this.toggleModal} />
          {invoices.length === 0 && (
            <div className="d-flex flex-column flex-1 justify-content-center align-items-center">
              <p className="text-center">There are no invoices</p>
              <CreateInvoiceButton onClick={this.toggleModal} />
            </div>
          )}
        </div>
        <InvoicesModal
          isOpen={this.state.modal}
          quantity={this.state.quantity}
          product={this.state.product}
          productError={this.state.productError}
          toggleModal={this.toggleModal}
          setProduct={this.setProduct}
          setValue={this.setValue}
          showError={this.showError}
          customers={customers}
          customer={customer}
          products={products}
          invoice={invoice}
          updateCustomerAction={updateCustomerAction}
          updateInvoiceAction={updateInvoiceAction}
          saveInvoiceAction={saveInvoiceAction}
          deleteInvoiceAction={deleteInvoiceAction}
          addInvoiceItemAction={addInvoiceItemAction}
          deleteInvoiceItemAction={deleteInvoiceItemAction}
          setDiscountAction={setDiscountAction}
        />
      </div>
    )
  }
}

Invoices.displayName = 'Invoices'
const mapStateToProps = state => state.data
export default connect(mapStateToProps, actions)(Invoices)
