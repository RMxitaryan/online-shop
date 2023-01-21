import { createUseStyles } from "react-jss";
import CarouselBox from "./components/CarouselBox";

const useStyles = createUseStyles({
  app: {},
  header: {
    backgroundColor: "#3a3330",
  },
  headerTop: {
    width: 1360,
    height: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 27,
    display: "flex",
    justifyContent: "center",
  },
  headerTopRight: {
    display: "flex",
    justifyContent: "space-between",
    width: 60,
    marginRight: 12,
  },
  headerTopLeft: { marginLeft: 15 },
  headerBottom: {
    width: 1360,
    height: 60,
  },
  between: {
    height: 1,
    width: 1360,
    backgroundColor: "#626262",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <div className={classes.headerTop}>
          <div className={classes.headerTopLeft}>
            <img src="/img/menu.png" width={23} height={23} />
          </div>
          <div className={classes.name}>
            <img src="/img/bork.jpg" width={100} height={25} />
          </div>
          <div className={classes.headerTopRight}>
            <img src="/img/bag.png" width={23} height={23} />
            <img src="/img/search.png" width={23} height={23} />
          </div>
        </div>
        <div className={classes.between}></div>
        <div className={classes.headerBottom}></div>
      </div>
      <CarouselBox />
    </div>
  );
}

export default App;
