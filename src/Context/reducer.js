export const initalvalue={tasks:[]}

export const stateReducer = (state,action) => {
    console.log("action",state,action);
//     if(action.type === "setevent"){
//         return{
//             ...state,
//             tasks: action.payload,
//         }
// }
// if(action.type=="delete"){
//     return{
//         task:state.tasks.filter((item)=>item.id!==action.payload)
//     }
// }

       switch(action.type){
        case 'setevent':
            return{
                ...state,
                tasks:action.payload
            }
            case 'deltask':
                return{
                    ...state,
                    tasks:state.tasks.filter((item) => item.id !== action.payload)
                }
            case 'default':
                return{
                    tasks: state.tasks.map((item) => {
                        if(item.check === action.payload){
                            return{...item,default:!item.default}
                        }
                        return item;
                    })
                }    
                case 'update':
                    return{
                        ...state,
                        tasks:[state.tasks.filter((item)=>item.id!==action.payload.id),action.payload]
                    }

                case 'complete':
                    return{
                        ...state,
                        tasks:action.payload
                    }
                    case"asending":
                    return{
                        tasks:action.payload
                    }
                    case"desending":
                    return{
                        tasks:action.payload
                    }

                    default:
                        return state
       }
};