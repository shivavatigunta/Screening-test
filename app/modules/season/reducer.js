import {
	RACE_LIST_TOPPER_FETCH_ISPAGELOADING,
	RACE_LIST_TOPPER_PAGE_SUCCESS,
	RACE_LIST_TOPPER_PAGE_ERROR,
  SEASON_CHAMPION_SUCCESS
} from "./constants";

const initialState = {
  //Race List Topper Page 
  isRaceListTopperPageLoading: false,
  raceListTopperPageError: "",
  raceListTopperList: [],
  
  //season Champion
  seasonChampion: {}
};

export default function race(state = initialState, action) {
  switch (action.type) {

    //Fetch race list toggle isPageLoading
  	case RACE_LIST_TOPPER_FETCH_ISPAGELOADING:      
      return {       
        ...state,
        isRaceListTopperPageLoading: action.bool,
        raceListTopperPageError: ""
      };

    //Fetch race list on success
    case RACE_LIST_TOPPER_PAGE_SUCCESS:      
      return {       
        ...state,
        isRaceListTopperPageLoading: false,
        raceListTopperList: action.data.MRData.RaceTable.Races
      };

    //Fetch race list on failure
    case RACE_LIST_TOPPER_PAGE_ERROR:      
      return {       
        ...state,
        isRaceListTopperPageLoading: false,
        raceListTopperPageError: action.errMsg
      };
      
    //Fetch season champion on success
    case SEASON_CHAMPION_SUCCESS:      
      return {       
        ...state,
        seasonChampion: action.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
      };     

    default:
      return state;
  }
};