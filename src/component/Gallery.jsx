import '../App.css';

const images = import.meta.glob('../assets/*.{png,jpg}', {eager: true});

const imageList = Object.values(images).map((img) => img.default);

export default function Gallery() {

    return (
        <div className="slides-track">
            {imageList.map((src, i) => (
                <img key={i} src={src} alt={`image-${i}`} />
            ))}
        </div>
    )
}