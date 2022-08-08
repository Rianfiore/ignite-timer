import {Grid, Icon, Flex } from "components"
import "./styles.scss"

export const NavBar = () => {
  return (
    <header className="nav-bar">
      <Grid template="10fr 1fr">
        <Icon icon="logo" alt="logo icon" size="large" />
        <Flex gap="50%">
          <Icon icon="clock" alt="clock icon" />
          <Icon icon="historic" alt="historic icon" />
        </Flex>
      </Grid>
    </header>
  )
}