import React from 'react';

function Project() {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center items-center flex-col mb-3'>
        <h1 className='text-2xl font-bold mb-5'>Project</h1>
        <div className='w-full flex md:flex-row flex-col'>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Image" /></figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Todo Frontend</h2>

                  <p>Todo frontend with react vita and tailwand</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Todo Frontend</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004/Todo-Frontend">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Add,Delete,Update Todo</li>
                  <li>Signup ,Login page</li>
                  <li>user authication using cookies</li>

                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_6').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Todo Backend</h2>

                  <p> Todo Backend using node.js and express</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Todo Backend</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004/Todo-Backend">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>Monogodb</li>
                  <li>Add,Delete,Update Todo</li>
                  <li>Signup,Login</li>
                  <li>user authication using cookies</li>

                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_7').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Chat App</h2>

                  <p>Chat-app using mern stack</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Chat-app</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004/Chat-App">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>MERN Project</li>
                  <li>Tailwind</li>
                  <li>Signup ,Login User</li>
                  <li>user authication using cookies</li>


                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>

        </div>
      </div>










      <div className='w-full flex justify-center items-center flex-col mb-3'>
        <h1 className='text-2xl font-bold mb-5'>Mini Project</h1>
        <div className='w-full flex md:flex-row flex-col'>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_10').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Image" /></figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Portfolio</h2>

                  <p>Portfolio frontend with react vita and tailwand and daisyui</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Portfolio</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004/Profile">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>DaisyUI</li>


                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_11').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Tour-And-Travels</h2>

                  <p> Object oriented mini Project for manginh tour and travels</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Tour-And-Travels</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004/Tour-And-Travels">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>Oop</li>
                  <li>File handling</li>



                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>


          <div className='w-full flex justify-around mb-10'>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_12').showModal()}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                <div className="card-body flex flex-col justify-start items-center">
                  <h2 className="card-title">Github Repositories</h2>

                  <p>My github all Repositories</p>

                </div>
              </div>


            </button>
            <dialog id="my_modal_12" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Github</h3>
                <h3 className="font-bold text-lg">
                  <a href="https://github.com/sidad112004?tab=repositories">Github Link</a>
                </h3>
                <p className="py-4">
                  <li>Github</li>
                  <li>Other work</li>


                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;
