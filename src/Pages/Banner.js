import React from 'react';

const Banner = () => {
    return (
        <>
          {/* <!-- BANNER AREA START --> */}
    <div className="ltn__banner-area mt-120---">
        <div className="container">
            <div className="row ltn__custom-gutter--- justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="ltn__banner-item">
                        <div className="ltn__banner-img">
                            <a href="shop.html"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/1.jpg" alt="Banner Image"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="ltn__banner-item">
                        <div className="ltn__banner-img">
                            <a href="shop.html"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/2.jpg" alt="Banner Image"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="ltn__banner-item">
                        <div className="ltn__banner-img">
                            <a href="shop.html"><img src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/3.jpg" alt="Banner Image"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BANNER AREA END --> */}
        </>
    );
};

export default Banner;