const defaultInvoice = {
  invoice_items: [],
  total: 0,
  discount: 0
}
const defaultState = {
  invoices: [],
  products: [],
  customers: [],
  invoice: defaultInvoice
}
const data = (state = defaultState, action) => {
  if (action.type === 'SAVE_INVOICE') {
    const { id, customer, discount, total, invoice_items } = action
    return {
      ...state,
      invoice:  {...defaultInvoice},
      invoices: [
        ...state.invoices,
        {
          id,
          customer,
          discount,
          total,
          invoice_items
        }
      ]
    }
  }
  if (action.type === 'UPDATE_INVOICE') {
    const { id, customer, discount, total, invoice_items } = action
    const index = state.invoices.findIndex(({ id: invoice_id }) => invoice_id === id)
    return {
      ...state,
      invoice:  {...defaultInvoice},
      invoices: [
        ...state.invoices.slice(0, index),
        {
          id,
          customer,
          discount,
          total,
          invoice_items
        },
        ...state.invoices.slice(index + 1, state.invoices.length),
      ],
    }
  }
  if (action.type === 'DELETE_INVOICE') {
    const { invoice_id } = action
    const index = state.invoices.findIndex(({ id }) => invoice_id === Number(id))
    return {
      ...state,
      invoices: [
        ...state.invoices.slice(0, index),
        ...state.invoices.slice(index + 1, state.invoices.length),
      ],
      invoice:  {...defaultInvoice}
    }
  }
  if (action.type === 'EDIT_INVOICE') {
    const { invoice_id } = action
    const invoice = state.invoices.find(({ id }) => invoice_id === Number(id))
    return {
      ...state,
      invoice
    }
  }
  if (action.type === 'UPDATE_CUSTOMER') {
    const { customer_id } = action
    const customer = state.customers.find(({id}) => Number(customer_id) === id)
    return {
      ...state,
      invoice: {
        ...state.invoice,
        customer
      }
    }
  }
  if (action.type === 'ADD_PRODUCT') {
    const { product_id, price, name, quantity } = action
    return {
      ...state,
      invoice: {
        ...state.invoice,
        invoice_items: [
          ...state.invoice.invoice_items,
          {
            id: new Date().getTime(),
            quantity,
            product_id,
            price,
            name
          }
        ]
      }
    }
  }
  if (action.type === 'DELETE_PRODUCT') {
    const { index } = action
    return {
      ...state,
      invoice: {
        ...state.invoice,
        invoice_items: [
          ...state.invoice.invoice_items.slice(0, index),
          ...state.invoice.invoice_items.slice(index + 1, state.invoice.invoice_items.length),
        ]
      }
    }
  }
  if (action.type === 'UPDATE_DATA') {
    const { data } = action
    return {
      ...state,
      ...data
    }
  }
  if (action.type === 'SET_DISCOUNT') {
    const { discount } = action

    return {
      ...state,
      invoice: {
        ...state.invoice,
        discount
      }
    }
  }
  if (action.type === 'UPDATE_TOTAL') {
    const total = state.invoice.invoice_items.reduce(
      (acc, {price, quantity}) => acc + (price * quantity), 0)
    return {
      ...state,
      invoice: {
        ...state.invoice,
        total: total - (total * state.invoice.discount / 100),
      }
    }
  }
  return state
}

export default data
