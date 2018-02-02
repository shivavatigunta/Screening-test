import {
	CHAMPION_LIST_FETCH_ISPAGELOADING,
	CHAMPION_LIST_FETCH_PAGE_SUCCESS,
	CHAMPION_LIST_FETCH_PAGE_ERROR,
	CHAMPION_LIST_ISQUERYING,
	CHAMPION_LIST_QUERY_SUCCESS,
	CHAMPION_LIST_LIST_QUERY_ERROR
} from './constants';
import {getWorldChampionList} from '../../api/f1-race';

/*
 * Toggle isPageLoading on champion list fetch
 * @param bool
 */ 
export const toggleChampionListIsPageLoading = (bool) => (dispatch) => {  
  dispatch({
    type: CHAMPION_LIST_FETCH_ISPAGELOADING,
    bool: bool
  });
};

/*
 * Call REST API to get world champions list
 * @param limit, offset
 */
export const getChampionListPageAsync = (limit, offset) => async (dispatch) => { 
	try{
		const data = await getWorldChampionList(limit, offset);
		dispatch({ 
			type: CHAMPION_LIST_FETCH_PAGE_SUCCESS,
			data: data
		});  		
	}catch(err){					
		dispatch({ 
			type: CHAMPION_LIST_FETCH_PAGE_ERROR,
			errMsg: err
		});
	} 
};

/*
 * Toggle IsQuerying on champion list query
 * @param bool
 */ 
export const toggleChampionListIsQuerying = (bool) => (dispatch) => {  
  dispatch({
    type: CHAMPION_LIST_ISQUERYING,
    bool: bool
  });
};

/*
 * Call REST API to query world champions list
 * @param limit, offset
 */
export const queryChampionListAsync = (limit, offset) => async (dispatch) => { 
	try{
		const data = await getWorldChampionList(limit, offset);			 
		dispatch({ 
			type: CHAMPION_LIST_QUERY_SUCCESS,
			data: data
		});  		
	}catch(err){
		dispatch({ 
			type: CHAMPION_LIST_LIST_QUERY_ERROR,
			errMsg: err
		});
	} 
};