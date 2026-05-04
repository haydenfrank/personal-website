import { createFileRoute } from '@tanstack/react-router'
import { Minion } from '../components/minions'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Navbar } from '../components/Navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [shown, setShown] = useState(false)
  return (
    <>
      <div>
        <Navbar />
        <h1>Welcome to my website!</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" href="https://media.haydenbfrank.com">
            Emby
          </Button>
          <Button variant="outlined" href="https://nas.haydenbfrank.com">
            DSM
          </Button>
          <Button variant="outlined" href="https://requests.haydenbfrank.com">
            Jellyseerr
          </Button>
          <Button variant="outlined" href="https://docker.haydenbfrank.com">
            Portainer
          </Button>
        </Stack>
      </div>
    </>
  )
}
