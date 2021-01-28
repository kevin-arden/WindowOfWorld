import React from "react";
import Sidebar from "../Components/Sidebar";
import Frame from "../Image/Frame1.png";
import Card from "../Components/Card"
const HomePage = () => {
  const buku = [
    {
      id: 1,
      title: "Serangkai",
      penulis: "Valerie Patkar",
      image:
        "https://ecs7.tokopedia.net/img/cache/500-square/VqbcmM/2021/1/19/911af906-f517-4aa2-bd31-9f85c5e4cc40.jpg",
      show: true,
    },
    {
      id: 2,
      title: "Buku Siswa Tematik",
      penulis: "Afi Yustiyana",
      image: "https://cf.shopee.co.id/file/04833e00a6690b2217a1f2e50ec8c7ab",
      show: true,
    },
    {
      id: 3,
      title: "Kabar Rahasia Dari Alam Kubur",
      penulis: "Dr. Kamil Yusuf Al-Atum",
      image:
        "https://tokoalvabet.com/382-large_default/kabar-rahasia-dari-dalam-alam-kubur.jpg",
      show: true,
    },
    {
      id: 4,
      title: "Tess on the Road",
      penulis: "Rachel Hartman",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503599285i/35046472._UY1826_SS1826_.jpg",
      show: true,
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <img src={Frame} alt="" />
          <h2>List buku</h2>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              {buku
                .filter((buku) => buku.show)
                .map((buku, index) => (
                  <Card buku={buku} key={buku.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
