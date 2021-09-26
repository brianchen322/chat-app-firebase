import { useSelector, useDispatch } from 'react-redux'
import AddChatMenu from './AddChatMenu'
import OptionsMenu from './OptionsMenu'
import { toggleDarkTheme } from '../../../state/actions'
import { AppState } from '../../../state/store/store'

import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  userInfo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  userActions: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 'auto',
    },
  },

  title: {
    marginLeft: theme.spacing(2),
    fontWeight: 700,
  },
}))

const UserPanel = () => {
  const classes = useStyles()
  const currentUser = useSelector((state: AppState) => state.user)
  const darkThemeEnabled = useSelector(
    (state: AppState) => state.darkThemeEnabled
  )
  const dispatch = useDispatch()

  return (
    <Box display="flex" justifyContent="space-between" m={2} mb={1}>
      <Box className={classes.userInfo} display="flex" alignItems="center">
        <Avatar src={`${currentUser.photoURL}`} />
        <Typography className={classes.title} variant="h5">
          Chats
        </Typography>
      </Box>
      <Box className={classes.userActions} display="flex">
        <OptionsMenu />
        <AddChatMenu />
        {darkThemeEnabled ? (
          <IconButton onClick={() => dispatch(toggleDarkTheme())}>
            <WbSunnyIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(toggleDarkTheme())}>
            <Brightness2Icon />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}

export default UserPanel
