import * as React from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import classes from './OrderTable.module.scss';

interface OrderTableProps {
  orderItems: OrderItem[];
}

interface OrderItem {
  name: string;
  img: string;
  qty: number;
  price: number;
}

const TAX_RATE = 0.2;

function toFixedCurrency(num: number) {
  return `${num.toFixed(2)}`;
}

function calculateItemTotal(item: OrderItem) {
  const { qty, price } = item;
  return qty * price;
}

function calculateOrderTotal(items: readonly OrderItem[]) {
  return items.map(calculateItemTotal).reduce((sum, i) => sum + i, 0);
}

const OrderTable: React.FC<OrderTableProps> = ({ orderItems }) => {
  const invoiceTotal = calculateOrderTotal(orderItems);
  const invoiceSubtotal = invoiceTotal / (TAX_RATE + 1);
  const invoiceTaxes = invoiceTotal - invoiceSubtotal;

  return (
    <div className={classes.order}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className={classes['item-cel']}>
                    <img
                      className={classes['item-img']}
                      src={row.img}
                      alt={row.name}
                    />
                    <span>{row.name}</span>
                  </div>
                </TableCell>
                <TableCell align='right'>{row.qty}</TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>
                  {toFixedCurrency(calculateItemTotal(row))}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>
                {toFixedCurrency(invoiceSubtotal)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align='right'>{`${(TAX_RATE * 100).toFixed(
                0,
              )} %`}</TableCell>
              <TableCell align='right'>
                {toFixedCurrency(invoiceTaxes)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align='right'>
                {toFixedCurrency(invoiceTotal)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes['button-wrap']}>
        <Button size='large' variant='contained'>
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default OrderTable;
