import React from 'react';

const Step2 = () => {
  return (
    <section id="banner__guide">
        <div className="container">
          <div className="guide__box">
            <div className="guide__desc">
              <span>STAP02</span>
              <h2>SHINIL <strong className="bold">PRODUCT</strong></h2>
              <p>신일전자의 다양한 제품 소식을 만나보세요</p>
            </div>
            <div className="guide__wrap">
              <div className="guide__left">
                <div className="left__top">
                  <div className="guide__product">
                    <p>PRODUCT <br/> 
                      <strong className="bold">GUIDE</strong>
                    </p>
                  </div>
                  <div className="guide__event">
                    <a href="https://www.youtube.com/watch?v=pG6iaOMV46I" target="_blank" title="아이브 Kitsch">
                      <img src="/images/5_1.jpg" alt="아이브 Kitsch" />
                    </a>
                    <p>신일전자 공식 유튜브 이벤트</p>
                  </div>
                </div>
                <div className="left__bottom">
                  <ul>
                    <li>
                      <img src="/images/5_2.jpg" alt="서큘레이터 Review" />
                      <a href="#" title="서큘레이터 Review">서큘레이터 Review</a>
                    </li>
                    <li>
                      <img src="/images/5_3.jpg" alt="무선 BLDC팬 Review" />
                      <a href="#" title="무선 BLDC팬 Review">무선 BLDC팬 Review</a>
                    </li>
                    <li>
                      <img src="/images/5_4.jpg" alt="스탠딩드라이어 Review" />
                      <a href="#" title="스탠딩드라이어 Review">스탠딩드라이어<br/>Review</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide__right">
                <a href="#" title="확내린 가격 전기세 걱정타파">
                  <img src="images/5_5.jpg" alt="확내린 가격 전기세 걱정타파" />
                  <span>신일과 맘편히 시원하자!</span>
                </a>
              </div>
            </div>
            <div className="review__more">
              <a href="#" title="더 많은 리뷰 보기">더 많은 리뷰 보기</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Step2;
