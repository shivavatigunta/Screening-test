import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";
import classNames from "classnames";

const defaultProps = {
  tbody: [],
  linkIndex: -1,
  linkUrl: "",
  hlightValueIndex: -1,
  hlightRowBy: ""
};

const propTypes = {
  tbody: PropTypes.array,
  linkIndex: PropTypes.number,
  linkUrl: PropTypes.string,
  hlightValueIndex: PropTypes.number,
  hlightRowBy: PropTypes.string
};

/**
 * tbody-> table body values 
 * linkIndex-> column index number to display link 
 * linkUrl-> link url string to append to dynamic value
 * hlightValueIndex-> highlight row based on column value index
 * hlightRowBy-> highlight based on match by value
 */
const TBody = ({tbody, linkIndex, linkUrl, hlightValueIndex, hlightRowBy}) => { 
  return ( 
    <thead>
      {
        tbody.map((set, index) => {

          //Highlight row condition
          let highLightCss = "";
          if(hlightValueIndex > -1 && hlightRowBy){
            highLightCss = classNames({
              ["trow_highlight"]:  hlightRowBy.trim().toLowerCase() === set[hlightValueIndex].trim().toLowerCase()     
            });
          }           

          return (
            <tr key={index} className={highLightCss}>
              {
                set.map((value, valIndex) => {
                  return (
                    <td key={valIndex}>   
                      {/*Display Link condition*/}              
                      {linkIndex !== valIndex &&
                        <span>{value}</span>
                      }
                      {linkIndex === valIndex &&                     
                        <Link to={linkUrl +"/"+ value} target="_blank" className="tvalue_link">{value}</Link>
                      }                                         
                    </td>
                  )
                })
              }
            </tr>
          )          
        })
      }      
                           
    </thead>          
  );  
};

TBody.defaultProps = defaultProps;
TBody.propTypes = propTypes;

export default TBody;