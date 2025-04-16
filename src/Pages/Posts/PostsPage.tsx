import {useEffect, useState} from "react";
import WPAPI from "wpapi";
import {PostsTableDataTypes} from "../../components/ui/Table/types.ts";
import {Table} from "../../components/ui/Table/Table.tsx";

export const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const wp = new WPAPI({ endpoint: 'http://localhost/react-wp/wp-json' });
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await wp.posts().get();
                setPosts(fetchedPosts);
            } catch (e) {
                console.log(e)
                return [];
            }
        }
        fetchPosts();
    }, []);
    const data: PostsTableDataTypes = {
        columns: [
            { title: 'Название', name: 'name'},
            { title: "Текст", name: "text"},
        ],
        rows: posts.map(({title, content}) => ({ name: title["rendered"], text: content["rendered"]}))
    }
    return <Table data={data} title={"Посты"}/>
}