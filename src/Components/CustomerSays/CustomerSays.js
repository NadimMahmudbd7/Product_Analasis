import { useContext } from "react"
import { ReviewsContext } from "../../App"

const CustomerThreeReviews = () => {
    const [reviews] = useContext(ReviewsContext)
    if(reviews?.length >3){
        return reviews.slice(0,3)
    }
}
export {CustomerThreeReviews}