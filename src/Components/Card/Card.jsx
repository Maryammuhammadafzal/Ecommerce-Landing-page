import React, { useState, useEffect } from 'react';


function Card() {
let [data , setData] = useState([])

useEffect(()=>{
        fetch('https://dummyapi.online/api/products')
        .then(response => response.json)
        .then(data => setData(json))
})

data.map((post) => (

  <div key={post.id} category={post.productCategory} className="card w-64 h-fit bg-white rounded-lg shadow-md flex flex-col py-3">
  <div className="card-image w-full h-fit bg-cover bg-center rounded-t-lg">
    <img src={post.featuredImage} alt="image" className='w-60 h-52 relative'/>
    <p className='absolute top-10 right-0 w-32 h-5 bg-black text-white text-sm '></p>
  </div>
  <div className="card-content w-full h-fit flex flex-col justify-center items-center">
    <h3 className='text-lg font-bold text-black'>{post.title}</h3>
    <h3 className='text-sm font-bold text-gray-400'>{post.brand}</h3>
    <p className='text-sm text-gray-500'>{post.discription}</p>
    <p className='text-base text-gray-700'>{post.basePrice}</p>
    <button className='bg-black text-white px-4 py-2 rounded-lg'>Buy Now</button>
  </div>
</div>
        // <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" key={post.id}>
        // <div class="group relative">
        //   <img src={post.image} alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        //   <div class="mt-4 flex justify-between">
        //     <div>
        //       <h3 class="text-sm text-gray-700">
        //         <a href="#">
        //           <span aria-hidden="true" class="absolute inset-0"></span>
        //           {post.title}
        //         </a>
        //       </h3>
        //       <p class="mt-1 text-sm text-gray-500">{post.discription}</p>
        //     </div>
        //     <p class="text-sm font-medium text-gray-900">{post.price}</p>
        //   </div>
        // </div>
        // </div>
))
 
}

export default Card
