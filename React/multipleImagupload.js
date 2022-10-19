import React, { useEffect, useState } from 'react';
import "./UploadProduct.scss";

import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CameraIcon from "../../../../../assets/home/Camera.png";

function UploadProduct({ show, handleClose, catagories }) {

    const [formData, setFormData] = useState({
        unit: 'piece'
    });
    const [isChecked, setIsChecked] = useState(false);

    let dataValidation = {
        p_name: false,
        product_id: false,
        description: false,
        discount: false,
        qty: false,
        product_category: false,
        price: false,
        delivery_charge: false,
        delivery: false
    }


    const [validation, setValidation] = useState()

    const [subCategoryData, setSubCategoryData] = useState([]);


    const imageArrayOne = ["Font", "Back", "Up", "Down", "Right", "Left"];
    const imageArrayTwo = ["Font", "Back", "Up", "Down", "Right", "Left"];
    const [imageData, setImageData] = useState(imageArrayOne);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData?.product_name?.trim() && formData?.product_id?.trim() && formData?.description?.trim() && formData?.discount?.trim()
            && formData?.qty?.trim() && formData?.product_category?.trim() && formData?.price?.trim()
            && formData?.delivery_charge?.trim() && formData?.delivery?.trim()) {

            console.log("all data are avaiable...")

        } else {

            if (formData?.product_name?.trim() === '' || formData?.product_name?.trim() === undefined) {
                dataValidation['p_name'] = true;
            }

            if (formData?.product_id?.trim() === '' || formData?.product_id?.trim() === undefined) {
                dataValidation['product_id'] = true;
            }


            setValidation(dataValidation);
        }

    }

    console.log(validation)

    const handleOnCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleImageUpload = (e, item) => {
        let file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = () => {
            const updatedImageArray = imageData.map((element, index) => {
                if (element === item) {
                    return fileReader.result;
                }
                return element;
            });
            setImageData(updatedImageArray);
        }

        if (file) {
            fileReader.readAsDataURL(file)
        }

    }


    const onInputChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

        setValidation(dataValidation)

        if (e.target.name === "product_category") {
            const [newCategories] = catagories?.filter(item => item.cateName === e.target.value);
            setSubCategoryData(newCategories?.subCategory);
        }
    }


    // console.log("c", catagories)
    return (
        <div>
            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                centered
                className='store-upload-product-sections'
            >
                <form onSubmit={handleSubmit}>
                    <Modal.Title className='header-title'>Upload Product</Modal.Title>
                    <Modal.Body className='store-upload-modal-sections'>

                        <div className='product-name'>
                            <label htmlFor="name">Name</label>
                            <input type="text" className={validation?.p_name ? "boder-red" : ''} name='product_name' id="name" onChange={onInputChange} />
                        </div>

                        <div className='product-Id'>
                            <label htmlFor="name">ProductId</label>
                            <input type="text" id="name" className={validation?.product_id ? "boder-red" : ''} name='product_id' onChange={onInputChange} />
                        </div>

                        <div className='product-description'>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" className={validation?.description ? "boder-red" : ''} name='description' onChange={onInputChange} ></textarea>
                        </div>

                        <div className='product-category'>
                            <label htmlFor="category">Category</label>
                            <select name='product_category' className={validation?.product_category ? "boder-red" : ''} onChange={onInputChange}>
                                <option>Select Category</option>

                                {catagories?.map((category, index) => (
                                    <option
                                        key={index}
                                        value={category.cateName}
                                    >
                                        {category.cateName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {
                            subCategoryData?.length > 0 &&
                            <div className='product-sub-category'>
                                <label htmlFor="category">Sub Category</label>
                                <select className='sub_category' >
                                    <option>Select Sub Category</option>
                                    {
                                        subCategoryData?.map((subCat, index) => (
                                            <option key={index}
                                                value={subCat.cateName}>
                                                {subCat.cateName}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        }

                        <div className='product-price'>
                            <label htmlFor="price">Price</label>
                            <input type="number" className={validation?.price ? "boder-red" : ''} htmlFor="price" name='price' onChange={onInputChange} />
                            <div className='usd-symbol'>USD</div>
                            <div className='dollar-symbol'>$</div>

                        </div>

                        <div className='discount-product-price'>
                            <label htmlFor="discount">Discount </label>
                            <input type="number" className={validation?.discount ? "boder-red" : ''} name='discount' htmlFor="discount" onChange={onInputChange} />
                            <div className='percentage-symbol'>%</div>
                        </div>

                        <div className='quantity'>
                            <label htmlFor="qty">Quantity</label>
                            <input type="text" htmlFor="qty" className={validation?.qty ? "boder-red" : ''} name="qty" onChange={onInputChange} />
                            <div className='unit' onChange={onInputChange} >
                                <select name='unit'>
                                    <option>Piece</option>
                                    <option>Kg</option>
                                    <option>ML</option>
                                </select>
                            </div>
                        </div>

                        <div className='delivery'>
                            <label htmlFor="delivery">Delivery</label>
                            <input type="text" htmlFor="delivery" name='delivery' className={validation?.delivery ? "boder-red" : ''} onChange={onInputChange} />
                        </div>

                        <div className='delivery'>
                            <label htmlFor="delivery_charge">Delivery Charge</label>
                            <input type="number" htmlFor="delivery_charge" className={validation?.delivery_charge ? "boder-red" : ''} name='delivery_charge' onChange={onInputChange} />
                        </div>


                        <div className="thumbnail-sections">
                            <label htmlFor="Thumb">Thumb</label>

                            <span className="thum-img-section">

                                {
                                    imageData.map((item, index) => (
                                        <div key={index} className='single-image'>
                                            <input type="file" name='thumb_img' onChange={(e) => handleImageUpload(e, item)} />
                                            {
                                                imageArrayTwo.includes(item) ? <p>{item}&nbsp;<img src={CameraIcon} alt="CameraIcon" /></p> :
                                                    <img src={item} style={{ width: "100px" }} />
                                            }
                                        </div>
                                    ))
                                }

                            </span>


                        </div>

                        <div className='privacy-sections'>
                            <input
                                type="checkbox"
                                id='privacy'
                                checked={isChecked}
                                onChange={handleOnCheckbox}
                            /> <label htmlFor="privacy">By checking this box, I confirm that I have read, understand and agree to the <Link target='_blank' to='/privacy'>Terms of Agreement</Link> and Privacy Policy.</label>
                        </div>

                    </Modal.Body>


                    <Modal.Footer className="store-upload-footer">
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <button type="submit" style={{ opacity: isChecked ? "1" : "0.5" }}>Submit</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default UploadProduct