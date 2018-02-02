import {
	CHAMPION_LIST_FETCH_ISPAGELOADING,
	CHAMPION_LIST_FETCH_PAGE_SUCCESS,
	CHAMPION_LIST_FETCH_PAGE_ERROR,
	CHAMPION_LIST_ISQUERYING,
	CHAMPION_LIST_QUERY_SUCCESS,
	CHAMPION_LIST_LIST_QUERY_ERROR
} from "./constants";

const initialState = {
  //Champion List Page 
  isChampionListPageLoading: false,
  championListPageError: "",
  championListLimit: 50,
  championListOffset: 0, 
  championList: [],

  //Champion list fetch more
  isQueryingChampionList: false,
  queryChampionListError: ""
};

export default function champion(state = initialState, action) {
  switch (action.type) {

    //Fetch champion list toggle isPageLoading
  	case CHAMPION_LIST_FETCH_ISPAGELOADING:      
      return {       
        ...state,
        isChampionListPageLoading : action.bool,
        championListPageError : ""
      };

    //Fetch champion list on success
    case CHAMPION_LIST_FETCH_PAGE_SUCCESS:        
      return {       
        ...state,
        isChampionListPageLoading: false,
        championList: action.data.MRData.StandingsTable.StandingsLists,
        championListOffset: action.data.MRData.StandingsTable.StandingsLists.length
      };

    //Fetch champion list on failure  
    case CHAMPION_LIST_FETCH_PAGE_ERROR:     
      return {       
        ...state,
        isChampionListPageLoading: false,
        championListPageError: action.errMsg
      };

    //Query champion list toggle isQuerying   
    case CHAMPION_LIST_ISQUERYING:      
      return {       
        ...state,
        isQueryingChampionList: action.bool,
        queryChampionListError: ""
      };
  
    //Query champion list on success  
    case CHAMPION_LIST_QUERY_SUCCESS:      
      return {       
        ...state,
        isQueryingChampionList: false,
        championList: [
        	...state.championList,
        	...action.data.MRData.StandingsTable.StandingsLists
        ],
        championListOffset: state.championList.length + action.data.MRData.StandingsTable.StandingsLists.length
      };
    
    //Query champion list on failure
    case CHAMPION_LIST_LIST_QUERY_ERROR:      
      return {       
        ...state,
        isQueryingChampionList: false,
        queryChampionListError: action.errMsg
      };      

    default:
      return state;
  }
};