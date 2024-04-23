import defaultImage from "../assets/images/default-image.jpg";

export function Imagehandler(imageUrl: string) {
    if (!imageUrl) {
        return defaultImage
        
    } else {
        return import.meta.env.VITE_IMAGE_URL + imageUrl;
    }
}