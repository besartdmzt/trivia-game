import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { closeMessage } from "src/app/messageSlice";

const AlertMessage = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state: RootState) => state.message.isOpened);
  const { header, content, confirm } = useSelector(
    (state: RootState) => state.message.texts
  );

  const handleClose = () => {
    dispatch(closeMessage());
  };

  return (
    <Dialog
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{confirm}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertMessage;
