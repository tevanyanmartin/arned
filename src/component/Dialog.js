import * as React from "react";
import PropTypes from "prop-types";
import '../css/dialog.css';
import { styled,
  Button,
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  IconButton, 
  Typography} from "@mui/material/";
  import { useDispatch,useSelector } from "react-redux";
import { selectDialog } from "../selectors/selectors";
import { SET_DIALOG } from "../reducer/reducer";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
};

export default function CustomizedDialogs(props) {
  const dispatch = useDispatch();
  const dialog = useSelector(selectDialog)

  const handleClose = () => {
    dispatch({
      type:SET_DIALOG,
      payload:{
        dialogState:false
      }
    })
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={dialog.dialogState}
        className='bootstrap-dialog'
      >
        <BootstrapDialogTitle className='bootstrap-dialog-title' id="customized-dialog-title">
          Armed
        </BootstrapDialogTitle>
        <DialogContent className="dialog-content" dividers>
          <Typography className="typography" gutterBottom>
          Կանաչ QR կոդ `սերտիֆիկատը վավեր է
          </Typography>
        </DialogContent>
        <DialogActions className="dialog-action">
          <Button className="button" autoFocus onClick={handleClose}>
            ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
