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
  rows: Row[];
}

interface Row {
  name: string;
  img: string;
  qty: number;
  price: number;
}

const TAX_RATE = 0.2;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, price: number) {
  return qty * price;
}

function total(items: readonly Row[]) {
  return items
    .map(({ qty, price }) => priceRow(qty, price))
    .reduce((sum, i) => sum + i, 0);
}

const OrderTable: React.FC<OrderTableProps> = ({ rows }) => {
  const invoiceTotal = total(rows);
  const invoiceSubtotal = (invoiceTotal / (TAX_RATE * 100 + 100)) * 100;
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
            {rows.map((row, index) => (
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
                  {ccyFormat(priceRow(row.qty, row.price))}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align='right'>{`${(TAX_RATE * 100).toFixed(
                0,
              )} %`}</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
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
