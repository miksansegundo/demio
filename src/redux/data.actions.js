import http from '../lib/http'

export const saveInvoiceAction = ({ customer, discount, total, invoice_items }) => async dispatch => {
  const { data: { id } } = await http.post('invoices', { customer_id: customer.id, discount, total, invoice_items })
  dispatch({
    type: 'SAVE_INVOICE',
    id, customer, discount, total, invoice_items
  })
}

export const updateInvoiceAction = ({ id, customer, discount, total, invoice_items }) => async dispatch => {
  await http.put('invoices/' + id, { customer_id: customer.id, discount, total, invoice_items })
  dispatch({
    type: 'UPDATE_INVOICE',
    id, customer, discount, total, invoice_items
  })
}

export const deleteInvoiceAction = invoice_id => async dispatch => {
  await http.delete('invoices/' + invoice_id)
  dispatch({
    type: 'DELETE_INVOICE',
    invoice_id
  })
}

export const editInvoiceAction = invoice_id => {
  return {
    type: 'EDIT_INVOICE',
    invoice_id
  }
}

export const updateCustomerAction = customer_id => {
  return {
    type: 'UPDATE_CUSTOMER',
    customer_id
  }
}

export const addInvoiceItemAction = ({ name, price, product_id, quantity }) => dispatch => {
  dispatch({
    type: 'ADD_PRODUCT',
    name, price, product_id, quantity
  })
  dispatch(updateTotal())
}

export const deleteInvoiceItemAction = index => dispatch => {
  dispatch({
    type: 'DELETE_PRODUCT',
    index
  })
  dispatch(updateTotal())
}

export const setDiscountAction = discount => dispatch => {
  dispatch({
    type: 'SET_DISCOUNT',
    discount
  })
  dispatch(updateTotal())
}

export const updateTotal = () => {
  return {
    type: 'UPDATE_TOTAL'
  }
}

export const updateDataAction = data => {
  return {
    type: 'UPDATE_DATA',
    data
  }
}
