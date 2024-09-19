import { createSlice } from '@reduxjs/toolkit';


export const movieSlice= createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1,title:'Pulp Fiction'},
            {id:2,title:'Strangle for the fittest'}
        ]
    },
    reducers:{

    }
})

export default movieSlice.reducer