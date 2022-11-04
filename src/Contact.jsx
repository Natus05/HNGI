import React from 'react'

function Contact() {
  return (
    <div id="contact" className='bg-[#FFFFFF]'>
<div className='flex flex-col items-start py-[64px] px-[0px] gap-[48px] ml-0 mt-0'>

   <div className='flex flex-row items-start py-0 px-[16px] w-[375px] h-[116px]'>
      <div className='flex flex-col items-start p-0 gap-[32px] w-[343px] h-[116px]'>
        <div className='flex flex-col items-start p-0  gap-[16px] w-[343px] h-[116px]'>
            <p className="text-[#101828] w-[343px] h-[44px] font-[600] text-[36px] leading-[44px] tracking-[-0.02rem]">Contact Me</p>
            <p className='text-[#475467] leading-[28px] text-[18px] font-[400] w-[343px] h-[56px]'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
      </div>
   </div>
   
   <div className='py-0 px-[16px] gap-[48px] flex flex-col items-start w-[375px]'>
    <div className='w-[343px] flex flex-col items-center p-0 gap-[48px]'>
       <form className='flex flex-col items-start p-0 gap-[32px] w-[343px]'>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div className='w-[343px]'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your first name" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your last name" required />
        </div>

        </div>

        <div class="mb-12 w-[343px]">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yourname@gmail.com" required />
        </div>

        <label for="message" class="block mb-2 text-sm font-medium">Message</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>

        <div class="flex items-center">
         <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:border-gray-600" />
         <label for="link-checkbox" class="ml-2 text-sm font-medium">You agree to providing your data to Fortunatus Adeyemo who may contact you</label>
         </div>

         <button type="submit" class="w-[100%] mt-[32px] text-white bg-[#1570EF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
        </form>
        </div>
        </div>

        </div>
      
        <div className='flex flex-col items-start py-[10px] md:py-[48px] px-0 gap-[64px] bg-[#ffffff]'>
       <div className='flex flex-col items-start justify-start py-0 px-[32px] min-h-[64px]'>
          <div className='box-border flex flex-col md:flex-row justify-start items-start pt-[32px] px-0 pb-0 gap-[40px] md:gap-[60px] lg:gap-[32px] border-t border-[#EAECF0] border-solid'>
             <img id="zuri" className='order-first' width="187.59px" height="32px" src="./images/Zuri.png" alt="Zuri" />
             <p className='h-[24px] min-w-[250px] lg:w-[832px] font-[400] text-[16px] leading-[24px] text-center text-[#667085]'>HNG Internship 9 Frontend Task</p>
             <img id="I4G" className="order-last" width="132.13px" height="32px" src="./images/I4G.png" alt="I4G" />
          </div>
       </div>
    </div>
  

    </div>
  )
}

export default Contact