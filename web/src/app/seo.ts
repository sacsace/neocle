const siteUrl = "https://www.neocle.in";

export const siteTitle = "Neocle International | PA66 에어백 원단·스크랩 수출";

export const siteDescription =
  "인도 네오클 인터내셔널은 코팅·비코팅 PA66 에어백 원단을 태국과 한국으로, 스크랩을 한국으로 수출합니다. 석영·자단 구매 상담과 인도 수출입 대행을 지원합니다.";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Neocle International Private Limited",
      alternateName: ["Neocle International", "네오클 인터내셔널"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/logo-neocle.png`,
        width: 808,
        height: 210,
      },
      image: `${siteUrl}/assets/photos/pa66-ready.jpg`,
      email: "lee@msventures.in",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Thailand" },
        { "@type": "Country", name: "South Korea" },
      ],
      knowsAbout: [
        "PA66 에어백 원단",
        "코팅 PA66",
        "비코팅 PA66",
        "스크랩 수출",
        "석영 원석",
        "자단",
        "인도 수입 대행",
        "인도 수출 대행",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "lee@msventures.in",
        availableLanguage: ["Korean", "English"],
        areaServed: ["IN", "TH", "KR"],
      },
      location: [
        { "@id": `${siteUrl}/#warehouse` },
        { "@id": `${siteUrl}/#office` },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Neocle International",
      inLanguage: "ko",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "ko",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/photos/pa66-ready.jpg`,
        width: 1600,
        height: 650,
      },
    },
    {
      "@type": "Warehouse",
      "@id": `${siteUrl}/#warehouse`,
      name: "Neocle International 창고",
      url: `${siteUrl}/#location`,
      image: `${siteUrl}/assets/photos/pa66-store.jpg`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Papparambakkam",
        addressRegion: "Tamil Nadu",
        postalCode: "602123",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0498988,
        longitude: 79.9621672,
      },
      hasMap: "https://maps.app.goo.gl/tjriYJEqkzERZ63j8",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 836,
        unitCode: "MTK",
      },
    },
    {
      "@type": "Place",
      "@id": `${siteUrl}/#office`,
      name: "Neocle International 인도 사무실",
      url: `${siteUrl}/#location`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "24/1, Ferns City Road, Doddanekundi",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560037",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9786052,
        longitude: 77.6973322,
      },
      hasMap: "https://maps.app.goo.gl/4c8GXSTGkSCFAuq86",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#catalog`,
      name: "취급 품목 및 서비스",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "코팅 PA66 에어백 원단",
            description: "흰색과 기타 색상으로 선별하여 톤백으로 포장한 뒤 태국과 한국으로 수출합니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "비코팅 PA66 에어백 원단",
            description: "흰색과 기타 색상으로 선별하여 톤백으로 포장한 뒤 태국과 한국으로 수출합니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "스크랩",
            description: "한국으로 수출합니다. 종류와 등급은 문의 시 확인합니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "석영 원석",
            description: "덩어리 형태의 석영 원석 구매 기업을 찾습니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "자단",
            description: "구매 기업을 찾습니다. 수출은 관련 허가와 필수 서류가 확인된 물량에 한합니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "인도 수입 대행",
            description: "인도로 반입되는 물품의 수입 업무를 지원합니다.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "인도에서 한국으로의 수출 대행",
            description: "인도에서 한국 및 해외로의 수출 서류, 출고, 선적을 지원합니다.",
          },
        },
      ],
    },
  ],
};
