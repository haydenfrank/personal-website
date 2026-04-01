import { createFileRoute } from '@tanstack/react-router'
import { Minion } from '../components/minions'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [shown, setShown] = useState(false)
  return (
    <>
      <div
        className={shown ? 'background-active' : 'background-inactive'}
        style={{ padding: 10 }}
      >
        <h1>Welcome to my website!</h1>
        <ul>
          <li>
            <a href="https://media.haydenbfrank.com">Access my Emby server.</a>
          </li>
          <li>
            <a href="https://nas.haydenbfrank.com">
              Access my NAS through DSM.
            </a>
          </li>
          <li>
            <a href="https://requests.haydenbfrank.com">
              Access my Jellyseerr requesting service.
            </a>
          </li>
          <li>
            <a href="https://docker.haydenbfrank.com">
              Access my Portainer to manage my docker containers.
            </a>
          </li>
        </ul>
        <button className="button-29" onClick={() => setShown((s) => !s)}>
          {' '}
          {shown ? 'Deactivate Minion Mode!' : 'Activate Minion Mode!'}
        </button>
        <Minion shown={shown} />
      </div>
    </>
  )
}
