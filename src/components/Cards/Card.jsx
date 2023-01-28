import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

const useStyles = createUseStyles({
  cardContainer: {
    position: "relative",
    display: "inline-block",
    width: "300px",
    margin: "40px 30px 30px 40px",
    verticalAlign: "top",
    transition: "opacity .5s ease",
    willChange: "opacity",
  },
  pictureWrapper: {
    position: "relative",
    width: "100%",
    height: "420px",
    overflow: "hidden",
    backgroundColor: "#26211e",
    borderRadius: "12px",
  },
  pictureSizes: {
    maxWidth: "90%",
    maxHeight: "80%",
    bottom: "10%",
    top: "60",
    margin: "10px",
    position: "absolute",
    transition: "transform .3s ease,opacity .3s,-webkit-transform .3s ease",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  addIcon: {
    position: "absolute",
    color: "white",
    pointerEvents: "auto",
    top: "10px",
    left: "90%",
    padding: "0",
    backgroundColor: "transparent",
    border: "none",
    transition: "all .2s ease-out",
    width: "20px",
    margin: "0",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.5)",
      borderRadius: "27.5px",
      transition: "opacity .3s ease 0s,background-color .3s ease 0s",
      backgroundColor: "#ef6f2e",
    },
  },
  addedItem: {
    position: "absolute",
    color: "white",
    pointerEvents: "auto",
    top: "10px",
    left: "90%",
    padding: "0",
    backgroundColor: "transparent",
    border: "none",
    transition: "all .2s ease-out",
    width: "20px",
    margin: "0",
    borderRadius: "27.5px",
    backgroundColor: "#ef6f2e",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.5)",
      borderRadius: "27.5px",
      transition: "opacity .3s ease 0s,background-color .3s ease 0s",
    },
  },

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
  title: {
    display: "block",
    fontWeight: "40",
    fontSize: "16px",
    fontFamily: "Akzidenz,Helvetica,Arial,sans-serif",
    lineHeight: "inherit",
    letterSpacing: ".3px",
    transition: "opacity .3s ease",
    willChange: "opacity",
  },
  price: {
    display: "inline-block",
    paddingTop: "1px",
    color: "#9d9390",
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "Akzidenz,Helvetica,Arial,sans-serif",
    lineHeight: "1.79",
    textAlign: "left",
  },
});

export const Card = () => {
  const classes = useStyles();
  const [isAdd, setIsAdd] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handelAddClick = () => {
    setIsAdd(!isAdd);
  };
  return (
    <article className={classes.cardContainer}>
      <div className={classes.pictureWrapper}>
        <Link>
          <img
            className={classes.pictureSizes}
            src="img/cardItem.png"
            alt="item"
          />
        </Link>
        <div onClick={handelAddClick}>
          {isAdd ? (
            <CheckIcon className={classes.addedItem} />
          ) : (
            <AddIcon className={classes.addIcon} />
          )}
        </div>
      </div>
      <footer className={classes.cardFooter}>
        <div>
          <span className={classes.title}>Air cleaner humidifier A705</span>
          <span className={classes.price}>price</span>
        </div>
      </footer>
    </article>
  );
};
