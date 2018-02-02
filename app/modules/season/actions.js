import {
	RACE_LIST_TOPPER_FETCH_ISPAGELOADING,
	RACE_LIST_TOPPER_PAGE_SUCCESS,
	RACE_LIST_TOPPER_PAGE_ERROR,
	SEASON_CHAMPION_SUCCESS
} from "./constants";
import {
	getSeasonRaceListWithToppers,
	getSeasonChampion
} from "../../api/f1-race";

/*
 * Toggle isPageLoading on race list
 * @param bool
 */ 
export const toggleRaceListTopperIsPageLoading = (bool) => (dispatch) => {  
  dispatch({
    type: RACE_LIST_TOPPER_FETCH_ISPAGELOADING,
    bool: bool
  });
};

/*
 * Call REST API to get race list
 * @param season
 */
export const getRaceListTopperPageAsync = (season) => async (dispatch) => { 
	try{
		const data = await getSeasonRaceListWithToppers(season);			 
		dispatch({ 
			type: RACE_LIST_TOPPER_PAGE_SUCCESS,
			data: data
		});  		
	}catch(err){
		dispatch({ 
			type: RACE_LIST_TOPPER_PAGE_ERROR,
			errMsg: err
		});
	} 
};

/*
 * Call REST API to get season champion
 * @param season
 */
export const getSeasonChampionAsync = (season) => async (dispatch) => { 	
	const data = await getSeasonChampion(season);			 
	dispatch({ 
		type: SEASON_CHAMPION_SUCCESS,
		data: data
	}); 
};