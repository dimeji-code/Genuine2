import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({

    name:"question",
    initialState : {
            // tabOpen : true,
            // modalOpen: false,
            // currentPage: '',
            choices:{}
        
    },
    reducers:{
        //     toggleWindowTab :(state,action) =>{
        //         state.tabOpen = action.payload.tabOpen
        // },
        // toggleModal :(state,action) =>{
        //         state.modalOpen = action.payload.modalOpen
        // }
        // ,toggleCurrent :(state,action) =>{
        // state.currentPage = action.payload.currentPage
        // },
        selectOption :(state,action) =>{
            const optionName = action.payload.name;
            const optionVal = action.payload.value;
            console.log('In the reducer')

        return{
            ...state,
            choices: {...state.choices ,[optionName]: optionVal }
        }
        },
        clearOptions: (state,action) =>{
            state.choices ={}
            // return{
            //     ...state,
            // choices: {}
            // }
        }
    }

})
export const { selectOption, clearOptions} = questionSlice.actions;

export default questionSlice.reducer ;