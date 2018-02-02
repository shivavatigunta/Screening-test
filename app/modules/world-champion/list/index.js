import React from "react";
import PropTypes from "prop-types";
import Header from "../../header";
import Footer from "../../footer";
import PageInfoStrip from "../../page-info-strip";
import PageLoader from "../../page-loader";
import Table from "../../table";
import "./style.scss";

const defaultProps = {      
    isChampionListPageLoading: false,
    championListPageError: "",
    championListLimit: 50,
    championListOffset: 0,
    championList: [],  
};

const propTypes = {  
    isChampionListPageLoading: PropTypes.bool,
    championListPageError: PropTypes.string,
    championListLimit: PropTypes.number,
    championListOffset: PropTypes.number,
    championList: PropTypes.array,
    toggleChampionListIsPageLoading: PropTypes.func.isRequired,
    getChampionListPageAsync: PropTypes.func.isRequired,
    toggleChampionListIsQuerying: PropTypes.func.isRequired,
    queryChampionListAsync: PropTypes.func.isRequired
};

class App extends React.Component { 

    componentWillMount() { 
        const { 
            toggleChampionListIsPageLoading, 
            getChampionListPageAsync,
            championListLimit
        } = this.props;

        //Call REST API actions on will mount
        toggleChampionListIsPageLoading(true);
        getChampionListPageAsync(championListLimit,0);
    }

    handleInfiniteLoad() {
        const {             
            championList,
            championListLimit,
            championListOffset,
            isQueryingChampionList,
            toggleChampionListIsQuerying,
            queryChampionListAsync
        } = this.props;

        //Infinite scroll bar(load more items)
        const { infiniteList } = this.refs;
        const scrollTop = infiniteList.scrollTop;
        const clientHeight = infiniteList.clientHeight;
        const scrollHeight = infiniteList.scrollHeight;
        const contentHeight = scrollHeight - clientHeight;

        let isItemsFilledTable = false;
        if(championList.length >= championListLimit){
          isItemsFilledTable = true
        }

        if(contentHeight === scrollTop && !isQueryingChampionList && isItemsFilledTable){
          toggleChampionListIsQuerying(true);
          queryChampionListAsync(championListLimit, championListOffset);
        }
    }
   
    render() {
        const { 
            isChampionListPageLoading, 
            championListPageError,
            championList,
            isQueryingChampionList,
            queryChampionListError
        } = this.props; 

        //Form table data
        const tableHeaders = ["Year", "Driver Name", "Points"];
        const tableBody = championList.map((obj) => {
           return [
           obj.season, 
           `${obj.DriverStandings[0].Driver.givenName} ${obj.DriverStandings[0].Driver.familyName}`,
            obj.DriverStandings[0].points,
           ];             
        });

        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header name={"F1 World Champions"}/>	
                
                {/*Body*/} 
                {!isChampionListPageLoading && !championListPageError &&
                    <div className="screen_full horizontal_center elastic_content">  
                        <div className="page_champion_container">
                            {/*Page info strip*/}
                            <PageInfoStrip isQuerying={isQueryingChampionList} errorMsg={queryChampionListError} listEnabled={true} listNumber={championList.length} />

                            {/*Table wrap*/}
                            <div className="table_wrap" ref="infiniteList" onScroll={this.handleInfiniteLoad.bind(this)}>  
                                <Table theaders={tableHeaders} tbody={tableBody} linkIndex={0} linkUrl={"race-toppers"} />
                            </div>          
                        </div>                                                   
                    </div>
                }

                {/*Page Load spinner and error*/}
                {(isChampionListPageLoading || championListPageError) &&
                    <div className="screen_full flex_column_center elastic_content">
                        <PageLoader isLoading={isChampionListPageLoading} errorMsg={championListPageError}/>
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