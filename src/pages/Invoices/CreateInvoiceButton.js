import React from 'react'
import {Button} from 'reactstrap'

const CreateInvoiceButton = ({ onClick, className }) => (
  <Button
    color="success"
    size="lg"
    className={className}
    role="button"
    onClick={onClick}>
    CREATE NEW INVOICE
  </Button>
)

export default CreateInvoiceButton
