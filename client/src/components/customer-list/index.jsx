import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

export function CustomerList (){
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', properties: 2, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', properties: 1, status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', properties: 3, status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    properties: 0,
    status: 'Active',
  });

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCustomer = () => {
    setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
    setOpenDialog(false);
    setNewCustomer({ name: '', email: '', properties: 0, status: 'Active' });
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Customer List
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <TextField
          label="Search customers"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Add Customer
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Properties</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.properties}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    color={customer.status === 'Active' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Properties"
            type="number"
            fullWidth
            value={newCustomer.properties}
            onChange={(e) =>
              setNewCustomer({ ...newCustomer, properties: parseInt(e.target.value, 10) })
            }
          />
          <TextField
            margin="dense"
            label="Status"
            select
            fullWidth
            value={newCustomer.status}
            onChange={(e) =>
              e.target.value === 'Active' || e.target.value === 'Inactive'
                ? setNewCustomer({ ...newCustomer, status: e.target.value })
                : null
            }
            SelectProps={{
              native: true,
            }}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddCustomer} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
