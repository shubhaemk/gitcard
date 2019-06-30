import { initState } from "./model";

let gitCard = (state = initState, action) => {
    switch(action.type){
        case 'update_theme' :
            return {
                ...state,
                theme : action.value
            }
        case 'update_card_text' : 
            return {
                ...state,
                card_text : action.value
            }
        case 'update_card_subtext' : 
            return {
                ...state,
                card_subtext : action.value
            }
        case 'update_card_background' :
            return {
                ...state,
                card_background : action.value
            }
        case 'update_control_div' : 
            return {
                ...state,
                control_div : action.value
            }
        case 'update_user_name' :
            return {
                ...state,
                user_name : action.value
            }
        case 'update_user_found' :
            return {
                ...state,
                user_found : action.value
            }
        case 'update_profile' : 
            let profile = {...state.profile};
            profile[action.value.key] = action.value.value
            return {
                ...state,
                profile
            }
        case 'update_latest_repos' :
            return {
                ...state,
                latest_repos : action.value
            }
        case 'update_contribution_chart' :
            return {
                ...state,
                contribution_chart : action.value
            }
        case 'update_github' : 
            console.log(action.value);
            return {
                ...state,
                github : action.value
            }
        case 'update_search' :
            return {
                ...state,
                search : action.value
            }
        default :
            return {
                ...state
            }
    }
}

export default gitCard;