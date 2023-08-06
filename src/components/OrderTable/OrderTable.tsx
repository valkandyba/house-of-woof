import React, { useContext } from 'react';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import CartContext from '../../store/Cart/cart-context';

import classes from './OrderTable.module.scss';
import { CartItem } from '../../store/types';
import { Delete } from '@mui/icons-material';

interface OrderTableProps {
  orderItems: CartItem[];
}

const TAX_RATE = 0.2;

function toFixedCurrency(num: number) {
  return `${num.toFixed(2)}`;
}

function calculateItemTotal(item: CartItem) {
  const { amount, price } = item;
  return amount * price;
}

function calculateOrderTotal(items: readonly CartItem[]) {
  return items.map(calculateItemTotal).reduce((sum, i) => sum + i, 0);
}

const OrderTable: React.FC<OrderTableProps> = () => {
  const { handleDecrementItem, handleRemoveItem, items } =
    useContext(CartContext);

  const invoiceTotal = calculateOrderTotal(items);
  const invoiceSubtotal = invoiceTotal / (TAX_RATE + 1);
  const invoiceTaxes = invoiceTotal - invoiceSubtotal;
  const hasItems = items.length > 0;

  const handleDecrementClick = (id: string) => {
    const item = items.find(item => item.id === id);

    if (item) {
      if (item.amount === 1) {
        handleRemoveItem(id);
      } else {
        handleDecrementItem(id);
      }
    }
  };

  return (
    <div className={classes.order}>
      {hasItems && (
        <>
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
                {items.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className={classes['item-cell']}>
                        <span className={classes['decrement-btn']}>
                          <IconButton
                            className={`${classes.button} ${classes.minus}`}
                            color='primary'
                            onClick={() => handleDecrementClick(row.id)}
                          >
                            <Delete />
                          </IconButton>
                        </span>
                        <img
                          className={classes['item-img']}
                          src={row.img}
                          alt={row.name}
                        />
                        <span>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align='right'>{row.amount}</TableCell>
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
        </>
      )}
    </div>
  );
};

export default OrderTable;
