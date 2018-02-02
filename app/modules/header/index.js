import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const defaultProps = {
  name: ""
};

const propTypes = {
  name: PropTypes.string
};

const Header = ({name}) => { 
  return (          	
    <div className="screen_full header_strip horizontal_center">
      <div className="screen_desktop">   
        <header className="header_container flex_column_center">                     
            <div className="flex_row_space_start">      
                <div className="header_title">
                  <span>{name}</span> 
                </div>                                                                  
            </div>                             
        </header>
      </div>
    </div>               	  	
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;