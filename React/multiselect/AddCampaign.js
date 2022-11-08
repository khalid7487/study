import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactCountryFlag from "react-country-flag";

import "./AddCampaign.scss";

import CameraIcon from "../../../assets/Camera.png"

import { Countries } from "../../../shared"


function AddCampaign({ show, handleClose }) {

    const [formData, setFormData] = useState({
        offer: false,
        status: 0
    });
    const [supportFormate, setSupportFormate] = useState({
        android: false,
        ios: false,
        windows: false,
        all: false
    });


    const [geography, setGeography] = useState([]);
    const [geographyText, setGeographyText] = useState('');
    const [toggleSuggestBox, setToggleSuggestBox] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState('');
    const [geographySuggest, setGeographySuggest] = useState([]);



    const imageArrayOne = ["First", "Second", "Third"];
    const imageArrayTwo = ["First", "Second", "Third"];
    const supportedImgFormat = ["jpg", "jpeg", "png"];

    const [imageData, setImageData] = useState(imageArrayOne);


    const geographyChangeHandler = (e) => {

        console.log(e.target.value);
        setGeographyText(e.target.value);
        setToggleSuggestBox(true);

        const filterCountry = Countries?.filter((item) => item.label.toLowerCase().includes(e.target.value.toLowerCase()));
        setGeographySuggest(filterCountry);
    }

    // add geography using suggest click
    const handleSuggestClick = (item) => {
        setGeographyText('')
        setGeography([...geography, item]);
        setGeographySuggest([])
        setToggleSuggestBox(false);

    }

    const onInputChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }


    //remove geography from geography array  
    const removeGeographyHandler = (item) => {
        console.log(item, "click for remove an item");

        const filterData = geography.filter(country => country !== item);
        console.log(filterData, "test filter data ")
        setGeography(filterData);

    }



    // device support change handler
    const onFormatSupportChangeHandler = (e) => {

        console.log(e.target.name);

        console.log(e.target.checked);

        if (e.target.name === "all") {

            console.log("into all");
            setToggleCheckBox(false);



        } else {

            console.log("others ");
            setToggleCheckBox(true);



        }


        setSupportFormate({
            ...supportFormate,
            [e.target.name]: e.target.checked
        });

    }

    const handleImageUpload = (e, item) => {
        console.log(e);
        console.log(item);

        // let file = e.target.files[0];
        // const fileReader = new FileReader();

        // const splitedFile = file?.type?.split("/")[1];

        // if (supportedImgFormat.includes(splitedFile)) {
        //     fileReader.onload = () => {
        //         const updatedImageArray = imageData.map((element, index) => {
        //             if (element === item) {
        //                 setImageValidation({ ...imageValidation, [element]: true });
        //                 return fileReader.result;
        //             }
        //             return element;
        //         });
        //         setImageData(updatedImageArray);
        //     }

        //     if (file) {
        //         fileReader.readAsDataURL(file)
        //     }
        // }


        let file = e.target.files[0];
        const fileReader = new FileReader();
        const splitFile = file?.type?.split("/")[1];

        if (supportedImgFormat.includes(splitFile)) {
            fileReader.onload = () => {
                const updatedImageArray = imageData.map((element, index) => {
                    if (element === item) {
                        return fileReader.result;
                    }
                    return element;
                });

                console.log(updatedImageArray);
            }

            if (file) {
                fileReader.readAsDataURL(file)
            }

        }


    }

    console.log(geography, "geography");
    console.log(imageData);


    return (
        <div className='campaign-modal-section'>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                centered
                className='campaign-modal-sections'
            >

                <Modal.Title className='header-title'>Add Price Rate</Modal.Title>

                <Modal.Body className='campaign-modal-body'>

                    <div className='campaign-modal-section'>

                        <div className='campaigns-id'>
                            <label>Campaign ID</label>
                            <input name='campaign_id'
                                value={formData?.campaign_id || ''}
                                onChange={onInputChange}
                                type="number" />
                        </div>

                        <div className='campaigns-name'>
                            <label>Name</label>
                            <input name='name'
                                onChange={onInputChange}
                                value={formData?.name || ''}
                                type="text"
                            />
                        </div>

                        <div className='description'>
                            <label>Description</label>
                            <textarea name='description' value={formData?.description || ''}
                                onChange={onInputChange} type="text" />
                        </div>


                        <div className='geography'>
                            <label>Countries Allowed</label>

                            {/* how to do it manually  */}


                            <div className='multi-select-sections'>

                                <input name='geography'
                                    value={geographyText}
                                    type="text"
                                    onChange={geographyChangeHandler}
                                />

                                {geographySuggest.length > 0 && (
                                    <div
                                        className="suggest-box"
                                        style={{ display: toggleSuggestBox && geographyText.length > 0 ? "flex" : "none" }}
                                        // style={{ display: toggleSuggestBox ? "flex" : "none", }}
                                    >
                                        <div>
                                            {geographySuggest?.slice(0, 10).map((country, index) => (
                                                <button
                                                    key={index}
                                                    className="suggest-box-search-btn"
                                                    onClick={() => handleSuggestClick(country.label)}
                                                >
                                                    <ReactCountryFlag countryCode={country.code} svg />
                                                    <span className="suggest-box-line-climb">
                                                        {country.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}



                                {
                                    geography?.map((item, index) => (
                                        <div key={index} className='single-item'>
                                            <span className='country-name'>{item}</span>
                                            <span className='geography-cross' onClick={() => removeGeographyHandler(item)}>x</span>
                                        </div>
                                    ))

                                }


                            </div>


                        </div>

                        <div className='traffic-type'>
                            <label>Traffic Type</label>
                            <select name='traffic_type' onChange={onInputChange}>
                                <option>Select Traffic Type</option>
                                <option value="contextual">Contextual</option>
                                <option value="display">Display</option>
                                <option value="search">Search</option>
                                <option value="social">Social</option>
                                <option value="mobile_ads">Mobile Ads</option>
                                <option value="email">Email</option>
                            </select>
                        </div>

                        <div className='rev-type'>
                            <label>Rev Type</label>
                            <select name='rev_type' onChange={onInputChange}>
                                <option>Select Rev Type</option>
                                <option className='leads'>Parentage</option>
                                <option className='share'>Fixed</option>
                            </select>
                        </div>

                        <div className='task-type'>
                            <label>Task Type</label>
                            <select name='task_type' onChange={onInputChange}>
                                <option>Select Task Type</option>
                                <option className='soi' value='soi'>SOI</option>
                                <option className='doi' value='doi'>DOI</option>
                                <option className='form submit' value='form submit'>Form Submit</option>
                                <option className='cc submit' value='cc submit'>CC Submit</option>
                            </select>
                        </div>

                        <div className='daily-cap'>
                            <label>Daily Cap</label>
                            <input name='daily_cap' type="number"
                                value={formData?.daily_cap || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='rate'>
                            <label>Rate</label>
                            <input name='rate' type="number"
                                value={formData?.rate || ''}
                                onChange={onInputChange}
                            />

                            <div className='usd-symbol'>USD</div>
                            <div className='dollar-symbol'>$</div>
                        </div>


                        <div className='expire-date'>
                            <label>Expire Date</label>
                            <input name='expire_date' type="date"
                                value={formData?.expire_date || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='tracking-date'>
                            <label>Tracking Type</label>

                            <select name='tracking_type' onChange={onInputChange}>
                                <option>Select Task Type</option>
                                <option className='manual'>Manual</option>
                                <option className='server_to_server'>Server to Server</option>
                            </select>
                        </div>


                        <div className='keyword-restrictions'>
                            <label>Restrictions Key</label>
                            <textarea name='restricted_keyword' value={formData?.restricted_keyword || ''}
                                onChange={onInputChange} type="text" />

                        </div>

                        <hr />
                        <div className='display-supported-sections'>

                            <h6>Device Type</h6>

                            <div className='display-supported'>

                                <div className='android'>
                                    <input type="checkbox" id="android" name="android" onChange={onFormatSupportChangeHandler} value="false" />
                                    <label htmlFor="android">Android</label>
                                </div>

                                <div className='ios'>
                                    <input type="checkbox" id="ios" name="ios" onChange={onFormatSupportChangeHandler} value="false" />
                                    <label htmlFor="ios">iOS</label>
                                </div>

                                <div className='windows'>
                                    <input type="checkbox" id="windows" name="windows" onChange={onFormatSupportChangeHandler} value="false" />
                                    <label htmlFor="windows">Windows</label>
                                </div>

                                <div className='all'>
                                    <input type="checkbox"
                                        disabled={toggleCheckBox == '' ? false :
                                            toggleCheckBox ? true : false
                                        }
                                        id="all" name="all" onChange={onFormatSupportChangeHandler} value="false" />
                                    <label htmlFor="all">All device operating systems allowed</label>
                                </div>
                            </div>


                        </div>

                        <hr />

                        <div className='contextual'>
                            <label>Contextual URL</label>
                            <textarea name='contextual' value={formData?.contextual || ''}
                                onChange={onInputChange} type="text" />
                        </div>

                        <div className='display'>
                            <label>Display URL</label>
                            <textarea name='display' type="text"
                                value={formData?.display || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='search-url'>
                            <label>Search URL</label>
                            <textarea name='search' type="text"
                                value={formData?.search || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='social'>
                            <label>Social URL</label>
                            <textarea name='social' type="text"
                                value={formData?.social || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='email'>
                            <label>Email URL</label>
                            <textarea name='email' type="text"
                                value={formData?.email || ''}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className='mobile-ads'>
                            <label>Mobile Ads URL</label>
                            <textarea name='mobile_ads' type="text"
                                value={formData?.mobile_ads || ''}
                                onChange={onInputChange}
                            />
                        </div>


                        <div className='campaign-img-sections'>
                            <h6>PL</h6>

                            <span className="campaign-img-section">

                                {
                                    imageData.map((item, index) => (
                                        // <div key={index} className={(validation[item] != item) ? 'single-image' : 'single-image border-red'}>
                                        <div key={index} className='single-image'>
                                            <input type="file" accept='.jpg, .jpeg, .png' name='thumb_img'
                                                onChange={(e) => handleImageUpload(e, item)}
                                            />
                                            {
                                                imageArrayTwo.includes(item) ? <p>Select({index + 1})</p> :
                                                    <img src={item} style={{ width: "100px" }} />
                                            }
                                        </div>
                                    ))
                                }

                            </span>
                        </div>




                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        // onClick={SaveHandler}
                        variant="primary">Submit</Button>
                </Modal.Footer>

            </Modal>


        </div>
    )
}

export default AddCampaign