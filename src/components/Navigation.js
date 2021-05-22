import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}
export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Nav>
      {pages.map(({ id, title }) => (
        <NavButton
          to={`/${id}`}
          activeStyle={{ background: 'steelblue' }}
          key={id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-self: flex-end;
  background-color: #ddd;
`

const NavButton = styled(NavLink)`
  border-radius: 0 5px 5px 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: #ddd;
  color: black;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
