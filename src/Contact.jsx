import React from 'react'

function Contact() {
  return (
    <div id="contact" className='bg-[#FFFFFF]'>
<div className='flex flex-col items-start md:items-center md:justify-center md:pr-0 py-[64px] px-[0px] gap-[48px] mt-0 lg:pt-[64px] lg:pb-[96px] lg:[px-0] lg:ml-0 lg:mt-0'>

   <div className='flex flex-row items-start py-0 px-[16px] w-[375px] md:mx-auto  md:w-[531px] h-[116px] md:justify-center md:items-center lg:py-0 lg:px-[32px]'>
      <div className='flex flex-col items-start p-0 gap-[32px] w-[343px] md:mr-[200px] lg:mr-0 md:w-[531px] h-[116px] md:justify-center md:items-center lg:p-0 lg:w-[1216px]'>
       
        <div className='flex flex-col items-start p-0  gap-[16px] w-[343px] h-[116px] lg:w-[720px]'>
            <p className="text-[#101828] w-[343px] lg:w-[448px] h-[44px] font-[600] text-[36px] leading-[44px] tracking-[-0.02rem]">Contact Me</p>
            <p className='text-[#475467] leading-[28px] text-[18px] font-[400] w-[343px] md:w-[531px] lg:w-[720px] h-[56px]'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
      </div>
   </div>
   
   <div className='py-0 px-[16px] gap-[48px] flex flex-col items-start md:mr-[200px] lg:mr-0 md:justify-center w-[375px] mt-[48px] lg:w-[720px]'>
    <div className='w-[343px] flex flex-col items-center md:justify-center p-0 gap-[48px]'>
       <form className='flex flex-col items-start p-0 gap-[32px] w-[343px]'>
    <div class="grid gap-6 mb-6 lg:grid-cols-2  lg:w-[720px]">
        <div className='w-[343px] md:w-[531px] lg:w-[343px]'>
            <label for="first_name" class="block mb-2 text-sm font-medium">First name</label>
            <input id="first_name" type="text" class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required />
        </div>
        <div className='w-[343px] md:w-[531px] lg:w-[343px]'>
            <label for="last_name" class="block mb-2 text-sm font-medium">Last name</label>
            <input id="last_name" type="text" class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your last name" required />
        </div>

        </div>

        <div class="mb-12 w-[343px] md:w-[531px] lg:w-[720px]">
        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
        <input id="email" type="email" class="border h-[44px] border-[#D0D5DD] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="yourname@gmail.com" required />
        <p className='hidden text-[#475467] text-[14px] font-[400] leading-[20px] h-[20px] w-[320px]'>This is a hint text to help user.</p>
        </div>

        <label for="message" class="block mb-2 text-sm font-medium">Message</label>
        <textarea id="message" rows="4" class="block h-[132px] md:w-[531px] lg:w-[720px] p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>

        <div className="flex items-center mt-[24px] md:w-[531px] lg:w-[720px]">
         <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:border-gray-600" />
         <label for="link-checkbox" class="ml-2 text-sm font-medium">You agree to providing your data to Fortunatus Adeyemo who may contact you</label>
         </div>

         <button id="btn__submit" type="submit" class="w-[100%] md:w-[531px] lg:w-[720px] mt-[32px] text-white bg-[#1570EF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
        </form>
        </div>
        
        </div>
        </div>
      
        
  

    </div>
  )
}

export default Contact