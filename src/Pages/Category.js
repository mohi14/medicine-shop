import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Category = () => {
  // const [categorys, setCategory] = useState([]);
  // useEffect(() => {
  //   fetch("categoryData.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategory(data));
  // }, []);

  const categorys = [
    {
      categoryID: 1,
      categoryName: "Best Deals",
      imageUrl: "fas fa-notes-medical",
    },

    {
      categoryID: 2,
      categoryName: "Germs Pads",
      imageUrl: "fas fa-box-tissue",
    },

    {
      categoryID: 3,
      categoryName: "Accessories",
      imageUrl: "fas fa-pump-medical",
    },

    { categoryID: 4, categoryName: "Medicine Cap", imageUrl: "fas fa-bong" },

    { categoryID: 5, categoryName: "Dental Item", imageUrl: "fas fa-tooth" },

    {
      categoryID: 6,
      categoryName: "All Products",
      imageUrl: "fas fa-microscope",
    },

    { categoryID: 7, categoryName: "Germs Pads", imageUrl: "fas fa-syringe" },

    {
      categoryID: 8,
      categoryName: "Accessories",
      imageUrl: "fas fa-hand-holding-medical",
    },

    {
      categoryID: 9,
      categoryName: "Medicine Cap",
      imageUrl: "fas fa-procedures",
    },
  ];

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     autoplay: true,
      //     cssEase: "linear",
      //     autoplaySpeed: 2000,
      //     infinite: true,
      //     arrows: false,
      //     speed: 500,
      //     slidesToShow: 7,
      //      slidesToScroll: 9,
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: false,
          speed: 600,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          arrows: false,
          speed: 600,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- CATEGORY AREA START --> */}

      <div className="ltn__category-area section-bg-12-- pt-50 pb-90 ">
        <div className="container ">
          <div className="row ltn__category-slider-active-six slick-arrow-1 border-bottom ">
            <Slider {...settings}>
              {categorys.map((category) => (
                <div className="col-12">
                  <div>
                    <div className="ltn__category-item ltn__category-item-6 text-center">
                      <div className="ltn__category-item-img">
                        <Link to="/products">
                          <i className={category.imageUrl}></i>
                        </Link>
                      </div>
                      <div className="ltn__category-item-name">
                        <h6>
                          <Link to="/products">{category.categoryName}</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-box-tissue"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Germs Pads</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-pump-medical"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Accessories</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-bong"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Medicine Cap</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-tooth"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Dental Item</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-microscope"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Best Deals</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-syringe"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">All Products</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-stethoscope"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Germs Pads</a></h6>
                            </div>
                        </div>
                    </div>
          </div>
          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-hand-holding-medical"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Accessories</a></h6>
                            </div>
                        </div>
                    </div>
          </div>

          <div>
          <div className="col-12">
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <a href="shop.html">
                                    <i className="fas fa-procedures"></i>
                                </a>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6><a href="shop.html">Medicine Cap</a></h6>
                            </div>
                        </div>
                    </div>
          </div> */}
            </Slider>
          </div>
        </div>
      </div>

      {/* <!-- CATEGORY AREA END -->
       */}
    </>
  );
};

export default Category;
