function list (state={
    data:[],
    loading:true
},action){
    switch (action.type){
        case "LIST_)UPDATA":
            return{
                loading:true,
                data:action.data.data
            }
        case "LIST_UPDATA_SUCC":
            return{
                loading:false,
                data: action.data.data
            }
        case "LIST_UPDATA_ERROR":
            return{
                loading:false,
                data:[]
            }
        default:
        return state;
    }
}
export default list; 