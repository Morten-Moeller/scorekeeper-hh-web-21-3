import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry'

export default function HistoryPage({ props }) {
  return (
    <Wrapper>
      {props.map(props => (
        <HistoryEntry keys={props.date} props={props} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 20px;
  padding: 20px;
`
