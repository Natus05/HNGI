import React from 'react'

function Container() {
  return (
    <div id="container" className='flex flex-col items-center py-[0px] px-[16px] gap-[32px]'>
          <div id="content" className='flex flex-col items-start py-[0px] px-[0px] gap-[32px]'>
                   <section id="profile_section" className='flex flex-col items-center py-[0px] px-[0px] gap-[24px] sm:h-[140px] sm:w-[343px] isolate'>
                           <div id="profile_id" className='flex flex-col justify-center items-center py-[0px] px-[0px]'>
                            <img className='w-[88px] h-[88px] rounded-[275px]' src="./images/profile__img.png" alt="profile img" />
                           </div>

                           <div id="twitter" className='text-black flex flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              ADEYEMO FORTUNATUS
                           </div>

                           <div id="slack" className='hidden text-black flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              SLACK
                           </div>
                   </section>

                   <section id="link_section" className=''>

                   </section>
          </div>
    </div>
  )
}

export default Container