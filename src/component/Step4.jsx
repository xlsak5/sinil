import React from 'react';

const Step4 = () => {
  return (
    <section id="banner__shinil">
        <div className="container">
          <div className="shinil__box">
            <div className="shinil__desc">
              <span>STAP04</span>
              <h2>SHINIL <strong className="bold">SHINIL</strong></h2>
              <p>항상 고객을 먼저 생각합니다.</p>
            </div>
            <div className="shinil__list">
              <ul>
                <li>
                  <a href="#" title="FAQ">
                  {/* src="assets/img/imageType01_02.jpg" */}
                    <img src="/images/icn_sec0301.png" className="faq" alt="FAQ" />
                    <span className="strong">FAQ</span>
                    <p>
                        자주묻는 질문들을<br/>
                        자세히 알려드립니다.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" title="제품설명서">
                    <img src="/images/icn_sec0302.png" className="product" alt="제품설명서" />
                    <span className="strong">제품설명서</span>
                    <p>
                        제품별 설명서를<br/>
                        다운로드 받으세요
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" title="서비스센터">
                    <img src="/images/icn_sec0303.png" className="service" alt="서비스센터" />
                    <span className="strong">서비스센터</span>
                    <p>
                        전국에 있는 서비스 센터를<br/>
                        알려드립니다.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" title="대리점안내">
                    <img src="/images/icn_sec0304.png" className="agent" alt="대리점안내" />
                    <span className="strong">대리점안내</span>
                    <p>
                        대리점의 위치를<br/>
                        자세히 알려드립니다.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="shinil__customer">
              <ul>
                <li>
                  <a href="#" title="상담 안내">
                    <p className="customer__strong">CUSTOMER CENTER</p>
                    <span className="desc1">문의하신 내용을 친절히 상담해드립니다.</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Tel. 1577-6667">
                    <p className="company__call">Tel. 1577-6667 <strong>/ Fax.02-2069-0282</strong></p>
                    <span className="desc2">평일: 오전09:00 ~ 오후06:00/토,일요일.공휴일:휴무</span>
                  </a>
                </li>
                <li>
                  <img src="/images/icn_call.png" className="call" alt="전화하기" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Step4