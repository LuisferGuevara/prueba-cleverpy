import { FC, ReactNode } from "react"

type GalleryProps = {
    children?: ReactNode
}
const Gallery: FC<GalleryProps> = ({children}) =>{
    return(
        <main className="gallery">{children}</main>
    )
    
}
export default Gallery