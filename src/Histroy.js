import styled from 'styled-components'
import HistoryEntry from './components/HistoryEntry'

export default function History({ game }) {
  return (
    <Wrapper>
      {game.players ? (
        <>
          <HistoryEntry nameOfGame={game.name} players={game.players} />{' '}
        </>
      ) : (
        'You have no finished games'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 20px;
`
