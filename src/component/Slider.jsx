import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="pager" onClick={onClick}>
      <a className="prev" title="슬라이드 이전 버튼">
          <span className="ir">슬라이드 이전 버튼</span>
          &lt;
      </a>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="pager" onClick={onClick}>
       <a className="next" title="슬라이드 다음 버튼">
          <span className="ir">슬라이드 다음 버튼</span>
            &gt; 
      </a>
    </div>
  );
};

// const slider = () => {
  export default class slider extends Component{
    render() {
      const settings = {
        slide : "div", 
        infinite : true, 
        slidesToShow : 1, 
        slidesToScroll : 1, 
        speed : 1000, 
        arrows: true, 
        dots: true, 
        autoplay: true,  
        autoplaySpeed: 2000, 
        pauseOnHover: false, 
        vertical: false, 
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        draggable: true, 
        responsive: [ 
          {
            breakpoint: 960, 
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

  return (
    <section id="slider">
        <div className="main__slider">
          <Slider {...settings} >
              <div className="slick1">
                <img src="/images/2_b1.jpg" alt="신일전자 광고1"/>
                <a href="#" title="View More">View More</a>
              </div>
              <div className="slick2">
                <img src="/images/2_b2.jpg" alt="신일전자 광고2"/>
                <div className="slick2__desc">
                  <h2>#정경호_신일하다!</h2>
                  <p className="desc1">가정을 넘어</p>
                  <p className="desc2">당<strong>신</strong>의 <strong>일</strong>상을 디자인하다!</p>
                  <a href="#" title="View More">View More</a>
                </div>
              </div>
              <div className="slick3">
                <img src="/images/2_b3.jpg" alt="신일전자 광고3"/>
                <div className="slick3__desc">
                  <h2><strong>NEW</strong> 신일 에어서큘레이터</h2>
                  <p className="desc1">예쁘게 시원하다!</p>
                  <p className="desc2">더욱 강력해진 최고급 BLDC 모터로</p>
                  <p className="desc3">공간을 바꾸는 바람을 느껴보세요</p>
                  <a href="#" title="View More">View More</a>
                </div>
              </div>
              <div className="slick4">
                <img src="/images/2_b4.jpg" alt="신일전자 광고4"/>
                <div className="slick4__desc">
                  <h2>신일 스탠딩 드라이어</h2>
                  <p className="desc1">두손이 d자유로운 새로운 바람</p>
                  <p className="desc2">반려동물에게는 섬세하고 조용하게,</p>
                  <p className="desc3">우리 가족에게는 빠르고 강력하게!</p>
                  <a href="#" title="View More">View More</a>
                </div>
              </div>
          </Slider>
            </div>
            {/* <div className="pager">
              <a className="prev" title="슬라이드 이전 버튼">
                  <span className="ir">슬라이드 이전 버튼</span>
                  &lt;
              </a>
              <a className="next" title="슬라이드 다음 버튼">
                  <span className="ir">슬라이드 다음 버튼</span>
                   &gt; 
              </a>
            </div> */}
      </section>
  );
  }
}
// export default slider
