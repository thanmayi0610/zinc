"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
};

const ClientPostsList = () => {
    const {data, isPending, error} = useQuery<Post[]>({    
         queryKey: ["posts"],
         queryFn: async() => {
            const response = await fetch("http://localhost:3000/posts");
            return await response.json();
            

         }
    });
    if(isPending) {
        
        return <div>Loading...</div>;
    }

    if(error)
    {
        return <div>Errorrrr</div>
    }
    
 return <div>
{
    data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
    })
}
 </div>
};

export default ClientPostsList;