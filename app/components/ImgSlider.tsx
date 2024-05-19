// // components/ImageSlider.tsx

// import React from 'react';
// import Image from 'next/image';
// import img1 from './../assets/Rohani-Amil.png';
// const images = [img1, img1, img1];

// const ImageSlider: React.FC = () => {
//   return (
//     <div id="default-carousel" className="relative w-full overflow-hidden">
//       <div className="relative h-56 md:h-96">
//         <div className="flex w-full h-full animate-slide">
//           {images.map((imgSrc, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <Image
//                 src={imgSrc}
//                 alt={`Image ${index + 1}`}
              
//                 className="block object-center"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
