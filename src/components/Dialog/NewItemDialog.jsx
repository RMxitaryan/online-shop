import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createUseStyles } from "react-jss";
import { addImagesFirebase, storage } from "../../config/Config";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import CustomizedSnackbars from "../snackbar/SnackbarFailed";
import SnackbarFailed from "../snackbar/SnackbarFailed";
import SnackbarSuccess from "../snackbar/SnackbarSuccess";

const useStyles = createUseStyles({
  signActionBlok: {
    display: "flex",
    justifyContent: "center",
  },

  signBtn: {
    backgroundColor: "rgb(50,40,30)",
    color: "rgb(210,210,210)",
    "&:hover": {
      color: "rgb(50,40,30)",
    },
  },
});
function NewItemDialog({
  open,
  handleClose,
  handleSignUpClickOpen,
  handleSignInClickOpen,
}) {
  const [name, setName] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [price, setPrice] = useState("");
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarFailed, setOpenSnackbarFailed] = useState(false);
  const classes = useStyles();

  const handleCloseSnackbarSuccess = () => {
    setOpenSnackbarSuccess(!openSnackbarSuccess);
  };
  const handleCloseSnackbarFailed = () => {
    setOpenSnackbarFailed(!openSnackbarFailed);
  };

  const handleAddClick = () => {
    if (imageUpload && name.trim().length && price.trim().length) {
      const id = imageUpload.name + uuidv4();
      const imageRef = ref(storage, `images/${id}`);
      uploadBytes(imageRef, imageUpload).then((res) => {
        const imageListRef = ref(storage, "images/");
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            if (item.name === id) {
              getDownloadURL(item).then((url) => {
                addImagesFirebase(name, price, url, id);
              });
            }
          });
          handleCloseSnackbarSuccess();
          handleClose();
        });
      });
    } else {
      handleCloseSnackbarFailed();
    }
  };
  const handleCloseDialog = () => {
    handleClose();
    setOpenSnackbarFailed(false);
    setName("");
    setPrice("");
    setImageUpload(null);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Adding new item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="file"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.signActionBlok}>
          <Button onClick={handleAddClick} className={classes.signBtn}>
            Add item
          </Button>
          <Button onClick={handleCloseDialog} className={classes.signBtn}>
            Cancel
          </Button>
        </DialogActions>
        {openSnackbarFailed && (
          <SnackbarFailed
            handleCloseSnackbarFailed={handleCloseSnackbarFailed}
          />
        )}
      </Dialog>
      {openSnackbarSuccess && (
        <SnackbarSuccess
          handleCloseSnackbarSuccess={handleCloseSnackbarSuccess}
        />
      )}
    </div>
  );
}

export default NewItemDialog;
