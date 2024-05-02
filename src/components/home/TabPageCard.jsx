import React from 'react';

const TabPageCard = ({cardImage}) =>{
    return(
        <>
            <div className="card">
                      <img
                        src={cardImage}
                        className="card-img rounded-bottom-0"
                        alt="cardsImage"
                      />
                      <div className="card-img-overlay">
                        <div className="image-icon-box">
                          <div className="view-box">
                            <i class="fa-regular fa-eye"></i>
                            <p>27 Views</p>
                          </div>
                          <div className="like-box">
                            <i className="fa-regular fa-heart cursor-pointer"></i>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-1">
                        <h6>Lorem ipsum dolor sit amet lorem.</h6>
                        <p className="text-secondary">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="icon-box border-top">
                          <div>
                            <i className="fa-solid fa-kit-medical icon-for-round"></i>
                            <p className="para">General</p>
                          </div>
                          <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-regular fa-heart cursor-pointer"></i>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
};

export default TabPageCard;