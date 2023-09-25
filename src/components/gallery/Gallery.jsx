import GalleryCard from "./GalleryCard";
import "/src/styles/common.css";

const Gallery = () => {
  return (
    <>
      {/* <div className="w-full h-[80px] shadow-lg bg-gradient-to-r  mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-semibold text-center text-slate-200">
          Gallery
        </h1>
      </div> */}

      {/* {galleryData.map((gallerydata, i) => (
                  <div key={i}>
            <GalleryCard {...gallerydata} />
          </div>
        ))} */}
      <div className="flex  justify-center">
        <GalleryCard />
      </div>
    </>
  );
};

export default Gallery;
