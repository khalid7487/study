import React from 'react';
import './Search.scss';

const Search = ({ searchText, setSearchText, handleSearchClick, handleSearchKeyPress, handleChange }) => {

    const geography = [
        { name: "USA", value: "USA" },
        { name: "Canada", value: "Canada" },
        { name: "Uk", value: "Uk" },
        { name: "India", value: "India" }
    ];

    const traffic_type = [
        { name: "Traffic Type 1", value: "Traffic Type 1" },
        { name: "Traffic Type 2", value: "Traffic Type 2" },
        { name: "Traffic Type 3", value: "Traffic Type 3" },
        { name: "Traffic Type 4", value: "Traffic Type 4" }
    ]

    const task_type = [
        { name: "Task Type 1", value: "Task Type 1" },
        { name: "Task Type 2", value: "Task Type 2" },
        { name: "Task Type 3", value: "Task Type 3" },
        { name: "Task Type 4", value: "Task Type 4" }
    ]

    const status_type = [
        { name: "Status Type 1", value: "Status Type 1" },
        { name: "Status Type 2", value: "Status Type 2" },
        { name: "Status Type 3", value: "Status Type 3" },
        { name: "Status Type 4", value: "Status Type 4" }
    ]

    const rev_type = [
        { name: "Rev Type 1", value: "Rev Type 1" },
        { name: "Rev Type 2", value: "Rev Type 2" },
        { name: "Rev Type 3", value: "Rev Type 3" },
        { name: "Rev Type 4", value: "Rev Type 4" }
    ]

    const device_type = [
        { name: "Device Type 1", value: "Device Type 1" },
        { name: "Device Type 2", value: "Device Type 2" },
        { name: "Device Type 3", value: "Device Type 3" },
        { name: "Device Type 4", value: "Device Type 4" }
    ]



    return (
        <div className="campaign-search-section">

            <div className="input-area">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    placeholder="Searching for..."
                />
                <button onClick={() => handleSearchClick(searchText)} className="submit-btn">Submit</button>
            </div>

            <div className="select-area-container">

                <div className="select-area">

                    <select name="geography" id="Geography" onChange={handleChange}>
                        <option>Geography</option>
                        {
                            geography.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))
                        }


                    </select>

                    <select name="traffic_type" id="Traffic Type" onChange={handleChange}>
                        <option>Traffic Type</option>
                        {
                            traffic_type.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))
                        }

                    </select>

                </div>
                <div className="select-area">

                    <select name="task_type" id="Task Type" onChange={handleChange}>
                        <option value="Task Type">Task Type</option>

                        {
                            task_type.map((item, index) => (

                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))
                        }

                    </select>

                    <select name="status_type" id="Status Type" onChange={handleChange}>
                        <option value="Status Type">Status Type</option>

                        {

                            status_type.map((item, index) => (

                                <option key={index} value={item.value}>{item.name}</option>
                            ))

                        }

                    </select>

                </div>

                <div className="select-area">
                    <select name="rev_type" id="Rev Type" onChange={handleChange}>
                        <option value="Rev Type">Rev Type</option>

                        {
                            rev_type.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))
                        }

                    </select>

                    <select name="device_type" id="Device Type" onChange={handleChange}>
                        <option value="Device Type">Device Type</option>

                        {
                            device_type.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))
                        }

                    </select>
                </div>
            </div>
        </div>
    );
};

export default Search; 





<!--  -->

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Search from './Search/Search';
import Campaigns from './Campaigns/Campaigns';

// campaignAllCampaign is json
import { campaignAllCampaign } from '../../../store/campaign/action';

const AllCampaigns = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [formdata, setFormdata] = useState({});


    const { campaigns } = useSelector(state => state.campaign);



    const handleChange = async (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value });

    }

    useEffect(() => {

        let unmount = false;
        // console.log(formdata, "filter data1");
        if (!unmount) {
            if (Object.keys(formdata).length && !unmount) {
                searchHandlerForSelect()
            }
        }

        return () => {
            unmount = false;
        }

    }, [formdata])




    const searchHandlerForSelect = () => {

        let conditions = []


        if (formdata.geography) {
            conditions.push(function (item) {
                return item.geography === formdata.geography;
            });
        };

        if (formdata.traffic_type) {
            conditions.push(function (item) {
                return item.trafficType === formdata.traffic_type;
            });
        };

        if (formdata.task_type) {
            conditions.push(function (item) {
                return item.taskType === formdata.task_type;
            })
        };

        if (formdata.status_type) {
            conditions.push(function (item) {
                return item.statusType === formdata.status_type;
            })
        }

        if (formdata.rev_type){
            conditions.push(function (item) {
                return item.revType === formdata.rev_type;
            })
        }

        if (formdata.device_type){
            conditions.push(function (item) {
                return item.deviceType === formdata.device_type;
            })
        }
        
        const itemsMatchingCondition = campaigns.filter(d => conditions.every(c => c(d)));
        
        setSearchData(itemsMatchingCondition);

        console.log(itemsMatchingCondition, "test conditions ");

    }



    const handleCampaignDetails = (id) => {
        history.push(`/campaigns/campaign/${id}`);
    };

    useEffect(() => {
        let unmount = false;
        if (!unmount) {
            dispatch(campaignAllCampaign());
        }

        return () => {
            unmount = true;
        }

    }, [])

    useEffect(() => {
        let unmount = false;
        if (!unmount) {
            if (searchData?.length === 0) {
                setSearchData(campaigns)
            } else {
                setSearchData([...searchData])
            }
        }

        return () => {
            unmount = true
        }

    }, [])

    history.listen((location, action) => {
        if (location.pathname != "/campaigns") {
            setSearchData([]);
        }
    });


    const handleSearchClick = (searchText) => {
        const newSearchData = campaigns.filter((campaign) => campaign.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchData(newSearchData);
        setSearchText("");
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchClick(e.target.value);
        }
    };

    return (
        <div>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
                handleChange={handleChange}
                handleSearchClick={handleSearchClick}
                handleSearchKeyPress={handleSearchKeyPress}
            />
            <Campaigns campaigns={searchData} handleCampaignDetails={handleCampaignDetails} />
        </div>
    );
};

export default AllCampaigns;














