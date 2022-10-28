import React from 'react'

function Main() {
  return (
    <div id="container" className='flex flex-col items-center py-[0px] px-[16px] gap-[32px]'>
          <div id="content" className='flex flex-col items-start py-[0px] px-[0px] gap-[32px]'>
                   <section id="profile_section" className='flex flex-col items-center py-[0px] px-[0px] gap-[24px] sm:h-[140px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] isolate'>
                           <div id="profile_id" className='flex flex-col justify-center items-center py-[0px] px-[0px]'>
                            <img className="hover:bg-[url('./images/hover.png')] focus:border-[#EBE9FE] focus:border-solid focus:border-[5.5px] w-[88px] h-[88px] rounded-[275px]" src="./images/profile__img.png" alt="profile img" />
                           </div>

                           <div id="twitter" className='text-black flex flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              ADEYEMO FORTUNATUS
                           </div>

                           <div id="slack" className='hidden text-black flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              Natus05
                           </div>
                           <div className='mt-[-20px] mr-[0px] border border-dashed border-[#D0D5DD] md:hidden'>
                              <img className='w-[40px] h-[40px]' src='./images/nav-sm.png' alt='nav'/>
                           </div>
                   </section>

                   <section id="link_section" className='flex flex-col items-center py-[0px] px-[0px]'>
                    <button type='button' id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://twitter.com/Fortunatus_05' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Twitter Link</span>
                    </a>
                    </button>

                    <button type='button' id="btn__zuri" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://training.zuri.team/' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Zuri Team</span>
                    </a>
                    </button>

                    <button type='button' id="books" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='http://books.zuri.team' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Zuri Books</span>
                    </a>
                    </button>

                    <button type='button'icle id="book__python" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://books.zuri.team/' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Python Books</span>
                    </a>
                    </button>

                    <button type='button' id="pitch" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://background.zuri.team' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Background Check for Coders</span>
                    </a>
                    </button>

                    <button type='button' id="book__design" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://books.zuri.team/design-rules' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Design Books</span>
                    </a>
                    </button>
                   </section>
          </div>
    </div>
  )
}

export default Main