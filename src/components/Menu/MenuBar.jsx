import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  menuCatalog: {
    zIndex: 10,
    backgroundColor: "#3a3330",
    translateX: "translateX(0)",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    width: "400px",
    height: "100vh",
    transition: "transform .3s ease,-webkit-transform .3s ease",
    boxSizing: "inherit",
    opacity: "0.8",
    backgroundImage: "url (./img.kitchen.jpg)",
  },
  headerMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "35px",
    minWidth: "320px",
    height: "60px",
  },
  closeMenuIcon: {
    position: "relative",
    flex: "0 0 50px",
    width: "50px",
    height: "50px",
    color: "transparent",
    fontSize: "0",
  },
  mainMenu: { overflowY: "auto" },
  menuItems: {
    width: "250px",
    margin: "10px 10px 20px",
    padding: "0 20px",
    listStyleType: "none",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
  },
  li: {
    display: "list-item",
    textAlign: "-webkit-match-parent",
    cursor: "pointer",
  },
  link: {
    display: "block",
    padding: "15px 0",
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Akzidenz,Helvetica,Arial,sans-serif",
    letterSpacing: ".04em",
    textTransform: "uppercase",
    textDecoration: "none",
    outline: "0",
    backgroundColor: "transparent",
    textDecoration: "none",
    paddingLeft: 10,
    "&:hover": {
      backgroundColor: "#9a9999",
      color: "#3a3333",
      paddingLeft: 10,
    },
  },
  backIcon: {
    margin: "20px",
    color: "white",
    cursor: "pointer",
    position: "relative",
    width: "30px",
    height: "30px",
  },
});
const MenuBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const classes = useStyles();

  const onCloseMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={classes.menuCatalog}>
      <div className={classes.headerMenu}>
        <div className={classes.closeMenuIcon} onClick={onCloseMenu}>
          <ArrowBackIosIcon className={classes.backIcon} />
        </div>
      </div>
      <div className={classes.mainMenu}>
        <ul className={classes.menuItems}>
          <li>
            <Link className={classes.link} to="/Kitchen">
              Kitchen
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/HomeAndClimat">
              Home & climat
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/HealthAndBeauty">
              Health & beauty
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/BorkHome">
              Bork home
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/Accessories">
              accessories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
