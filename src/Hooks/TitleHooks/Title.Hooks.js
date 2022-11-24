import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Resale Furniture Store`
    }, [title])
}
export default useTitle;