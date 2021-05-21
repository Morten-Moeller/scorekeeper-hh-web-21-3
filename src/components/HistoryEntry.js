import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

HistoryEntry.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}
export default function HistoryEntry({ props: { date, gameName, players } }) {
  return (
    <Grid>
      <Title>{gameName}</Title>
      <Date>{date}</Date>
      <ul>
        {players?.map(({ player, score }) => (
          <Player key={player}>
            <span>{player}</span>
            <span>{score}</span>
          </Player>
        ))}
      </ul>
      <Line />
    </Grid>
  )
}

const Grid = styled.section`
  width: 90vw;
  display: grid;
  gap: 4px;

  ul {
    padding: 0 40px;
    display: grid;
    gap: 10px;
  }
`

const Title = styled.h2`
  font-size: 1.1em;
  margin: 0.2em 0;
  text-align: center;
`

const Player = styled.li`
  display: flex;
  justify-content: space-between;
`
const Date = styled.small`
  font-weight: 400;
  font-size: 70%;
  text-align: center;
`
const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
  padding: 0;
`
