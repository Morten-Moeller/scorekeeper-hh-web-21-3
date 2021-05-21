import styled from 'styled-components'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}
export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper className="Player">
      {name}{' '}
      <FlexContainer className="Player__buttons">
        <button onClick={onMinus}>-</button>
        <output className="Player__score">{score}</output>
        <button onClick={onPlus}>+</button>
      </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  align-items: baseline;
`
const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`
