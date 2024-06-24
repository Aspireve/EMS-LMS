import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"
import React from "react"

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 
      Header={Header}
      Title={(titleProps) => {
        return <ThemedTitleV2 {...titleProps} text="Ontime Globe" />;
      }}>
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout