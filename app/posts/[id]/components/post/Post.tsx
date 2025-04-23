"use client";import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react'
type PostItem = {
    id: string;
      title: string;
}
const Post = async() => {
    const {id} = useParams();   
     const {isPending, error, data} = useQuery<PostItem>({
        queryKey: ["post", id],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/posts/${id}`);
            return await response.json();
        },
    });    if(isPending) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error!!</div>
    }
  return <div>{data.title}</div>
}
  export default Post;

