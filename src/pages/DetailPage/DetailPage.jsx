import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export const DetailPage = () => {

    const params = useParams();

    const getProduct = (useSelector((state) => state.product)).filter(value => value.type == params.type);

    console.log(getProduct)

    return <div>
        <h1>Welcome user!</h1>
    </div>
}