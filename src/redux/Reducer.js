export const initialState = {
    countryList: [],
    countryListByName: [],
    countryListByRegion: [],
    filterByName: "",
    filterByRegion: "",
    darkMode: false
}


const reducer = (state = initialState, action) => {
    //console.log(action)
    switch(action.type) {
        case "SET_COUNTRY_LIST": 
                return {
                    ...state,
                    countryList: action.payload,
                }

        case "GET_COUNTRYLIST_BY_NAME": 
            let list;
            if(state.filterByRegion !== ""){
                
               list = state.countryListByRegion
            }else {
                
                list = state.countryList
            }
            const getCountryListByName = list.filter((country) => 
               country.name.toLowerCase().includes(action.payload.toLowerCase()));
               console.log(getCountryListByName);

               return {
                   ...state,
                   countryListByName: getCountryListByName,
                   filterByName: action.payload
               } 
        
            
        case "GET_COUNTRYLIST_BY_REGION":
            if(action.payload !== ""){

                console.log(action.payload)
                const getCountryByRegion = state.countryList.filter((country) => 
                country.region.toLowerCase() === action.payload.toLowerCase())
                
                return {
                    ...state,
                    countryListByRegion: getCountryByRegion,
                    filterByRegion: action.payload
                }
            }
            case "SET_DARKMODE":
                console.log(action.payload)
                return {
                    ...state,
                    darkMode: action.payload
                }
        
        default:
            return state; 
    }
}

export default reducer