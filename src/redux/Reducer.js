export const initialState = {
    countryList: [],
    countryListByName: [],
    countryListByRegion: [],
    filterByName: "",
    filterByRegion: "",
}


const reducer = (state = initialState, action) => {
    //console.log(action)
    switch(action.type) {
        case "SET_COUNTRY_LIST": 
            if(action.payload ){
                return {
                    ...state,
                    countryList: action.payload,
                }
            } else {
                return {
                    ...state
                }
            }
            
        
        case "GET_COUNTRY_LIST_BY_NAME":
            //console.log(action.payload)
            if(state.countryList.length > 0 && action.payload !== ""){
               console.log(action.payload,state.countryList.length)

               const getCountryListByName = state.countryList.filter((country) => 
               country.name.toLowerCase().includes(action.payload.toLowerCase()));
               console.log(getCountryListByName);

               return {
                   ...state,
                   countryListByName: getCountryListByName
               } 
            }
            
        case "GET_COUNTRY_LIST_BY_REGION":

            if(action.payload !== ""){

                console.log(action.payload)
                const getCountryByRegion = state.countryList.filter((country) => 
                country.region.toLowerCase() === action.payload.toLowerCase())
                //console.log(getCountryByRegion);
                return {
                    ...state,
                    countryListByRegion: getCountryByRegion
                }
            }
        
            
        default:
            return state; 
    }
}

export default reducer