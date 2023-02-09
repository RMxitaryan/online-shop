import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { addItemFirebase, auth } from "../../config/Config";
import SignDialog from "../Dialog/SignDialog";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selector";
import NewItemDialog from "../Dialog/NewItemDialog";
const useStyles = createUseStyles({
  cardContainer: {
    position: "relative",
    display: "inline-block",
    width: "300px",
    margin: "40px 30px 30px 40px",
    verticalAlign: "top",
    transition: "opacity .5s ease",
    willChange: "opacity",
    height: "420px",
  },
  pictureWrapper: {
    width: "100%",
    height: "420px",
    overflow: "hidden",
    backgroundColor: "#26211e",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  //   pictureSizes: {
  //     maxWidth: "90%",
  //     maxHeight: "80%",
  //     bottom: "10%",
  //     top: "60",
  //     margin: "10px",
  //     position: "absolute",
  //     transition: "transform .3s ease,opacity .3s,-webkit-transform .3s ease",
  //     "&:hover": {
  //       cursor: "pointer",
  //       transform: "scale(1.1)",
  //     },
  //   },

  cardFooter: {
    position: "relative",
    paddingBottom: "5px",
    marginTop: "11px",
    fontSize: "14px",
    position: "relative",
    display: "block",
    maxHeight: "4.5em",
    overflow: "hidden",
    lineHeight: "1.5",
  },
  addIcon: {
    fontSize: "75px",
    color: "white",
  },
  addIconWrapper: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#6b6666",
    },
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
  },
});

export const AddCard = ({
  handleSignUpClickOpen,
  handleSignInClickOpen,
  openHome,
  src,
  price,
  name,
  updater,
  setUpdater,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSignDialog, setOpenSignDialog] = useState(false);
  const currentUser = useSelector(selectUser);
  const [openNewItemDialog, setOpenNewItemDialog] = useState(false);

  const handelAddClick = () => {
    if (auth.currentUser) {
      setOpen(!open);
    } else {
      setOpenSignDialog(true);
    }
  };

  // useEffect(() => {
  // 	if (!auth.currentUser) {
  // 		setIsAdd(false);
  // 		setIsFavorite(false);
  // 	}
  // }, [openHome]);
  return (
    <article className={classes.cardContainer}>
      <div className={classes.pictureWrapper}>
        <div className={classes.addIconWrapper}>
          <AddIcon onClick={handelAddClick} className={classes.addIcon} />
        </div>
      </div>

      <SignDialog
        open={openSignDialog}
        handleClose={() => {
          setOpenSignDialog(false);
        }}
        handleSignUpClickOpen={handleSignUpClickOpen}
        handleSignInClickOpen={handleSignInClickOpen}
      />
      <NewItemDialog
        updater={updater}
        setUpdater={setUpdater}
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </article>
  );
};
