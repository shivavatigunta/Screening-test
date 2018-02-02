import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  theaders: []
};

const propTypes = {
  theaders: PropTypes.arrays
};

const THead = ({theaders}) => { 
  return ( 
    <thead>
      <tr>
        {
          theaders.map((name,index) => {
            return <th key={index}>{name}</th>
          })
        }       
      </tr>                            
    </thead>    	  	
  );  
};

THead.defaultProps = defaultProps;
THead.propTypes = propTypes;

export default THead;