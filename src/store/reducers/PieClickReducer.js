let initialState=[{
    name:'amazon',
    value:200
}]
function pieClick(state=initialState,action) {
    switch (action.type){
        case"AMAZON_CLICK":
            return "AMAZON_CLICK";
        case "JD_CLICK":
            return "JD_CLICK";
            default:return state;

    }
}