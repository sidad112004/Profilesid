import React from 'react';

function Contact() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="w-full h-60 flex items-center justify-center flex-col mt-7">
          <div className="font-bold text-xl text-gray-900 dark:text-gray-100">
            <div className="mb-4">
              <span className="text-blue-300">Email:</span> <span>siddeshad112004@gmail.com</span>
            </div>
            <div className="mb-4">
              <span className="text-blue-300">Address:</span> <span>Kolhapur, Maharashtra</span>
            </div>
            <div className="mb-4">
              <span className="text-blue-300">Mobile No:</span> <span>9834989257</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-xl font-bold text-sky-200 text-center mb-8">
          Follow Me on Social Media
        </div>

        <div className="flex justify-center gap-6">
          <span>
            <a href="https://www.linkedin.com/in/siddesh-dhanlobhe-4594b028b/" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                alt="LinkedIn"
              />
            </a>
          </span>

          <span>
            <a href="https://github.com/sidad112004" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300"
                src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-512.png"
                alt="GitHub"
              />
            </a>
          </span>

          <span>
            <a href="https://www.instagram.com/_siddesh0101/?next=https%3A%2F%2Fwww.instagram.com%2Freels%2FC0zPnMCiDLu%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                alt="Instagram"
              />
            </a>
          </span>

          <span>
            <a href="https://www.facebook.com/siddesh.dhanlobhe" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 h-12 rounded-full hover:scale-110 transition-all duration-300"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                alt="Facebook"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
