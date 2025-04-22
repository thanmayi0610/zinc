import React from 'react'
import { Suspense } from 'react';
import PostsLists from './components/PostsLists';
type Post = {
    id: string;
    title: string;
};



const Postspage =  () => {
    return(
        <div className="container mx-auto">
           <h1>Posts</h1>
           <Suspense fallback={<div className="container mx-auto text-red-500">Loading...</div>}>
            <PostsLists/>
            </Suspense>
        </div>
    )

  };
  

export default Postspage