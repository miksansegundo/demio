import Invoices from './Invoices'
import withData from '../../lib/withData'

export default withData(Invoices, ['invoices', 'products', 'customers'])
