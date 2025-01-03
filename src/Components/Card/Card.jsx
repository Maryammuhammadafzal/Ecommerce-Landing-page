import React, { useState, useEffect } from 'react';
// import Card_Images from '../Card_Images/Card_Images.jsx';


function Card() {

let [content , setContent] = useState([])
let [images , setImages] = useState([])
let [data , setData] = useState([])

useEffect(()=>{

const fetchContent = async() => {
      const contentResponse = await fetch("https://dummyapi.online/api/products");
      if(!contentResponse.ok) throw new Error(contentResponse.statusText , "Error Fetching Data");
      return contentResponse.json();
}

const fetchImages = async () => {
      const imagesResponse = await fetch('https://api.pexels.com/v1/search?query=apple%20products&per_page=24', {
        headers: {
          Authorization: 'FO9MG456MoMLLzxqngrDohugwHVPtCwUuOr8lI1UNWxR1jVufZi9UTF9',
        },
      });
      if(!imagesResponse.ok) throw new Error(imagesResponse.statusText , "Error Fetching Data");
      return imagesResponse.json();
    }

const fetchData = async () => {
  try{
    const [contentData , imageData] = await Promise.all([fetchContent() , fetchImages()])
    setContent(contentData)
    setImages(imageData.photos)
    console.log(contentData);
    console.log(imageData);

    const combineData = contentData.map((items , index) => (
      {...items , image: imageData.photos[index]?.src?.medium || "" , alt: imageData.photos[index]?.alt || "" , image_id: imageData.photos[index]?.id || ""})
    )
    setData(combineData);
  }
  catch(error) {
    console.log("Error Fetching Data");
  }
}
fetchData()
} , [])

return(
<> 
{data.map((product) => (
  <div key={product.id} category={product.productCategory} className="card w-[32%] h-1/2 space-y-2 bg-white rounded-lg shadow-md gap-3 justify-items-center flex flex-col p-3">
    
  <div key={product.image_id}  className="card-image w-full h-fit bg-center rounded-t-lg">
 <img src={product.image} alt={product.alt} className="w-full h-96" />
  </div>
  <div className="card-content w-full h-full flex flex-col justify-around space-y-2 p-2 py-3">
    <p className='top-10 right-0 w-14 h-6 bg-black rounded-r-2xl text-white text-xs flex items-center pl-2'>{product.inStock == true ? "In Stock" : "Out of Stock" } </p>
    <h3 className='text-lg font-bold text-black h-7 w-full'>{product.name}</h3>
    <h3 className='text-sm font-bold text-gray-400 h-7 w-full'>{product.brand}</h3>
    <p className='text-sm text-gray-500 w-full h-16'>{product.description}</p>
    <p className='text-base text-gray-700 w-full h-5 font-bold'>${product.basePrice}</p>
    <button className='bg-black text-white px-4 my-2 py-2 rounded-lg w-32 h-14'>Buy Now</button>
  </div>
</div>
))}
</> 
);
 
}

export default Card
