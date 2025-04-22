"use client"

import { tanstackQueryClient } from "@/lib/integrations/tanstack"
import { QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

const TanstackProvider = (props:PropsWithChildren) => {
    return(
        <QueryClientProvider client={tanstackQueryClient}>
            {props.children}    
        </QueryClientProvider>
    )

}
export default TanstackProvider