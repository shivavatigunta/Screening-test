
//API URL that was taken from a open source
let baseURL = "http://ergast.com/api/f1";

if (process.env.NODE_ENV !== "production") {	
	baseURL = "http://ergast.com/api/f1";
}

export default baseURL;

