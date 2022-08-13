import baseUrl from "../../utils/environment/Environment";

export default HttpService = {

    
    /** Method to call GET http API
     * @param functionName name of th API 
     * @param params json data
     * @param methodType json data
     * @returns response of the API
     */
    async callFetchGet(functionName) {
        try {
            let response = await fetch(baseUrl + functionName, {
                method: 'GET'
            })
            let responseJson = await response.json();
            return responseJson;
        }
        catch (error) {
            console.log(error)
        }
    }

}

