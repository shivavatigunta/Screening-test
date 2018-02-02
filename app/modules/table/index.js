import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import PropTypes from "prop-types";
import "./style.scss";

const defaultProps = {
  theaders: [],
  tbody: [],
  linkIndex: -1,
  linkUrl: "",
  hlightValueIndex: -1,
  hlightRowBy: ""
};

const propTypes = {
  theaders: PropTypes.array,
  tbody: PropTypes.array,
  linkIndex: PropTypes.number,
  linkUrl: PropTypes.string,
  hlightValueIndex: PropTypes.number,
  hlightRowBy: PropTypes.string
};

/**
 * theaders-> table th names
 * tbody-> table body values 
 * linkIndex-> column index number to display link 
 * linkUrl-> link url string to append to dynamic value
 * hlightValueIndex-> highlight row based on column value index
 * hlightRowBy-> highlight based on match by value
 */
const Table = ({theaders, tbody, linkIndex, linkUrl, hlightValueIndex, hlightRowBy}) => { 
  return ( 
    <table className="table table-hover custom_table">                        
      <TableHeader theaders={theaders} />
      <TableBody tbody={tbody} linkIndex={linkIndex} linkUrl={linkUrl} hlightValueIndex={hlightValueIndex} hlightRowBy={hlightRowBy}/>                    
    </table>   	  	
  );  
};

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

export default Table;