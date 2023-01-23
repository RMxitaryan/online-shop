import { createUseStyles } from 'react-jss';
import CarouselBox from '../CarouselBox';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
const useStyles = createUseStyles({
	app: {},
	header: {
		backgroundColor: '#3a3330',
		width: '100%',
		height: 60,
		header: {},
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		color: 'white',
		fontSize: 27,
	},
	headerTopRight: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 60,
		marginRight: 12,
	},
	headerTopLeft: { marginLeft: 15 },
});

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<div className={classes.header}>
				<div className={classes.headerTopLeft}>
					<img src="/img/menu.png" width={23} height={23} />
				</div>
				<div className={classes.name}>
					<Link to="/">
						<img src="/img/bork.jpg" width={100} height={25} />
					</Link>
				</div>
				<div className={classes.headerTopRight}>
					<img src="/img/bag.png" width={23} height={23} />
					<Search />
				</div>
			</div>
		</div>
	);
}

export default Home;
