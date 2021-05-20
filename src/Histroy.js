import styled from 'styled-components'
import HistoryEntry from './components/HistoryEntry'

export default function History({ gameName, players }) {
  return (
    <Wrapper>
      {players ? (
        <>
          <HistoryEntry nameOfGame={gameName} players={players} />{' '}
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
