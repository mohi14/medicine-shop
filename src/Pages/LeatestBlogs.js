import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const LeatestBlogs = () => {
    const [leatestBloges, setleatestBloge] = useState([]);
    useEffect(() =>{
        fetch("leatestBloge.json")
        .then((res) => res.json())
        .then(data => setleatestBloge(data))
    },[])

    const settings = {  
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 3,
                 slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 3,
                 slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                arrows: false,
                speed: 600,
                slidesToShow: 1,
                 slidesToScroll: 1,
              }
            }
          ]
      };
    return (
        <>

        {/* <!-- BLOG AREA START (blog-3) --> */}
<div class="ltn__blog-area pt-115 pb-45 ">
        <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color d-none">News & Blogs</h6>
                        <h1 class="section-title">Leatest Blogs</h1>
                    </div>
                </div>
            </div>

            <div class="row  ltn__blog-slider-one-active slick-arrow-12 ltn__blog-item-3-normal">

            <Slider {...settings}>
          {leatestBloges.map(leatestBloge =>(<div>
          <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src={leatestBloge.imageUrl} alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: {leatestBloge.role}</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>{leatestBloge.title}</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">{leatestBloge.description}</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>{leatestBloge.date}</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>))
          }
                
        </Slider>

            </div>

        </div>

</div>

{/* <!-- BLOG AREA END --> */}
        </>
    );
};

export default LeatestBlogs;