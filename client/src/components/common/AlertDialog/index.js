import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import history from "../../../store/history";
// import { deletedContact, openDeleteModal } from 'store/contacts/actions';

export default function AlertDialog({ showAlert, closeAlert }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={showAlert}
        onClose={closeAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Ваши ответы не будут сохранены. Вы действительно хотите покинуть
          страницу?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => history.push("/chemistry")} color="primary">
            Yes
          </Button>
          <Button onClick={closeAlert} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
