function user (state={
    data:{
        avatar_url:"",
        loginname:"",
        create_at:"",
        score:"",
        recent_topics:[],
        recent_replies:[]
    },
    loading:true
},action){
    switch (action.type){
        case"USER_UPDATE_SUCC":
            return {
                data:action.data.data,
                loading:false
            }
        case"USER_UPDATE_ERROR":
            return {
                data:{
                    avatar_url:"",
                    loginname:"",
                    create_at:"",
                    score:"",
                    recent_topics:[],
                    recent_replies:[]
                },
                loading:true
            }

        default:
        return state;
    }
}
export default user;
