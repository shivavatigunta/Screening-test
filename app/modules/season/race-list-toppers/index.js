import React from "react";
import PropTypes from "prop-types";
import Header from "../../header";
import Footer from "../../footer";
import PageInfoStrip from "../../page-info-strip";
import PageLoader from "../../page-loader";
import Table from "../../table";
import "./style.scss";

const defaultProps = {      
    isRaceListTopperPageLoading: false,
    raceListTopperPageError: "",   
    raceListTopperList: [],
    seasonChampion: {}  
};

const propTypes = {  
    isRaceListTopperPageLoading: PropTypes.bool,
    raceListTopperPageError: PropTypes.string,   
    raceListTopperList: PropTypes.array,
    seasonChampion: PropTypes.object, 
    toggleRaceListTopperIsPageLoading: PropTypes.func.isRequired,
    getRaceListTopperPageAsync: PropTypes.func.isRequired,
    getSeasonChampionAsync: PropTypes.func.isRequired
};

class App extends React.Component { 

    componentWillMount() { 
        const {          
            toggleRaceListTopperIsPageLoading,
            getRaceListTopperPageAsync,
            getSeasonChampionAsync
        } = this.props;        

        //Call REST API actions on will mount
        if(this.props.params.season){ 
            toggleRaceListTopperIsPageLoading(true);
            getRaceListTopperPageAsync(this.props.params.season); 
            getSeasonChampionAsync(this.props.params.season);          
        }
    }
   
    render() {
        const {           
            isRaceListTopperPageLoading, 
            raceListTopperPageError,
            raceListTopperList,
            seasonChampion
        } = this.props; 

        //Form table data
        const tableHeaders = ["Race Name", "Driver Name", "Constructor"];
        const tableBody = raceListTopperList.map((obj) => {
           return [
           obj.raceName,            
            `${obj.Results[0].Driver.givenName} ${obj.Results[0].Driver.familyName}`,
            obj.Results[0].Constructor.name
           ];             
        });

        //Season champion name
        let seasonChampionName = "";
        if(seasonChampion.Driver){
            seasonChampionName = `${seasonChampion.Driver.givenName} ${seasonChampion.Driver.familyName}`;
        }      

        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header name={"Race list by toppers in season " + this.props.params.season}/>	
                
                {/*Body*/} 
                {!isRaceListTopperPageLoading && !raceListTopperPageError &&
                    <div className="screen_full horizontal_center elastic_content">  
                        <div className="page_race_container">
                            {/*Page info strip*/}
                            <PageInfoStrip listEnabled={true} listNumber={raceListTopperList.length} />

                            {/*Table wrap*/}
                            <div className="table_wrap">  
                                <Table theaders={tableHeaders} tbody={tableBody} hlightValueIndex={1} hlightRowBy={seasonChampionName} />
                            </div>          
                        </div>                                                   
                    </div>
                }

                {/*Page Load spinner and error*/}
                {(isRaceListTopperPageLoading || raceListTopperPageError) &&
                    <div className="screen_full flex_column_center elastic_content">
                        <PageLoader isLoading={isRaceListTopperPageLoading} errorMsg={raceListTopperPageError}/>
                    </div>
                }
                  
                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
};

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;