import React, { useState } from 'react'
import { ReactComponent as DarkModeIcon } from '../../../../icons/darkmodeiconIcon.svg'
import { ReactComponent as PlusIcon } from '../../../../icons/plusIcon.svg'
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from '../../../../context/Theme/ThemeContext'
import { PageHeader, Title, HeaderIcon } from './styles'

const TaskListPageHeader = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <PageHeader>
      <Title>Tasks</Title>
      <HeaderIcon>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <DarkModeIcon
              width="38px"
              onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.dark : themes.light)
              }}
            />
          )}
        </ThemeContext.Consumer>
      </HeaderIcon>
      <HeaderIcon>
        <Link to="/add">
          <PlusIcon width="28px" />
        </Link>
      </HeaderIcon>
    </PageHeader>
  )
}

export default TaskListPageHeader
