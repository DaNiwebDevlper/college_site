import { useParams } from "react-router-dom";
import galleryData from "./galleryData.json"


const GalleryDetailCard = () => {
 
  let param = useParams();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      {galleryData.map((gallerydetail, i) => {
        if (param.id === gallerydetail.id) {
          return (
            <>
              <div key={i} className=" w-[80%]">
                <div className="py-4">
                  <h1 className="font-bold text-rose-600 md:text-3xl py-5 text-2xl">
                    Event:{" "}
                    <span
                      className="font-semibold text-slate-800 md:text-2xl text-xl
                  "
                    >
                      {gallerydetail.event}
                    </span>
                  </h1>

                  <h1 className="font-bold text-rose-600 md:text-2xl text-xl">
                    Detail of Event:{" "}
                    <span className="font-normal text-slate-500 md:text-[18px] text-sm">
                      {gallerydetail.detail}
                    </span>
                  </h1>
                </div>

                <div className="image-gallery">
                  {/* Map over the fetched images and display them */}
                  {gallerydetail.imgSrc.map((image, index) => (
                    <div
                      key={index}
                      className="w-full border border-rose-600 my-5  overflow-auto p-2"
                    >
                      <img
                        src={image}
                        className=" md:h-[500px] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default GalleryDetailCard;
