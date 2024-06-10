import React from 'react';

function Skill() {
  return (
    <div className='flex flex-col items-center'>
       <h1 className='text-2xl mb-4 font-bold'>Skills</h1>
      <div className='w-full flex md:flex-row flex-col gap-3 justify-center items-center mb-8'>
    
        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>
          <div className="mockup-code">
            <pre data-prefix="$" className='text-xl'><code>DSA;</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Stack</code></pre>
            <pre data-prefix=">" className="text-success"><code>Queue</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Linklist</code></pre>
            <pre data-prefix=">" className="text-success"><code>tree
            </code></pre>
            <pre data-prefix=">" className="text-warning"><code>Graph</code></pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$" className='text-xl'><code>DBMS</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Relational,ER Model</code></pre>
            <pre data-prefix=">" className="text-success"><code>Integrity Constraints</code></pre>
            <pre data-prefix=">" className="text-warning"><code>File and Indexing</code></pre>
            <pre data-prefix=">" className="text-success"><code>Concurrency Control
            </code></pre>
            <pre data-prefix=">" className="text-warning"><code>Crash Recovery,Security</code></pre>

          </div>
        </div>


        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>

          <div className="mockup-code">
            <pre data-prefix="$" className='text-xl'><code>Oop</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Classes and Objects</code></pre>
            <pre data-prefix=">" className="text-success"><code>Inheritance</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Encapsulation</code></pre>
            <pre data-prefix=">" className="text-success"><code>Polymorphism
            </code></pre>
            <pre data-prefix=">" className="text-warning"><code>Abstraction</code></pre>

          </div>

          <div className="mockup-code">
            <pre data-prefix="$" className='text-xl'><code>MERN</code></pre>
            <pre data-prefix=">" className="text-warning"><code>MongoDB</code></pre>
            <pre data-prefix=">" className="text-success"><code>Express</code></pre>
            <pre data-prefix=">" className="text-warning"><code>React</code></pre>
            <pre data-prefix=">" className="text-success"><code>Node.js
            </code></pre>
            <pre data-prefix=">" className="text-warning"><code>Postman</code></pre>


          </div>

        </div>


      </div>



      <div>
        <h1 className='text-2xl m-5 font-bold'>Language/Frameworks</h1>

      </div>
      <div className='w-full flex md:flex-row flex-col gap-3 justify-center items-center mb-8'>

        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>
          <div className="mockup-code bg-primary text-primary-content">
            <pre><code>C++ Programming language</code></pre>
          </div>

          <div className="mockup-code  bg-accent text-primary-content">
            <pre><code>c Programming language</code></pre>
          </div>
        </div>


        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>
          <div className="mockup-code bg-secondary text-primary-content">
            <pre><code>Javascript</code></pre>
          </div>

          <div className="mockup-code bg-warning text-primary-content">
            <pre><code>Mysql</code></pre>
          </div>
        </div>


      </div>


      <div className='w-full flex md:flex-row flex-col gap-3 justify-center items-center'>

        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>
          <div className="mockup-code bg-warning text-primary-content">
            <pre><code>Postman</code></pre>
          </div>

          <div className="mockup-code bg-secondary text-primary-content">
            <pre><code>Github</code></pre>
          </div>
        </div>


        <div className='flex md:flex-col lg:flex-row flex-col w-1/2 justify-around gap-3'>
          <div className="mockup-code bg-accent text-primary-content">
            <pre><code>Tailwaid</code></pre>
          </div>

          <div className="mockup-code bg-primary text-primary-content">
            <pre><code>Python</code></pre>
          </div>
        </div>


      </div>




    </div>
  );
}

export default Skill;
