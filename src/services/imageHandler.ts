import defaultImage from "../assets/images/default-image.jpg";

enum ImageSize {
    small = 'w600_and_h900_bestv2',
    large = 'w1920_and_h600_multi_faces',
    xlarge = 'w1920_and_h800_multi_faces'
}

export function Imagehandler(imageUrl: string, size?: keyof typeof ImageSize ) {
    if (!imageUrl) {
        return defaultImage;        
    } else {
        return `${import.meta.env.VITE_IMAGE_URL}${ size ? ImageSize[size] : ImageSize.small}${imageUrl}`;
    }

}