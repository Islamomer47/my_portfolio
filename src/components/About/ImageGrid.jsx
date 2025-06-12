import Image1 from "../../assets/TabManger.png";
import Image2 from "../../assets/EcoSystem.png";
import Image3 from "../../assets/LittleItaly.png";
import Image4 from "../../assets/tickets.png";

const images = [
  { src: Image1, title: "Tab Manager" },
  { src: Image2, title: "Eco System" },
  { src: Image3, title: "Little Italy" },
  { src: Image4, title: "Tickets" },
];

const ImageGrid = () => (
  <div className="max-w-5xl mx-auto px-6 -mt-12">
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
        >
          <div className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold">{image.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGrid;
