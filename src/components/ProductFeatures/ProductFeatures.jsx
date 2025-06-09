import css from "./ProductFeatures.module.css"
import Tag from "../Tag/Tag.jsx";
import Transmission from "../../assets/diagram.svg?react";
import Engine from "../../assets/fuel-pump.svg?react";
import Kitchen from "../../assets/cup-hot.svg?react";
import Ac from "../../assets/wind.svg?react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectProductById} from "../../redux/catalogSlice.js";

function ProductFeatures () {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    return (
        <>
            <div className={css['product-features']}>
                <div className={css['product-features-tags']}>
                    <Tag text={product?.transmission}><Transmission/></Tag>
                    <Tag text={product?.engine}><Engine/></Tag>
                    {product?.kitchen && <Tag text='Kitchen'><Kitchen/></Tag>}
                    {product?.AC && <Tag text='AC'><Ac/></Tag>}
                </div>

                <div className={css['product-features-details']}>
                    <h3>Vehicle details</h3>
                    <hr className='divider'/>

                    <div className={css['product-features-details--item']}>
                        <span>Form</span>
                        <span>{product?.form}</span>
                    </div>

                    <div className={css['product-features-details--item']}>
                        <span>Length</span>
                        <span>{product?.length}</span>
                    </div>

                    <div className={css['product-features-details--item']}>
                        <span>Width</span>
                        <span>{product?.width}</span>
                    </div>

                    <div className={css['product-features-details--item']}>
                        <span>Height</span>
                        <span>{product?.height}</span>
                    </div>

                    <div className={css['product-features-details--item']}>
                        <span>Tank</span>
                        <span>{product?.tank}</span>
                    </div>

                    <div className={css['product-features-details--item']}>
                        <span>Consumption</span>
                        <span>{product?.consumption}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeatures
