import baseURL from "../config";
import axios from "axios";

/**
  * Fetches the F1 race world champions list
  * @param limit, offset
  * @return data object
  */
export const getWorldChampionList = (limit, offset) => {     

	const reqUrl = `${baseURL}/driverstandings/1.json?limit=${limit}&offset=${offset}`;

	let payload = {};
	payload["method"] = "get";
	payload["url"] = reqUrl; 

	return new Promise(async (resolve, reject) => {

		try{

			const resp = await axios(payload);     
			if(resp.status !== 200 || !resp.data){         
				return reject("unable to get world champions list. please try again.");
			}  
      
			resolve(resp.data);            

		}catch(err){
			reject("unable to get world champions list. please try again.");
		}
 
	});  
 
};

/**
  * Fetches race list by toppers in a season
  * @param season
  * @return data object
  */
export const getSeasonRaceListWithToppers = (season) => {     

	const reqUrl = `${baseURL}/${season}/results/1.json`;

	let payload = {};
	payload["method"] = "get";
	payload["url"] = reqUrl; 

	return new Promise(async (resolve, reject) => {

		try{

			const resp = await axios(payload);     
			if(resp.status !== 200 || !resp.data){         
				return reject("unable to get season race list. please try again.");
			}  
            
			resolve(resp.data);        

		}catch(err){
			reject("unable to get season race list. please try again.");
		}
 
	});  
 
};

/**
  * Fetches season chanmpion data
  * @param season
  * @return data object
  */
export const getSeasonChampion = (season) => {     

	const reqUrl = `${baseURL}/${season}/driverstandings/1.json`;

	let payload = {};
	payload["method"] = "get";
	payload["url"] = reqUrl; 

	return new Promise(async (resolve, reject) => {

		try{

			const resp = await axios(payload);     
			if(resp.status !== 200 || !resp.data){         
				return reject("unable to get season champion. please try again.");
			}  
            
			resolve(resp.data);        

		}catch(err){
			reject("unable to get season season champion. please try again.");
		}
 
	});  
 
};