import { FC, ReactNode } from "react"

type FrameProps = {
    children?: ReactNode
}
const Frame: FC<FrameProps> = ({children}) =>{
    return(
        <main className="gallery">{children}</main>
    )
    
}
export default Frame