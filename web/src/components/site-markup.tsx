"use client";

export function SiteMarkup() {
  return (
    <>

  <a className="skip" href="#content">본문으로 건너뛰기</a>
  <p className="sr-only">PA66 코팅·비코팅 원단은 태국과 한국, 스크랩은 한국으로 수출합니다. 석영과 자단은 구매 상담을 받으며, 자단의 수출 가능 여부는 관련 허가와 서류 확인 후 안내합니다.</p>

  <header className="site-header">
    <div className="wrap bar">
      <a className="brand" href="#top" aria-label="Neocle International">
        <img src="/assets/logo-neocle.png" alt="" width="808" height="210" />
        <span className="brand-sub" aria-hidden="true">International</span>
      </a>
      <nav className="desk" aria-label="주요">
        <a href="#about">회사 소개</a>
        <a href="#commodities">취급 품목</a>
        <a href="#services">주요 서비스</a>
        <a href="#process">거래 절차</a>
        <a href="#location">오시는 길</a>
        <a className="btn" href="#contact">거래 문의</a>
      </nav>
      <button className="burger" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="메뉴 열기">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <nav className="nav-panel" id="site-menu" aria-label="모바일">
    <a href="#about">회사 소개</a>
    <a href="#commodities">취급 품목</a>
    <a href="#services">주요 서비스</a>
    <a href="#process">거래 절차</a>
    <a href="#location">오시는 길</a>
    <a href="#contact">거래 문의</a>
  </nav>

  <main id="content">
    <section className="hero" id="top">
      <p className="side-index">Buyer Inquiries Welcome</p>
      <div className="wrap">
        <div className="hero-top">
          <div>
            <p className="eyebrow"><i></i> Supply &amp; Export</p>
            <h1>PA66 에어백 원단,<br />코팅·비코팅 제품을 공급합니다.</h1>
          </div>
          <a className="btn" href="#contact">거래 문의</a>
        </div>
        <div className="hero-copy">
          <p><b>태국과 한국으로 수출합니다.</b> 코팅·비코팅 PA66 에어백 원단을 흰색과 기타 색상으로 선별하여 톤백으로 포장한 뒤 수출합니다. 필요한 규격과 수량을 알려주시면 공급 가능 물량과 거래 조건을 안내해 드립니다.</p>
          <p><b>원자재 공급과 수출입 대행을 지원합니다.</b> 스크랩을 한국으로 수출하며, 석영과 자단의 구매 파트너를 찾고 있습니다. 자단은 관련 허가와 수출 요건이 확인된 물량에 한해 거래를 진행합니다. 인도로의 수입과 인도에서 한국으로의 수출 대행도 지원합니다.</p>
        </div>
        <div className="shipment">
          <figure>
            <img src="/assets/photos/pa66-bags.jpg" alt="컨테이너 안에 쌓인 PA66 톤백" width="461" height="976" />
            <figcaption>톤백 포장 및 선적</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-detail.jpg" alt="컨테이너에 실린 톤백을 가까이 본 모습" width="461" height="976" />
            <figcaption>색상별 선별 및 수출</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-container.jpg" alt="문을 연 컨테이너에 톤백이 실린 모습" width="459" height="560" />
            <figcaption>태국·한국 수출</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="pa66-prep" id="pa66">
      <div className="wrap">
        <p className="eyebrow"><i></i> Preparation</p>
        <h2 className="block-title">색상과 규격에 따라 선별하고,<br />포장하여 출고합니다.</h2>
        <p className="lead">창고에 입고된 PA66 에어백 원단을 색상과 규격에 따라 선별한 뒤, 톤백으로 포장하여 출고를 준비합니다.</p>
        <div className="pa66-gallery">
          <figure>
            <img src="/assets/photos/pa66-store.jpg" alt="창고 바닥에 모아 둔 흰색 PA66 원단 포대" width="759" height="1600" />
            <figcaption>창고 보관 원단</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-sort.jpg" alt="창고에서 PA66 원단을 분류하는 모습" width="1600" height="650" />
            <figcaption>색상·규격별 선별</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-rows.jpg" alt="분류해 담아 늘어 놓은 흰색 원단 포대" width="1600" height="650" />
            <figcaption>선별 후 포장된 원단</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-cut.jpg" alt="재단한 흰색 PA66 원단 더미" width="754" height="1600" />
            <figcaption>흰색 원단 재단 조각</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-pieces.jpg" alt="재단한 흰색 PA66 원단 조각" width="758" height="1600" />
            <figcaption>원단 재단 조각</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-color.jpg" alt="그 외 색으로 분리해 담은 원단 포대" width="1600" height="653" />
            <figcaption>기타 색상 원단</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-fill.jpg" alt="톤백 안에 담긴 흰색 PA66 원단" width="754" height="1600" />
            <figcaption>흰색 원단 상세 사진</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/pa66-ready.jpg" alt="출고를 기다리는 PA66 톤백" width="1600" height="650" />
            <figcaption>출고 대기 물량</figcaption>
          </figure>
          <figure className="focus-load">
            <img src="/assets/photos/pa66-load.jpg" alt="컨테이너에 실린 PA66 톤백" width="840" height="447" />
            <figcaption>컨테이너 적재</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <p className="kicker">Neocle International Private Limited</p>
          <h2>수출입의 시작부터,<br />지속적인 거래까지.</h2>
          <p className="lead">네오클 인터내셔널은 인도 타밀나두주 파파람바캄에 사무실과 창고를 운영하는 원자재 공급 및 수출입 대행 전문기업입니다.</p>
          <p className="lead">코팅·비코팅 PA66 에어백 원단을 선별·포장하여 태국과 한국으로 수출하고, 스크랩을 한국에 공급합니다. 석영과 자단은 구매를 희망하는 기업과 공급 조건을 협의합니다.</p>
          <p className="lead">인도로의 수입과 인도에서 해외로의 수출을 지원하며, 품목별 공급 가능 여부와 수출입 요건을 검토하여 거래 서류 준비부터 운송까지 필요한 업무를 지원합니다.</p>
        </div>
        <div className="values">
          <article className="value">
            <span className="mark" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="14" cy="14" r="9" /><circle cx="14" cy="14" r="2" /><path d="M14 5v3M14 20v3M5 14h3M20 14h3" /></svg>
            </span>
            <div>
              <h3>다양한 품목의 수출입을 지원합니다</h3>
              <p>일반 화물부터 별도의 확인이 필요한 품목까지, 공급 가능 여부와 수출입 요건을 검토합니다. 인도로의 수입과 인도산 원자재의 한국 수출을 지원합니다.</p>
            </div>
          </article>
          <article className="value">
            <span className="mark" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 5h9l4 4v14H8V5z" /><path d="M17 5v4h4M11 14h7M11 18h7" /></svg>
            </span>
            <div>
              <h3>거래 조건에 맞춰 서류를 준비합니다</h3>
              <p>상업송장, 포장명세서, 선하증권, 원산지증명서 등 거래에 필요한 서류의 준비와 확인을 지원합니다. 신용장 거래 조건과 수출입 신고 요건도 함께 검토합니다.</p>
            </div>
          </article>
          <article className="value">
            <span className="mark" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 18c4-8 8-8 12 0s6 6 6 0" /><circle cx="6" cy="18" r="1.4" fill="currentColor" /><circle cx="22" cy="14" r="1.4" fill="currentColor" /></svg>
            </span>
            <div>
              <h3>화물에 맞는 운송 방안을 제안합니다</h3>
              <p>인코텀즈, 납기, 화물의 특성을 고려하여 해상·항공·내륙 운송을 연계합니다. 일회성 선적부터 정기적인 수출입까지, 거래 규모와 일정에 맞춰 운송을 지원합니다.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="industries" id="commodities">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow"><i></i> Commodities</p>
          <h2 className="block-title">원자재 구매와 수출입 거래,<br />함께할 파트너를 찾습니다.</h2>
          <p className="lead">PA66 에어백 원단과 스크랩을 한국 및 해외 시장에 공급하고 있습니다. 석영과 자단은 구매를 희망하는 기업을 대상으로 공급 조건을 협의하고 있습니다. 원하시는 품목과 규격, 수량을 알려주시면 상담해 드리겠습니다.</p>
        </div>
        <div className="ind-grid">
          <article className="ind is-hot">
            <span className="num">01</span>
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M18 22h28v30H18z" /><path d="M18 30h28M24 22v-6h16v6" /><path d="M26 40h12" /></svg>
            </div>
            <p className="status">PA66 · 태국·한국 수출</p>
            <h3>PA66 에어백 원단</h3>
            <p>코팅·비코팅 PA66 에어백 원단을 흰색과 기타 색상으로 선별하여 태국과 한국으로 수출하고 있습니다. 필요한 규격과 월 예상 구매량을 알려주시면 공급 가능 물량과 거래 조건을 안내해 드립니다.</p>
          </article>
          <article className="ind">
            <span className="num">02</span>
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M14 46h30l6-8H20z" /><path d="M16 34h30l6-8H22z" /><path d="M18 22h30l6-8H24z" /></svg>
            </div>
            <p className="status">Scrap · 한국 수출</p>
            <h3>스크랩</h3>
            <p>한국으로 스크랩을 수출하고 있습니다. 구매를 희망하는 스크랩의 종류, 등급, 월 예상 구매량 및 도착항을 알려주시면 공급 조건을 협의해 드립니다.</p>
          </article>
          <article className="ind">
            <span className="num">03</span>
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M32 10l16 12v16L32 54 16 38V22z" /><path d="M32 10v44M16 22l16 8 16-8" /></svg>
            </div>
            <p className="status">Quartz · 구매 상담</p>
            <h3>석영</h3>
            <p>수출용 석영의 구매 기업을 찾습니다. 원석의 크기, 규격, 용도 및 필요 수량을 알려주시면 공급 가능 여부와 견적을 안내해 드립니다.</p>
          </article>
          <article className="ind">
            <span className="num">04</span>
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M18 46V18h8l6 8h14v20H18z" /><path d="M26 18v28M40 26v20" /></svg>
            </div>
            <p className="status">Red Sandalwood · 구매 상담</p>
            <h3>자단</h3>
            <p>자단(Red Sandalwood)의 구매 기업을 찾습니다. 희망 수량과 규격, 거래 조건(Incoterms)을 알려주시면 공급 가능 여부와 거래 조건을 안내해 드립니다. 수출은 관련 허가와 필수 서류가 갖추어진 물량에 한해 진행합니다.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="quartz" id="quartz">
      <div className="wrap">
        <p className="eyebrow"><i></i> Quartz</p>
        <h2 className="block-title">석영 원석,<br />구매 기업을 찾습니다.</h2>
        <p className="lead">덩어리 형태의 석영 원석을 공급합니다. 필요한 크기와 규격, 사용 용도 및 수량을 알려주시면 공급 가능 여부와 거래 조건을 안내해 드립니다.</p>
        <div className="quartz-grid">
          <figure>
            <img src="/assets/photos/quartz-pile.jpg" alt="마대 위에 쌓인 하얀 석영 덩어리" width="780" height="1040" />
            <figcaption>석영 원석</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/quartz-lumps.jpg" alt="큰 석영 덩어리 몇 점" width="780" height="1040" />
            <figcaption>대형 석영 원석</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/quartz-chips.jpg" alt="잘게 깨진 석영 조각" width="780" height="1040" />
            <figcaption>소형 석영 조각</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/quartz-rose.jpg" alt="붉은 석영 덩어리" width="576" height="934" />
            <figcaption>붉은 석영</figcaption>
          </figure>
          <figure>
            <img src="/assets/photos/quartz-green.jpg" alt="녹색 석영 덩어리" width="1024" height="576" />
            <figcaption>녹색 석영</figcaption>
          </figure>
        </div>
        <div className="quartz-doc">
          <figure>
            <img src="/assets/photos/quartz-sheet.jpg" alt="2024년 6월 석영 시료 시험성적서. 건식 기준 SiO2 99.90%" width="720" height="419" />
            <figcaption>2024년 6월 석영 시료 시험성적서</figcaption>
          </figure>
          <div>
            <p className="quartz-kicker">시료 분석 결과</p>
            <p className="quartz-note">아래는 2024년 6월에 분석한 석영 시료의 시험성적서입니다. 약 2kg의 시료를 대상으로 건조 상태 기준으로 분석한 주요 성분은 다음과 같습니다.</p>
            <table className="quartz-table">
              <tbody>
                <tr><th scope="row">이산화규소(SiO₂)</th><td>99.90%</td></tr>
                <tr><th scope="row">산화알루미늄(Al₂O₃)</th><td>0.021%</td></tr>
                <tr><th scope="row">산화철(Fe₂O₃)</th><td>0.013%</td></tr>
              </tbody>
            </table>
            <p className="quartz-note">시료는 2024년 6월 6일 접수되었으며, 분석은 6월 7일부터 10일까지 진행되었습니다.</p>
            <p className="quartz-note">본 결과는 해당 시료에 대한 분석값입니다. 실제 공급 물량의 품질 규격과 검사 조건은 거래 시 별도로 협의합니다.</p>
            <video className="quartz-video" controls playsInline preload="metadata" poster="/assets/photos/quartz-poster.jpg">
              <source src="/assets/photos/quartz.mp4" type="video/mp4" />
            </video>
            <p className="quartz-cap">현장 석영 원석 영상</p>
            <a className="btn" href="#contact">거래 문의</a>
          </div>
        </div>
      </div>
    </section>

    <section className="sandal" id="sandalwood">
      <div className="wrap sandal-grid">
        <figure className="sandal-photo">
          <img src="/assets/photos/red-sandalwood.jpg" alt="잘린 자단 원목의 붉은 단면" width="575" height="914" />
          <figcaption>자단 절단면</figcaption>
        </figure>
        <div>
          <p className="eyebrow"><i></i> Red Sandalwood</p>
          <h2 className="block-title">자단 구매 상담을<br />받습니다.</h2>
          <p className="lead">자단(Red Sandalwood)의 구매를 희망하는 기업을 찾고 있습니다. 필요한 수량과 규격, 희망 도착항 및 거래 조건을 알려주시면 공급 가능 여부와 예상 일정을 검토하여 안내해 드립니다.</p>
          <p className="sandal-note">거래 및 선적은 해당 물량의 출처, 관련 허가와 수출입 요건을 확인한 후 진행합니다.</p>
          <video className="sandal-video" controls playsInline preload="metadata" poster="/assets/photos/red-sandalwood.jpg">
            <source src="/assets/photos/red-sandalwood.mp4" type="video/mp4" />
          </video>
          <p className="sandal-cap">현장 영상</p>
          <a className="btn" href="#contact">거래 문의</a>
        </div>
      </div>
      <div className="wrap sandal-gallery">
        <figure>
          <img src="/assets/photos/sandal-logs.jpg" alt="벌채지 바닥에 쌓인 붉은 자단 원목" width="1120" height="963" />
          <figcaption>벌채한 원목</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-pile.jpg" alt="단면이 보이는 자단 각재 더미" width="960" height="1060" />
          <figcaption>표시된 각재</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-long.jpg" alt="길게 쌓인 자단 원목" width="870" height="820" />
          <figcaption>긴 원목</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-yard.jpg" alt="노란 덮개 아래 쌓인 자단" width="1280" height="960" />
          <figcaption>야적</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-stack.jpg" alt="파란 덮개 옆의 자단 원목" width="960" height="1280" />
          <figcaption>적재</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-rings.jpg" alt="자단 그루터기의 나이테" width="519" height="1152" />
          <figcaption>나이테</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-face.jpg" alt="짙은 붉은 자단 절단면" width="592" height="984" />
          <figcaption>절단면</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-heart.jpg" alt="자단 심재의 붉은 목리" width="960" height="1280" />
          <figcaption>심재</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-slab.jpg" alt="세워 둔 자단 판재" width="960" height="1100" />
          <figcaption>판재</figcaption>
        </figure>
        <figure>
          <img src="/assets/photos/sandal-block.jpg" alt="어두운 자단 각재" width="960" height="1280" />
          <figcaption>목리</figcaption>
        </figure>
      </div>
    </section>

    <section className="services" id="services">
      <div className="wrap sec-head">
        <div>
          <p className="eyebrow light"><i></i> Services</p>
          <h2>무역 서류부터 화물 인도까지,<br />수출입 업무를 지원합니다.</h2>
        </div>
        <div className="rail-tools">
          <span className="rail-count">01 / 05</span>
          <div className="arrows">
            <button type="button" data-scroll="prev" aria-label="이전 서비스">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M11 4L6 9l5 5" /></svg>
            </button>
            <button type="button" data-scroll="next" aria-label="다음 서비스">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M7 4l5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="rail" tabIndex={0} aria-label="서비스 목록">
        <article className="slide">
          <img src="/assets/photos/ship.jpg" alt="항만 크레인 옆에 정박한 컨테이너선" width="1800" height="1200" />
          <div className="slide-cap">
            <span>/ 01</span>
            <h3>수출 대행</h3>
            <p>인도에서 한국 및 해외로의 수출을 지원합니다. 품목과 거래 조건에 따라 서류 준비, 출고 및 선적 업무를 진행합니다.</p>
          </div>
        </article>
        <article className="slide">
          <img src="/assets/photos/warehouse.jpg" alt="박스와 팔레트가 채워진 물류 창고" width="2000" height="1333" />
          <div className="slide-cap">
            <span>/ 02</span>
            <h3>수입 대행</h3>
            <p>인도로 반입되는 물품의 수입 업무를 지원합니다. 공급처 확인부터 수입 요건 검토, 통관 및 내륙 운송까지 계약 범위에 따라 진행합니다.</p>
          </div>
        </article>
        <article className="slide">
          <img src="/assets/photos/freight.jpg" alt="부품 박스가 정리된 창고 통로" width="1800" height="1200" />
          <div className="slide-cap">
            <span>/ 03</span>
            <h3>무역 서류 및 거래 조건 검토</h3>
            <p>상업송장, 포장명세서, 운송서류, 원산지증명서 등 필요한 서류를 확인하고, 신용장 및 거래 조건을 검토합니다.</p>
          </div>
        </article>
        <article className="slide">
          <img src="/assets/photos/truck.jpg" alt="도로를 달리는 대형 화물차" width="1800" height="1193" />
          <div className="slide-cap">
            <span>/ 04</span>
            <h3>운송 조율</h3>
            <p>화물의 특성과 납기에 맞춰 해상·항공·내륙 운송 또는 복합운송을 선정하고, 운송 예약과 일정을 조율합니다.</p>
          </div>
        </article>
        <article className="slide">
          <img src="/assets/photos/aisle.jpg" alt="높은 선반이 늘어선 창고 통로" width="1800" height="2400" />
          <div className="slide-cap">
            <span>/ 05</span>
            <h3>선적 관리</h3>
            <p>출고 전 화물 상태, 선적 일정 및 도착 예정일을 확인하고, 진행 상황을 공유합니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="documents" id="documents">
      <div className="wrap">
        <p className="eyebrow"><i></i> Documents &amp; Terms</p>
        <h2 className="block-title">거래 조건에 맞는<br />서류를 준비합니다.</h2>
        <p className="lead">필요한 서류는 품목, 목적지 및 거래 조건에 따라 달라집니다. 거래별로 필요한 서류와 요건을 확인하고, 선적과 통관에 필요한 준비를 지원합니다.</p>
        <div className="docs">
          <article className="doc"><small>Commercial Invoice</small><strong>상업송장</strong></article>
          <article className="doc"><small>Packing List</small><strong>포장명세서</strong></article>
          <article className="doc"><small>B/L · AWB</small><strong>선하증권 · 항공운송장</strong></article>
          <article className="doc"><small>Certificate of Origin</small><strong>원산지증명서</strong></article>
          <article className="doc"><small>Letter of Credit</small><strong>신용장</strong></article>
          <article className="doc"><small>Customs Declaration</small><strong>수출입 신고서</strong></article>
          <article className="doc"><small>Cargo Insurance</small><strong>적하보험 가입 및 증빙</strong></article>
          <article className="doc"><small>Incoterms</small><strong>거래 조건</strong></article>
        </div>
      </div>
    </section>

    <section className="movement" id="movement">
      <div className="wrap">
        <p className="eyebrow"><i></i> Transport & Logistics</p>
        <h2 className="block-title">해상·항공·내륙 운송,<br />화물과 일정에 맞춰 연결합니다.</h2>
        <p className="lead">화물의 특성, 목적지와 납기를 고려하여 운송 방안을 제안합니다. 계약에서 정한 업무 범위와 거래 조건에 따라 출고, 선적 및 목적지 운송을 지원합니다.</p>
        <div className="mosaic">
          <figure className="tile m1">
            <img src="/assets/photos/warehouse.jpg" alt="팔레트 랙이 있는 물류 창고 내부" width="2000" height="1333" loading="lazy" />
            <figcaption>창고 · 출고</figcaption>
          </figure>
          <figure className="tile m2">
            <img src="/assets/photos/ship.jpg" alt="항만 크레인 옆에 정박한 컨테이너선" width="1800" height="1200" loading="lazy" />
            <figcaption>항만</figcaption>
          </figure>
          <figure className="tile m3 focus-low">
            <img src="/assets/photos/vessel.jpg" alt="포장된 상자를 건네는 손" width="1800" height="2250" loading="lazy" />
            <figcaption>화물 인도</figcaption>
          </figure>
          <figure className="tile m4">
            <img src="/assets/photos/yard.jpg" alt="해 질 녘 도로 위의 트레일러" width="1800" height="1200" loading="lazy" />
            <figcaption>내륙 운송</figcaption>
          </figure>
          <figure className="tile m5">
            <img src="/assets/photos/truck.jpg" alt="고속도로의 화물 트럭" width="1800" height="1193" loading="lazy" />
            <figcaption>육상 운송</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="process" id="process">
      <div className="wrap">
        <div className="process-head">
          <p className="eyebrow"><i></i> Process</p>
          <h2 className="block-title">첫 문의부터 화물 인도까지,<br />다섯 단계로 진행합니다.</h2>
        </div>
        <div className="steps">
          <article className="step">
            <span className="num">01</span>
            <h3>문의 및 상담</h3>
            <p>품목과 규격, 수량, 출발지와 도착지, 희망 납기 및 거래 조건을 확인합니다.</p>
          </article>
          <article className="step">
            <span className="num">02</span>
            <h3>거래 조건 및 운송 협의</h3>
            <p>화물의 특성과 일정에 맞는 운송 방안을 제안하고, 견적과 거래 조건을 협의합니다.</p>
          </article>
          <article className="step">
            <span className="num">03</span>
            <h3>계약 및 서류 준비</h3>
            <p>협의된 조건에 따라 계약을 체결하고, 선적과 통관에 필요한 서류를 준비·검토합니다.</p>
          </article>
          <article className="step">
            <span className="num">04</span>
            <h3>출고 및 운송·통관</h3>
            <p>일정에 맞춰 화물을 출고하고, 계약 범위에 따라 운송과 통관 절차를 지원합니다.</p>
          </article>
          <article className="step">
            <span className="num">05</span>
            <h3>화물 인도 및 정산</h3>
            <p>약정된 장소와 조건에 따라 화물을 인도하고, 계약에 정한 일정에 맞춰 서류 전달과 비용 정산을 진행합니다.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="coverage" id="coverage">
      <div className="wrap coverage-grid">
        <div>
          <p className="eyebrow light"><i></i> Coverage</p>
          <h2>인도에서,<br />태국과 한국으로.</h2>
          <p className="lead">인도 타밀나두주의 사무실과 창고를 거점으로 PA66 에어백 원단을 태국과 한국에, 스크랩을 한국에 수출합니다.</p>
          <ul className="modes">
            <li>해상 FCL · LCL</li>
            <li>항공</li>
            <li>내륙 연결</li>
            <li>복합 운송</li>
          </ul>
        </div>
        <div>
          <svg className="route-map" viewBox="0 0 720 500" role="img" aria-label="인도에서 태국과 한국으로 이어지는 노선. 흰색 점은 인도의 창고·사무실 위치를, 태국과 한국은 주요 수출 목적지를 나타냅니다.">
            <g fill="none" stroke="rgba(243,240,232,0.45)" strokeWidth="1.25" strokeLinecap="round">
              <path d="M210 292C290 210 350 188 430 206" />
              <path d="M210 292C340 180 470 110 590 132" />
            </g>
            <g fill="#3dbe90" stroke="#3dbe90">
              <g><circle cx="210" cy="292" r="12" fill="none" stroke="#f3f0e8" strokeOpacity="0.9" /><circle cx="210" cy="292" r="4.5" fill="#f3f0e8" stroke="none" /><text x="210" y="326" textAnchor="middle" stroke="none">인도</text></g>
              <g><circle cx="430" cy="206" r="10" fill="none" strokeOpacity="0.45" /><circle cx="430" cy="206" r="3.5" stroke="none" /><text x="430" y="188" textAnchor="middle" stroke="none">태국</text></g>
              <g><circle cx="590" cy="132" r="10" fill="none" strokeOpacity="0.45" /><circle cx="590" cy="132" r="3.5" stroke="none" /><text x="590" y="114" textAnchor="middle" stroke="none">한국</text></g>
            </g>
          </svg>
          <p className="map-note">흰색 점은 인도의 창고·사무실 위치를, 태국과 한국은 주요 수출 목적지를 나타냅니다.</p>
        </div>
      </div>
    </section>

    <section className="location" id="location">
      <div className="wrap location-grid">
        <div>
          <p className="eyebrow"><i></i> Warehouse · Office</p>
          <h2 className="block-title">창고와 사무실을<br />한곳에서 운영합니다.</h2>
          <p className="lead">인도 타밀나두주 첸나이 인근 파파람바캄에 사무실과 약 836㎡ 규모의 창고를 운영하고 있습니다. 방문하시면 현장에서 화물을 확인하고 거래 상담을 진행하실 수 있습니다.</p>
          <address className="address">
            <strong>Neocle International Private Limited</strong>
            Papparambakkam, Thiruvallur<br />
            Tamil Nadu 602123, India<br />
            창고 면적: 약 836㎡
          </address>
          <a className="btn" href="https://maps.app.goo.gl/tjriYJEqkzERZ63j8" target="_blank" rel="noopener noreferrer">지도에서 위치 확인</a>
        </div>
        <div className="map-frame">
          <iframe title="Neocle International 창고와 사무실 위치" src="https://maps.google.com/maps?q=13.0498988,79.9621672&z=15&hl=ko&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>

    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow"><i></i> Inquiry</p>
          <h2 className="block-title">필요한 품목과<br />수량을 알려주세요.</h2>
          <p className="lead">구매를 희망하는 품목의 규격과 수량, 도착지 및 희망 납기를 남겨주시면 공급 가능 여부와 거래 조건을 안내해 드리겠습니다.</p>
          <p className="lead">PA66 에어백 원단은 코팅 여부와 색상 구분(흰색·기타 색상)을 함께 기재해 주세요. 스크랩, 석영, 자단 및 기타 수출입 대행 문의도 아래 양식을 이용해 주시기 바랍니다.</p>
        </div>
        <div>
          {/* data-email 에 수신 주소를 넣으면 제출 시 메일 앱이 열립니다. */}
          <form id="inquiry" data-email="" noValidate>
            <div className="fields">
              <label>회사명 <i>*</i>
                <input name="company" required autoComplete="organization" />
              </label>
              <label>담당자명 <i>*</i>
                <input name="name" required autoComplete="name" />
              </label>
              <label>이메일 <i>*</i>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>연락처
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="full">문의 유형 <i>*</i>
                <select name="kind" required>
                  <option value="">문의 유형을 선택해 주세요.</option>
                  <option>코팅 PA66 에어백 원단 구매 문의</option>
                  <option>비코팅 PA66 에어백 원단 구매 문의</option>
                  <option>스크랩 구매 문의 · 한국 수출</option>
                  <option>석영 매입</option>
                  <option>자단(레드 샌달우드) 매입</option>
                  <option>인도 수입 대행</option>
                  <option>인도 → 한국 수출 대행</option>
                  <option>기타 수출 대행</option>
                  <option>기타 수입 대행</option>
                </select>
              </label>
              <label>문의 품목
                <input name="goods" placeholder="예: PA66 코팅 원단, PA66 비코팅 원단, 스크랩, 석영" />
              </label>
              <label>희망 거래 조건(Incoterms)
                <input name="incoterm" placeholder="예: FOB, CIF, DDP / 미정인 경우 협의" />
              </label>
              <label>출발지
                <input name="origin" placeholder="국가 및 도시 또는 항구명" />
              </label>
              <label>도착지
                <input name="destination" placeholder="국가 및 도시 또는 항구명" />
              </label>
              <label className="full">상세 문의 내용
                <textarea name="message" placeholder="제품 규격, 희망 수량, 납기 및 기타 요청 사항을 입력해 주세요."></textarea>
              </label>
            </div>
            <div className="form-actions">
              <button className="btn" type="submit">문의 내용 작성하기</button>
              <p className="form-note">입력하신 내용으로 문의서가 작성됩니다. 작성된 문의서는 자동 전송되지 않으므로, 복사한 후 담당자에게 전달해 주세요.</p>
            </div>
          </form>
          <div className="form-success" role="status">
            <h3>문의서가 작성되었습니다.</h3>
            <p>아래 내용을 복사하여 담당자 이메일 또는 WhatsApp으로 보내 주세요.</p>
            <pre id="inquiry-preview"></pre>
            <div className="form-actions">
              <button className="btn" type="button" id="copy-inquiry">내용 복사</button>
              <button className="linkish" type="button" id="edit-inquiry">다시 수정</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-grid">
        <div className="foot-brand">
          <a className="brand" href="#top" aria-label="Neocle International">
            <img src="/assets/logo-neocle.png" alt="" width="808" height="210" />
            <span className="brand-sub" aria-hidden="true">International</span>
          </a>
          <p>PA66 코팅·비코팅 원단을 태국과 한국에, 스크랩을 한국에 수출합니다. 석영과 자단의 구매 상담 및 수출입 대행도 지원합니다. 자단의 공급·수출 가능 여부는 관련 허가와 서류 확인 후 안내합니다.</p>
        </div>
        <div>
          <h3>바로가기</h3>
          <ul>
            <li><a href="#about">회사 소개</a></li>
            <li><a href="#commodities">취급 품목</a></li>
            <li><a href="#services">주요 서비스</a></li>
            <li><a href="#process">거래 절차</a></li>
            <li><a href="#location">오시는 길</a></li>
            <li><a href="#contact">거래 문의</a></li>
          </ul>
        </div>
        <div>
          <h3>주요 서비스</h3>
          <ul>
            <li><a href="#documents">무역 서류 및 거래 조건</a></li>
            <li><a href="#movement">운송</a></li>
            <li><a href="#coverage">주요 교역 국가</a></li>
            <li><a href="#contact">거래 문의</a></li>
          </ul>
        </div>
        <div>
          <h3>창고 · 사무실</h3>
          <ul>
            <li>Papparambakkam</li>
            <li>Thiruvallur, Tamil Nadu</li>
            <li>602123, India</li>
            <li>창고 면적: 약 836㎡</li>
            <li><a href="https://maps.app.goo.gl/tjriYJEqkzERZ63j8" target="_blank" rel="noopener noreferrer">지도에서 위치 확인</a></li>
          </ul>
        </div>
        <div className="family">
          <h3>Family Sites</h3>
          <ul>
            <li><a href="https://www.mvsystem.in" target="_blank" rel="noopener noreferrer">업무 통합 시스템 MVS</a></li>
            <li><a href="https://www.heresnow.in" target="_blank" rel="noopener noreferrer">GPS 기반 출퇴근 기록 시스템 HeresNow</a></li>
            <li><a href="https://www.neocle.in" target="_blank" rel="noopener noreferrer">수출입 전문기업 Neocle</a></li>
            <li><a href="https://www.msventures.in" target="_blank" rel="noopener noreferrer">비즈니스 컨설팅 MSV</a></li>
          </ul>
        </div>
      </div>
      <div className="giant-lockup" aria-hidden="true">
        <p className="giant">neocle</p>
        <p className="giant-sub">International</p>
      </div>
      <div className="legal">
        <span>© <span id="year">2026</span> Neocle International Private Limited</span>
        <span>Developed by <a href="https://www.msventures.in" target="_blank" rel="noopener noreferrer">Minsub Ventures</a></span>
      </div>
    </div>
  </footer>
      <dialog className="lightbox" aria-label="사진 보기">
        <button className="lightbox-close" type="button" data-lightbox="close" aria-label="닫기">×</button>
        <button className="lightbox-nav lightbox-prev" type="button" data-lightbox="prev" aria-label="이전 사진">‹</button>
        <figure>
          <img alt="" />
          <figcaption></figcaption>
        </figure>
        <button className="lightbox-nav lightbox-next" type="button" data-lightbox="next" aria-label="다음 사진">›</button>
      </dialog>

    </>
  );
}
