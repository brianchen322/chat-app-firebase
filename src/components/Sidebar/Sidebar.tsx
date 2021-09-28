import Groups from './Groups'
import Search from './Search'
import UserPanel from './UserPanel'

import { Box, makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  sidebar: {
    [theme.breakpoints.down('sm')]: {
      width: '83px',
    },
  },
}))

const Sidebar = () => {
  const classes = useStyles()
  const [currentSearch, setCurrentSearch] = useState('')

  return (
    <Box
      className={classes.sidebar}
      display="flex"
      flexDirection="column"
      width="361px"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor={'divider'}
    >
      <UserPanel />
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
      <Groups
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
    </Box>
  )
}

export default Sidebar
