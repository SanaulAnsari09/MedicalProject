import React from "react";
import TabPageCard from "./TabPageCard";

const TabsPage = ({heading, tabTitle1, tabTitle2, tabTitle3, tabId1, tabId2, tabId3}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <h1 className="text-center text-secondary">{heading}</h1>
          <div className="col-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#${tabId1}`}
                  type="button"
                  role="tab"
                  aria-controls={tabId1}
                  aria-selected="true"
                >
                  {tabTitle1}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#${tabId2}`}
                  type="button"
                  role="tab"
                  aria-controls={tabId2}
                  aria-selected="false"
                >
                {tabTitle2}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#${tabId3}`}
                  type="button"
                  role="tab"
                  aria-controls={tabId3}
                  aria-selected="false"
                >
                  {tabTitle3}
                </button>
              </li>
            </ul>
            <div className="tab-content py-3" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id={tabId1}
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div className="row row-gap-3">
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3148935/pexels-photo-3148935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    />
                  </div>
                </div>
              </div>
              {/* Second Tab */}
              <div
                className="tab-pane fade"
                id={tabId2}
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div className="row row-gap-3">
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3148935/pexels-photo-3148935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    />
                  </div>
                </div>
              </div>
              {/* Third Tab */}
              <div
                className="tab-pane fade"
                id={tabId3}
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <div className="row row-gap-3">
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/3148935/pexels-photo-3148935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <TabPageCard
                        cardImage="https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsPage;
