import {Table} from "../../components/ui/Table/Table.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {useEffect} from "react";
import {fetchPosts} from "../../redux/postsReducer.ts";

export const PostsPage = () => {
    const dataTable = useAppSelector(({posts}) => posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    },[dispatch]);

    return <Table data={dataTable} title={"Посты"}/>
}