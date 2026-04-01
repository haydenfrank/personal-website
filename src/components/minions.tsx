import { useState } from 'react'

export const Minion = ({ shown }: { shown: boolean }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      {shown && (
        <div className="minion">
          <img
            src="/minion-laugh-minion.gif"
            onClick={handleClick}
            className="minion"
          />
          <img
            src="/minions-excited.gif"
            onClick={handleClick}
            className="minion"
          />
          <img
            src="/minions-sad.gif"
            onClick={handleClick}
            className="minion"
          />
          <img
            src="/minions-pool.gif"
            onClick={handleClick}
            className="minion"
          />{' '}
        </div>
      )}
    </>
  )
}
