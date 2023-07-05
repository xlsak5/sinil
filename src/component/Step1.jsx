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
          {/* &lt; */}
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
            {/* &gt;  */}
      </a>
    </div>
  );
};

// const Step1 = () => {
  export default class Step1 extends Component{
    render() {
      const settings = {
        slide : "div", 
        infinite : true, 
        slidesToShow : 4, 
        slidesToScroll : 4, 
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
        appendDots: (dots) => (
          <div
            style={{
              display: 'flex',
            }}
          >
            <ul> {dots} </ul>
          </div>
        ),
        responsive: [ 
          {
            breakpoint: 960, 
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      };
      return (
        <section id="banner">
            <div className="container">
              <div className="banner__box">
                <div className="banner__desc">
                  <span>STAP01</span>
                  <h2>SHINIL <strong className="bold">PRODUCT</strong></h2>
                  <p>기술과 신뢰, 높은 기술력을 통해 세계로</p>
                </div>
                <div className="banner__search">
                  <form action="" name="">
                    <fieldset>
                      <legend className="ir">제품 검색 영역입니다.</legend>
    
                      <label className="product" for="product" title="제품검색">제품검색</label>
                      <input className="product__search" type="search" id="product" name="product" placeholder="제품명을 검색해주세요."/>
                      <button className="searchBtn" title="검색 버튼"><span className="ir">검색 버튼</span></button>
                    </fieldset>
                  </form>
                </div>
                <div className="banner__slide__box">
                  <div className="banner__slide">
                    <Slider {...settings}>

                        <div className="slide01">
                          <img src="/images/sec01_list01.png" alt="신제품" />
                          <p>신제품</p>
                        </div>
                        <div className="slide02">
                          <img src="/images/sec01_list02.png" alt="선풍기" />
                          <img src="/images/sec01_list02_on.png" className="list02__on" alt="선풍기 버튼에 마우스가 올라갔어요." />
                          <p>선풍기</p>
                        </div>
                        <div className="slide03">
                          <img src="/images/sec01_list03.png" alt="여름가전" />
                          <img src="/images/sec01_list03_on.png" className="list03__on" alt="여름가전 버튼에 마우스가 올라갔어요." />
                          <p>여름가전</p>
                        </div>
                        <div className="slide04">
                          <img src="/images/sec01_list04.png" alt="겨울가전" />
                          <img src="/images/sec01_list04_on.png" className="list04__on" alt="겨울가전 버튼에 마우스가 올라갔어요." />
        
                          <p>겨울가전</p>
                        </div>
                        <div className="slide05">
                          <img src="/images/sec01_list05.png" alt="주방가전" />
                          <img src="/images/sec01_list05_on.png" className="list05__on" alt="주방가전 버튼에 마우스가 올라갔어요." />
        
                          <p>주방가전</p>
                        </div>
                        <div className="slide06">
                          <img src="/images/sec01_list06.png" alt="생활가전" />
                          <img src="/images/sec01_list06_on.png" className="list06__on" alt="생활가전 버튼에 마우스가 올라갔어요." />
        
                          <p>생활가전</p>
                        </div>
                        <div className="slide07">
                          <img src="/images/sec01_list07.png" alt="생활가전" />
                          <img src="/images/sec01_list07_on.png" className="list07__on" alt="생활가전 버튼에 마우스가 올라갔어요." />
        
                          <p>생활가전</p>
                        </div>
                        <div className="slide08">
                          <img src="/images/sec01_list08.png" alt="환경가전" />
                          <img src="/images/sec01_list08_on.png" className="list08__on" alt="환경가전 버튼에 마우스가 올라갔어요." />
        
                          <p>환경가전</p>
                        </div>
                    </Slider>
                  </div>
                  {/* <div className="pager">
                    <a className="prev" title="배너 이전 버튼"><span className="ir">배너 이전 버튼</span></a>
                    <a className="next" title="배너 다음 버튼"><span className="ir">배너 다음 버튼</span></a>
                  </div> */}
                </div>
              </div>
              {/* <ul class="slick-dots" style="display:flex"></ul> */}
            </div>
          </section>
    );
  } 
}

// export default Step1
