import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__box">
          <div className="footer__top">
            <ul>
              <li><a href="#" title="서비스센터">서비스센터</a></li>
              <li><a href="#" title="사이트맵">사이트맵</a></li>
              <li><a href="#" title="개인정보처리방침">개인정보처리방침</a></li>
              <li><a href="#" title="이메일무단수집거부">이메일무단수집거부</a></li>
            </ul>
            <select>
              <option>FAMILY SITE</option>
              <option>신일스토어</option>
            </select>
          </div>
          <div className="footer__bottom">
            <address>
              <p>신일전자주식회사 대표 : 정윤석 사업자등록번호 : 134-81-25389</p>
              <p>충청남도 천안시 서북구 입장면 연곡길 308 / TEL : 1577-6667 FAX : 02-2069-0282</p>
              <span>COPYRIGHT (C) 2018 SHINIL ALL RIGHTS RESERVED</span>
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
