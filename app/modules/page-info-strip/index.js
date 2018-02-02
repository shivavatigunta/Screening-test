import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const defaultProps = {
  isQuerying: false,
  errorMsg: "",
  listEnabled: false,
  listNumber: 0
};

const propTypes = {
  isQuerying: PropTypes.bool,
  errorMsg: PropTypes.string,
  listEnabled: PropTypes.bool,
  listNumber: PropTypes.number
};

/**
 * isQuerying-> true/false to show spinner
 * errorMsg-> error message to display
 * listEnabled-> true/false to display list length
 * listNumber-> list number to display
 */
const PageInfoStrip = ({isQuerying, errorMsg, listEnabled, listNumber}) => {  
  return ( 
    <div className="page_info_strip vertical_center">
      <div className="flex_row_space_start strip_wrap">
        <div>
          {/*Querying strip*/}
          {isQuerying && !errorMsg &&
            <div className="flex_row_start_start">
              <div>
                <span>
                  <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>&nbsp;                    
                </span>
              </div>
              <div style={{"marginTop":"2px"}}>
                <span>                    
                  Requesting...
                </span>
              </div>
            </div> 
          }

          {/*Error strip*/}
          {!isQuerying && errorMsg &&
            <div className="flex_row_start_start err_strip">
              <div>
                <span>
                  <i className="fa fa-exclamation-triangle"></i>&nbsp;                    
                </span>
              </div>
              <div style={{"marginTop":"2px"}}>
                <span>                    
                  {errorMsg}
                </span>
              </div>
            </div> 
          }
        </div>

        {/*Current List Number*/}
        {listEnabled &&
          <div className="flex_row_start_start">
            <div>
              <span>
                Now showing&nbsp;                  
              </span>
            </div>
            <div style={{"marginTop":"2px"}}>
              <span>                    
                {listNumber}
              </span>
            </div>
          </div>
        }
      </div> 
    </div>    	  	
  );  
};

PageInfoStrip.defaultProps = defaultProps;
PageInfoStrip.propTypes = propTypes;

export default PageInfoStrip;