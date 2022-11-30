import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { ProductContainer } from "../components/ProductContainer/ProductContainer";

export const DetailPage = () => {

    const params = useParams();

    const getProduct = (useSelector((state) => state.product)).filter(value => value.type == params.type);

    const getContainerProduct = () => {
        return getProduct.map((value, index) => <ProductContainer value={value} index={index} />)
    }

    return <div style={{'padding': '10px'}}>

        <div className="products-grid justify-spacer w-full">
            { getContainerProduct() }
        </div>
    </div>
}