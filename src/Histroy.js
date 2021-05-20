import styled from 'styled-components'
import HistoryEntry from './components/HistoryEntry'

export default function History({ props }) {
  return (
    <Wrapper>
      {props.map(({ gameName, players }) => (
        <HistoryEntry nameOfGame={gameName} players={players} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 20px;
`
