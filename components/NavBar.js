import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

const Navbar = ({ classes, router, pageProps: { auth }}) => {

  const { user = {} } = auth || {};
  return (
    <AppBar className={classess.appBar} position={router.pathname === "/" ? "fixed" : "static"} >
      <Toolbar>
        {/* Main Title / Home Button  */}
        <ShareOutlined className={classes.icon} />
        <Typography variant="h3" component="h1" className={classes.toolbarTitle}>
          NextConnect
        </Typography>
        
      </Toolbar>
    </AppBar>
  )
};

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbatTitle: {
    flex: 1
  },
  icon: {
    marginRight: theme.spacing.unit
  }
})