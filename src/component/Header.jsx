import React from "react";

const header = () => {
  return (
    <header id="header">
      <div className="header__top">
        <div className="container">
          <div className="top__left">
            <div className="country__list">
              <ul>
                <li className="country__first">
                  <a href="#" className="country__KOR" title="KOR">
                    KOR
                  </a>

                  <ul>
                    <li className="country__second">
                      <a href="#" className="country__ENG" title="ENG">
                        ENG
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="list__site">
              <ul>
                <li>
                  <a href="#" className="youtube" title="유튜브">
                    <span className="ir">Youtube</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="instargram" title="인스타그램">
                    <span className="ir">Instargram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook" title="페이스북">
                    <span className="ir">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="blog" title="네이버 블로그">
                    <span className="ir">Naver Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="top__right">
            <div className="site__route">
              <ul>
                <li>
                  <a href="#" className="home" title="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="contact" title="Contact Us">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="sitemap" title="Site Map">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="site__search">
              <form name="">
                <fieldset>
                  <legend className="ir">제품검색 영역 입니다.</legend>

                  <input
                    type="search"
                    className="search"
                    placeholder="제품명을 검색해주세요."
                    title="제품명 검색"
                  />
                  <input
                    type="button"
                    className="searchBtn"
                    title="제품 검색 버튼"
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="header__logo">
            <h1>
              <a href="#" className="logo" title="신일전자 로고">
                <span className="ir">신일전자 로고</span>
              </a>
            </h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#" title="회사소개">
                  회사소개
                </a>

                <ul className="submenu">
                  <li>
                    <a href="#" title="회사개요">
                      회사개요
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CEO 인사말">
                      CEO 인사말
                    </a>
                  </li>
                  <li>
                    <a href="#" title="회사연혁">
                      회사연혁
                    </a>
                  </li>
                  <li>
                    <a href="#" title="경영이념">
                      경영이념
                    </a>
                  </li>
                  <li>
                    <a href="#" title="CI 소개">
                      CI 소개
                    </a>
                  </li>
                  <li>
                    <a href="#" title="찾아오시는 길">
                      찾아오시는 길
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title="제품소개">
                  제품소개
                </a>

                <ul className="submenu">
                  <li>
                    <a href="#" title="신제품">
                      신제품
                    </a>
                  </li>
                  <li>
                    <a href="#" title="선풍기">
                      선풍기
                    </a>
                  </li>
                  <li>
                    <a href="#" title="여름가전">
                      여름가전
                    </a>
                  </li>
                  <li>
                    <a href="#" title="겨울가전">
                      겨울가전
                    </a>
                  </li>
                  <li>
                    <a href="#" title="주방가전">
                      주방가전
                    </a>
                  </li>
                  <li>
                    <a href="#" title="생활가전">
                      생활가전
                    </a>
                  </li>
                  <li>
                    <a href="#" title="환경가전">
                      환경가전
                    </a>
                  </li>
                  <li>
                    <a href="#" title="펫가전">
                      펫가전
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title="홍보센터">
                  홍보센터
                </a>

                <ul className="submenu">
                  <li>
                    <a href="#" title="공지사항">
                      공지사항
                    </a>
                  </li>
                  <li>
                    <a href="#" title="언론보도">
                      언론보도
                    </a>
                  </li>
                  <li>
                    <a href="#" title="카탈로그">
                      카탈로그
                    </a>
                  </li>
                  <li>
                    <a href="#" title="홍보활동">
                      홍보활동
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title="고객지원">
                  고객지원
                </a>

                <ul className="submenu">
                  <li>
                    <a href="#" title="자주 묻는 질문">
                      자주 묻는 질문
                    </a>
                  </li>
                  <li>
                    <a href="#" title="서비스센터/대리점">
                      서비스센터/대리점
                    </a>
                  </li>
                  <li>
                    <a href="#" title="제품설명서">
                      제품설명서
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="header__mall">
            <ul>
              <li>
                <a href="#" className="mall" title="신일 MALL">
                  신일 MALL
                </a>
              </li>
              <li>
                <a href="#" className="submenu" title="SUBMENU">
                  <span className="ir">SUBMENU</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
