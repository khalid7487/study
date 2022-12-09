import React from 'react';
import { Accordion,  Container,  } from 'react-bootstrap';
import './AllProducts.css';

const AllProducts = () => {

    const categories =  [
        
            {
              "_id": "62621f0ca2763f1c3862289a",
              "name": "Gift Items",
              "subCategories": []
            },
            {
              "_id": "62621efca2763f1c38622894",
              "name": "Home Decor and Lifestyle",
              "subCategories": []
            },
            {
              "_id": "62621ec4a2763f1c3862288e",
              "name": "Women's Fashion",
              "subCategories": [
                {
                  "_id": "62ad5af6a4a73f5179d7ba32",
                  "name": "Women's",
                  "childs": []
                }
              ]
            },
            {
              "_id": "62621eaea2763f1c38622888",
              "name": "Men's Fashion",
              "subCategories": [
                {
                  "_id": "62ad4a09a4a73f5179d7b690",
                  "name": "Sub Men's Fashion",
                  "childs": [
                    {
                      "_id": "62ad4a1ba4a73f5179d7b699",
                      "name": "Child Men's Fashion"
                    }
                  ]
                }
              ]
            },
            {
              "_id": "62621e83a2763f1c38622882",
              "name": " Electronics and Appliances",
              "subCategories": []
            },
            {
              "_id": "62621e69a2763f1c3862287c",
              "name": "Vehicles and Automobiles",
              "subCategories": []
            },
            {
              "_id": "62621e42a2763f1c38622876",
              "name": " Computer and Accessories",
              "subCategories": []
            },
            {
              "_id": "62621e2aa2763f1c38622870",
              "name": " Mobile and Accessories",
              "subCategories": []
            },
            {
              "_id": "62621dfda2763f1c3862286a",
              "name": "Babies and Toys",
              "subCategories": []
            },
            {
              "_id": "62621de4a2763f1c38622864",
              "name": "Grocery",
              "subCategories": [
                {
                  "_id": "62ad49dba4a73f5179d7b67f",
                  "name": "Sub Grocery",
                  "childs": [
                    {
                      "_id": "62ad49e4a4a73f5179d7b688",
                      "name": "Child Grocery"
                    }
                  ]
                }
              ]
            }
          ]
    

  
    return (
        <>  
            <Container className="category-container">
                            <h6 className="px-3"><strong>Category</strong></h6>
                            {   
                                categories?.slice(0).reverse().map(unique =>  <div key={unique.name}>
                                    <Accordion style={{borderBottom: '1px solid #eaeaea'}}>
                                        <Accordion.Item eventKey="0">
                                            {   
                                                unique?.subCategories?.length === 0 ?
                                                <div className="d-flex align-items-center" style={{padding: '6px 17px'}}>
                                                    <div style={{color: "#666666"}} key={unique.name}>{unique.name}</div>
                                                </div>
                                                : 
                                                <>
                                                    <Accordion.Header style={{marginRight: '10px'}}>
                                                        <div className="d-flex align-items-center" style={{padding: '8px 17px'}}>
                                                            <div style={{color: "#666666"}} key={unique.name}>{unique.name}</div>
                                                        </div>
                                                    </Accordion.Header>
                                                    {
                                                        unique?.subCategories?.map( subCat =>  <div key={subCat._id}>
                                                            <Accordion.Body>
                                                                <Accordion >
                                                                    <Accordion.Item eventKey="0">
                                                                        {   
                                                                            subCat?.childs?.length === 0 ?
                                                                            <div className="d-flex align-items-center" style={{padding: '8px 17px'}}>
                                                                                <span style={{fontSize: '13px', color: "#666666", padding: '1px 5px 0px', cursor: 'pointer'}}>{subCat.name}</span>
                                                                            </div>
                                                                            :
                                                                            <>
                                                                                <Accordion.Header>
                                                                                    <div className="d-flex align-items-center" style={{padding: '8px 17px'}}>
                                                                                        <span style={{fontSize: '13px', color: "#666666", padding: '1px 5px 0px',}}>{subCat.name}</span>
                                                                                    </div>
                                                                                </Accordion.Header>
                                                                                {
                                                                                    subCat?.childs?.map( subCatChild =>  <div key={subCatChild._id}>
                                                                                        <Accordion.Body>
                                                                                            <div className="d-flex align-items-center" style={{padding: '8px 17px'}}>
                                                                                                <span style={{fontSize: '11px', color: "#666666", padding: '1px 5px 0px', cursor: 'pointer'}}>{subCatChild.name}</span>
                                                                                            </div>
                                                                                        </Accordion.Body>
                                                                                    </div>)
                                                                                }
                                                                            </>
                                                                        }
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Accordion.Body>
                                                        </div>)
                                                    }
                                                </>
                                            }
                                        </Accordion.Item>
                                    </Accordion>
                                </div>)
                                    
                                
                            }
                            
                        
                    
                </Container>
        </>
    );
};

export default AllProducts;