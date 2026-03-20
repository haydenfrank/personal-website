import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (<>
    <h1>Welcome to my website!</h1>
    <ul>
      <li>
        <a href="media.haydenbfrank.com">
          Access my Emby server.
        </a>
        <a href="nas.haydenbfrank.com">
          Access my nas through DSM.
        </a>
        <a href="requests.haydenbfrank.com">
          Access my Jellyseerr requesting service.
        </a>
      </li>
    </ul>
  </>)
}
