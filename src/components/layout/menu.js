import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CallMadeIcon from '@mui/icons-material/CallMade';
import GradingIcon from '@mui/icons-material/Grading';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

export const menuItems = (
  <div>
    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem to="/lista-productos" component={Link}>
      <ListItemIcon>
        <PeopleAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Lista de Productos" />
    </ListItem>
    <ListItem to="/agregar-producto" component={Link}>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar Producto" />
    </ListItem>
    <ListItem to="/hacer-pedido" component={Link}>
      <ListItemIcon>
        <CallMadeIcon />
      </ListItemIcon>
      <ListItemText primary="Hacer Pedido" />
    </ListItem>
    <ListItem to="/ver-ordenes" component={Link}>
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText primary="Ver ordenes" />
    </ListItem>
    <ListItem to="/salir" component={Link}>
      <ListItemIcon>
        <GradingIcon />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItem>
  </div>
);