import React, { useState } from "react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/cody-fitzgerald-lWJeGCgVbYI-unsplash.jpg"
  );

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <h1 className="flex justify-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Product Gallery
      </h1>

      <div className="grid max-w-2xl h-auto">
        <div className="grid p-5 w-96 h-96">
          <div>
            {selectedImage && (
              <img
                className=" max-w-full rounded-lg"
                src={selectedImage}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div>
            <img
              onClick={() =>
                handleImageClick("/cody-fitzgerald-lWJeGCgVbYI-unsplash.jpg")
              }
              className="h-auto max-w-full rounded-lg p-1"
              src="/cody-fitzgerald-lWJeGCgVbYI-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() =>
                handleImageClick("/colour-flowers-white-pot-isolated-white.jpg")
              }
              className="h-auto max-w-full rounded-lg p-1"
              src="/colour-flowers-white-pot-isolated-white.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() =>
                handleImageClick("/jeff-lowery-9wF7Bm8s5jQ-unsplash.jpg")
              }
              className="h-auto max-w-full rounded-lg p-1"
              src="/jeff-lowery-9wF7Bm8s5jQ-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() =>
                handleImageClick("/jeff-lowery-9wF7Bm8s5jQ-unsplash.jpg")
              }
              className="h-auto max-w-full rounded-lg p-1"
              src="/jeff-lowery-9wF7Bm8s5jQ-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              onClick={() =>
                handleImageClick(
                  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                )
              }
              className="h-auto max-w-full rounded-lg p-1"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
