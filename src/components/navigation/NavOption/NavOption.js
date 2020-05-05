import React from 'react';
import PropTypes from 'prop-types';

const NavOption = ({name, path}) => {
  // Eventually, tis will render a nav routing component which will use the path
  return (
    <>
      <a href="#">{name}</a>
    </>
  )
}

NavOption.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string
}

export default NavOption;
