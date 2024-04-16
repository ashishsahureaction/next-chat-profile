import React from 'react';
import Image from 'next/image';
import CommentSection from '../CommentSection';
import Collapsible from '../Collapsible';
import LatestPosts from '../LatestPosts';

const Page: React.FC = () => {
  return (<>     
    <div className=" min-h-screen flex flex-row">
<div className=" w-3/4 ">
<div className=" max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
<div className="flex  justify-between mt-6">
  
<span className="px-2 py-1 text-xl font-bold rounded bg-orange-400 dark:bg-orange-600 text-white dark:text-gray-50">From Render to Reality: The Art of Efficient UI Updates in React!</span>

<span className="text-sm mt-3 text-gray-400 dark:text-gray-600">Jun 1, 2020</span>

</div>
<div className="mt-6 text-justify">
  In the realm of React development, the concept of component re-renders is fundamental. It&apos;s the mechanism through which your user interface stays responsive and up-to-date with the latest changes in your application&apos;s state, props, or context. But have you ever wondered what really happens under the hood when a component re-renders? Is it simply a matter of updating the real DOM every time? The answer might surprise you.
        <div className="mt-3 text-justify">  
        Whenever component re-renders, does it mean that React re-renders the real DOM each time? 
<span className='text-orange-600'> No, </span> 
<div className="mt-4 text-justify"> 
React only updates the part of the UI that changed. 
A render is scheduled by React each time the state of a component is modified. 
For example, updating state via the setState hook will not happen immediately but React will execute it at the best possible moment.</div>

<ul className='list-disc mt-4'>
But calling the render function has some side-effects even if the real DOM is not re-rendered:
<li className='ml-4 mt-2'>code inside the function is executed each time, which can be time-consuming depending on its content.</li>
<li className='ml-4 mt-2' >diffing algorithm is executed for each component to be able to determine if the UI needs to be updated.</li> 
</ul>
</div>
</div>

    <hr className='mt-4'/>
    <div className="mt-6 text-xl font-bold">
    Scheduling a Render
</div>
<div className="flex items-center justify-between text-justify ">
    Let&apos;s start with the trigger: whenever there&apos;s a change in a component&apos;s state, props, or context, React schedules a render. This scheduling ensures that updates to the UI happen at an optimal time, prioritizing a smooth user experience over immediate updates.
  <div>
    
  <Image src="/images/eightfive.jpg" width={500} height={500} alt="avatar" className="object-cover mb-4 ml-1 mx-4 rounded-sm hover:scale-95 duration-300 " />

  </div>
</div>
    <div className="mt-2 text-xl font-bold">
    Execution of the Render Function
</div>
    <div className="mt-2 text-justify">
    Now, here&apos;s the interesting part: even though the real DOM isn&apos;t necessarily updated on every render, the render function of a component is still executed. This execution is crucial for React to determine what the UI should look like with the updated state or props. However, if your render function involves complex calculations or operations, it might pose performance challenges.
</div>


<hr className='mt-4'/>
<Collapsible title="Show More" >   
    <div className="mt-2 text-justify"><span className='font-bold text-xl'>Diffing Algorithm</span>
    After the render function does its job, React turns to its secret weapon: the virtual DOM. Using this virtual representation of the UI, React employs a diffing algorithm to compare the new UI with the previous one. This process is vital for identifying exactly which parts of the UI have changed—a key aspect of React&apos;s efficiency.
</div>


    <div className="mt-6 text-xl font-bold">
    Selective DOM Updates
</div>
    <div className="mt-2 text-justify">
    Here&apos;s where the magic truly happens: based on the results of the diffing algorithm, React updates only those parts of the real DOM that have actually changed. This selective updating is what makes React so efficient—it avoids the costly operation of re-rendering the entire DOM tree.
</div>
    <hr className='mt-4'/>
    <div className="mt-6 text-xl font-bold">
    Side Effects
</div>
    <div className="mt-2 text-justify">
   The execution of the render function and the diffing process aren&apos;t just silent operations—they come with side effects. These side effects include performance considerations and impact:

</div>

    <div className="mt-6 text-xl font-bold">
    Execution of Code in the Render Function
</div>
    <div className="mt-2 text-justify">
  Now, here&apos;s the interesting part: even though the real DOM isn&apos;t necessarily updated on every render, the render function of a component is still executed. This execution is crucial for React to determine what the UI should look like with the updated state or props. However, if your render function involves complex calculations or operations, it might pose performance challenges.

</div>
    <hr className='mt-4'/>
    <div className="mt-6 text-xl font-bold">
    Execution of the Render Function
</div>
   
    <ul className='list-disc mt-2'>
        <li className="mt-2 ml-4">Performance Considerations: Complex logic or heavy computations in the render function can lead to performance issues, especially with frequent re-renders.</li>
        <li className="mt-2 ml-4">Optimization Strategies: Keep the render function lean and efficient. Consider using memoization techniques, moving complex calculations outside the component, or utilizing optimization tools like React.memo or shouldComponentUpdate.</li>
    </ul>


    
    <div className="mt-6 text-xl font-bold">
    Execution of the Diffing Algorithm
</div>
   
    <ul className='list-disc mt-2'>
        <li className="mt-2 ml-4">What Happens: React compares the new UI representation with the previous one using the diffing algorithm to identify changes.</li>
        <li className="mt-2 ml-4">Impact on Performance: The diffing process can be computationally expensive, particularly for large and complex component trees.</li>
        <li className="mt-2 ml-4">Minimizing Impact: Structure your component tree wisely, keeping it shallow and avoiding unnecessary nested components. Utilize keys to identify elements in lists for improved efficiency.</li>
    </ul>        
 
    <hr className='mt-4'/>
    <div className="mt-4 text-xl font-bold text-center">
    Conclusion
</div>
    
    While a component&apos;s re-render in React doesn&apos;t always entail a full update of the real DOM, it does involve significant processes like executing the render function and running the diffing algorithm. These processes, though necessary, can have performance implications. Awareness of these side effects and adherence to optimization best practices are essential for maintaining high performance in React applications.

    <p className="mt-2">Understanding the intricacies of component re-renders in React empowers you to write more efficient and responsive applications. So, the next time you trigger a re-render, remember the hidden complexities at play behind the scenes.</p>

  
</Collapsible>

</div>
</div>
<aside className="w-1/3 mt-10 mr-2">
        <LatestPosts/>
        <hr className='mt-4'/>
        <CommentSection/>
      </aside>
</div>
</>
)
}

export default Page;