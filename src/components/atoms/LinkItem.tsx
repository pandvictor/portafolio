import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'

export const LinkItem = styled(NavLink)(({ }) => ({
    textDecoration: 'none',
    color: 'inherit', // Ensures the link color inherits from its parent
    '&.active': {
      fontWeight: 'bold', // Example of applying styles to the active link
    },
  }));