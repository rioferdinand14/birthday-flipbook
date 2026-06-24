import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "../App.css";
// Step back once from components, then into images

// 1. Create a Page component using forwardRef (Required by react-pageflip)
const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">{props.children}</div>
      <div className="page-number">{props.number}</div>
    </div>
  );
});

const CornerSparkle = ({ position }) => (
  <svg
    className={`corner-sparkle ${position}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C12 0 12 8.5 18 12C12 15.5 12 24 12 24C12 24 12 15.5 6 12C12 8.5 12 0 12 0Z"
      fill="#eab308"
    />
    <circle cx="12" cy="12" r="3" fill="#fef08a" />
  </svg>
);

// --- NEW ASSET: Elegant Vector Wreath/Frame ---
const DecorativeFrame = ({ children }) => (
  <div className="decorative-frame">
    
      {/* Outer Gold Border */}
      <rect
        x="20"
        y="20"
        width="360"
        height="560"
        rx="15"
        fill="none"
        stroke="#ca8a04"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Inner Pink Dashed Border */}
      <rect
        x="30"
        y="30"
        width="340"
        height="540"
        rx="10"
        fill="none"
        stroke="#f472b6"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.8"
      />
    <div className="frame-content">{children}</div>
  </div>
);

function App() {
    const [page, setPage] = useState(0);
  return (
    <div className="app-container">
      <div className={`flipbook-wrapper ${page === 0 ? "is-cover" : ""}`}>
        <HTMLFlipBook
          width={660}
          height={960}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          // Add this onFlip event!
          onFlip={(e) => setPage(e.data)}
        >
          {/* Cover Page */}
          <Page number={1}>
            <div className="cover">
              <CornerSparkle position="top-left" />
              <CornerSparkle position="top-right" />
              <CornerSparkle position="bottom-left" />
              <CornerSparkle position="bottom-right" />

              <DecorativeFrame>
                <h2>23 Years of Amelia</h2>
                <p>A collection of my favorite memories of you.</p>
                <div className="cover-date">June 25 2026</div>
              </DecorativeFrame>
            </div>
          </Page>

          {/* Page 2: A sweet message */}
          <Page number={2}>
            <div className="text-page">
              <h3 style={{ marginBottom: "32px" }}>
                Happiest Birthday to You, Sayang
              </h3>
              <p>
                Selamat bertambah umur ya, orang yang selalu sabar sama aku,
                selalu sayang sama aku. Makasih ya karena ga pernah menyerah
                buat selalu bersama aku.
              </p>
              <p>
                Semoga di umur kamu yang sekarang semua yang kamu doakan bisa
                terwujud, semua yang kamu harapkan akan berubah jadi sesuatu
                yang kamu banggakan. Aku yakin kamu selalu kuat untuk mengejar
                yang kamu inginkan.
              </p>
              <p>
                Ga banyak yang mau aku tulis, pokoknya aku akan selalu ada buat
                kamu, mendukung semua yang kamu kejar dan mencapai tujuan kita
                sama-sama
              </p>
              <p>
                Sampai ketemu siang nanti ya, Aku udah siapin sesuatu buat kamu
                🫶🏻
              </p>
            </div>
          </Page>

          {/* Page 3: First Memory/Photo */}
          <Page number={3}>
            <div className="image-page">
              <img
                src={import.meta.env.BASE_URL + "images/pic1.jpeg"}
                alt="Memory 1"
              />
              <img
                src={import.meta.env.BASE_URL + "images/pic2.jpg"}
                alt="Memory 2"
              />
              <p>Such a Hottie. Never fails</p>
            </div>
          </Page>

          {/* Back Cover */}
          <Page number={4}>
            <div className="cover">
              <h2>I love you!</h2>
              <p>Happy Birthday ❤️</p>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
