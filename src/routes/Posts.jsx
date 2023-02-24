import { Outlet } from "react-router-dom"

import PostsLists from "../components/PostsLists"


function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsLists />
      </main>

    </>
  )
}

export default Posts

export async function loader() {

  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}