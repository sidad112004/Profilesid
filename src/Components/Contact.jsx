import React from 'react';

function Contact() {
  return (
    <div>
      <div>
           <div className='w-full h-60 flex items-center justify-center flex-col mt-7'>
            <div className=' font-bold text-xl'>
               <span className='text-blue-300'>Email :</span><span> siddeshad112004@gmail.com</span>
               <br />
               <span className='text-blue-300'>Address : </span><span>kolhapur ,maharashtra</span>
               <br />
               <span className='text-blue-300'>Moblie No : </span><span> 9834989257</span>
               
              </div>

              <div className=' mt-5 text-xl font-bold text-sky-200 m-4'>Social media</div>
              <div className='flex gap-2'>
               
                <span>
                <a href="https://www.linkedin.com/in/siddesh-dhanlobhe-4594b028b/"><img className='w-10' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="" /></a>
                
                </span>

                <span>
                <a href="https://github.com/sidad112004"><img className='w-10' src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-512.png" alt="img" /></a>
                </span>
                <span>
                <a href="https://www.instagram.com/_siddesh0101/?next=https%3A%2F%2Fwww.instagram.com%2Freels%2FC0zPnMCiDLu%2F%3F__coig_login%3D1"><img className='w-10' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="insta" /></a>
                
                </span>

             

                <span>
                <a href="https://www.facebook.com/siddesh.dhanlobhe"><img className='w-10' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="img" /></a>
                </span>

              </div>
           </div>

           
      </div>
    </div>
  );
}

export default Contact;
