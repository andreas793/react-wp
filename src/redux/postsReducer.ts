import WPAPI from "wpapi";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostsTableDataTypes} from "../components/ui/Table/types.ts";

const wp = new WPAPI({ endpoint: 'http://localhost/react-wp/wp-json' });

const fetchPostsList = async () => {
    const response = await wp.posts().get();
    const posts = response.map(({id, title, content}: {
        id: string,
        title: {rendered: string},
        content: {rendered: string}
    }) => ({id: id, name: title["rendered"], text: content["rendered"]}))
    return posts;
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    fetchPostsList,
)

const initialState: PostsTableDataTypes = {
    columns: [
        { title: 'Название', name: 'name'},
        { title: "Текст", name: "text"},
    ],
    rows: [],
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.rows = [ ...action.payload ];
            })
    },
})

export default postsSlice.reducer;