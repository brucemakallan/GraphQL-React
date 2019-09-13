import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Slide,
  DialogContent,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Alert = ({ open, descriptions, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    TransitionComponent={Transition}
    keepMounted
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent>
      <List>
        {descriptions.map((description, index) => (
          <ListItem key={String(index)}>
            <ListItemText primary={description} />
          </ListItem>
        ),)}
      </List>
    </DialogContent>
  </Dialog>
);

Alert.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Alert;
