// const getColorFromImage = async (imagePath: string) => {
//     let mostProminentColor: string  = '';

//     const img = new Image();
//     img.crossOrigin = "Anonymous"; // Enable CORS
    
//     img.src = `${import.meta.env.VITE_IMAGE_URL}w200${imagePath}`;
    

//     img.onload = () => {        
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");

//         if (!ctx) {
//           throw new Error("Failed to obtain canvas context.");
//         }

//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);

//         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         const pixels = imageData.data;

//         const colorMap = new Map<string, number>();
//         for (let i = 0; i < pixels.length; i += 4) {
//           const color = `${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]}`;
//           const count = colorMap.has(color) ? colorMap.get(color)! + 1 : 1;
//           colorMap.set(color, count);
          
//         }

//         let maxCount = 0;
//         // let mostProminentColor: string | null = null;
//         colorMap.forEach((count, color) => {
//           // console.log('inside color map');
          
//           if (count > maxCount) {
            
//             maxCount = count;
//             mostProminentColor = color;
//             // console.log(mostProminentColor);
//           }
//         });

//         // return mostProminentColor

//         // console.log(mostProminentColor);
//         // if (mostProminentColor) {
//         //   // console.log('aaaaaaaa');
//         // } else {
//         //   throw new Error("Failed to determine the most prominent color.");
//         // }

//     };

    
//     img.onerror = (error) => {
//       throw new Error(`Failed to load image: ${error}`);
//     };
//     console.log(mostProminentColor, 'bbbbbb');
    
//     return mostProminentColor;
//   };

// export { getColorFromImage };


