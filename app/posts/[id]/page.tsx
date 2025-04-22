import React from 'react'
type Post = {
    id: string;
    title: string;
 };

const page = async (props: { params: { id: string } }) => {
    const { id } = props.params;
    const response = await fetch(`http://localhost:3000/posts/${id}`);
  
    if (response.ok) {
      const post: Post = await response.json();
      return (
        <div>
          {post.title}
        </div>
      );
    }
  
    return <div>not found</div>;
  };
  
export default page