const getColorFromImage = async (imagePath: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.src = `${import.meta.env.VITE_IMAGE_URL}/w1920_and_h800_multi_faces${imagePath}`;
    

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Failed to obtain canvas context.'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      const colorMap = new Map<string, number>();
      for (let i = 0; i < pixels.length; i += 4) {
        const color = `rgb(${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]})`;
        const count = colorMap.has(color) ? colorMap.get(color)! + 1 : 1;
        colorMap.set(color, count);
      }

      let maxCount = 0;
      let mostProminentColor: string | null = null;
      colorMap.forEach((count, color) => {
        if (count > maxCount) {
          maxCount = count;
          mostProminentColor = color;
        }
      });

      if (mostProminentColor) {
        resolve(mostProminentColor);
      } else {
        reject(new Error('Failed to determine the most prominent color.'));
      }
    };

    img.onerror = (error) => {
      reject(new Error(`Failed to load image: ${error}`));
    };
  });
};

export { getColorFromImage };
