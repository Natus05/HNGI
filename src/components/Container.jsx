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
                              Natus05
                           </div>
                   </section>

                   <section id="link_section" className='flex flex-col items-center py-[0px] px-[0px] w-[343px]'>
                    <article id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://tailwindcss.com/docs/installation/play-cdn' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Twitter Link</span>
                    </a>
                    </article>

                    <article id="btn__zuri" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://training.zuri.team/' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Zuri Team</span>
                    </a>
                    </article>

                    <article id="books" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='http://books.zuri.team' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Zuri Books</span>
                    </a>
                    </article>

                    <article id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://tailwindcss.com/docs/installation/play-cdn' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Twitter Link</span>
                    </a>
                    </article>

                    <article id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://tailwindcss.com/docs/installation/play-cdn' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Twitter Link</span>
                    </a>
                    </article>

                    <article id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://tailwindcss.com/docs/installation/play-cdn' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px]'>Twitter Link</span>
                    </a>
                    </article>
                   </section>
          </div>
    </div>
  )
}

export default Container