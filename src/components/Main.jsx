import React from 'react'

function Main() {
  return (
    <div id="container" className='flex flex-col items-center py-[0px] px-[16px] gap-[32px]'>
          <div id="content" className='flex flex-col items-start py-[0px] px-[0px] gap-[32px]'>
                   <section id="profile_section" className='flex flex-col items-center py-[0px] px-[0px] gap-[24px] sm:h-[140px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] isolate'>
                           <div id="profile__img" className='flex flex-col justify-center items-center py-[0px] px-[0px]'>
                            <img className="focus:border-[#EBE9FE] focus:border-solid focus:border-[5.5px] w-[88px] h-[88px] rounded-[275px]" src="./images/profile__img.png" alt="profile img" />
                           </div>

                           <div id="twitter" className='text-black flex flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              ADEYEMO FORTUNATUS
                           </div>

                           <div id="slack" className='hidden text-black flex-row justify-center items-center gap-[8px] py-[0px] px-[0px] w-[343px] h-[28px]'>
                              Natus05
                           </div>
                           <div className='mr-[-90%] border-dashed border-[#D0D5DD] md:hidden mt-[-140px]'>
                              <img className='w-[40px] h-[40px]' src='./images/nav-sm.png' alt='nav'/>
                           </div>
                           <div className='border-dashed border-[#D0D5DD] rounded-[20px] mr-[-50%] mt-[-170px]'>
                              <img className='hidden md:inline w-[40px] h-[40px]' src='./images/nav-lg.png' alt='nav'/>
                           </div>
                   </section>

                   <section id="link_section" className='flex flex-col items-center py-[0px] px-[0px] mt-[30%] md:mt-[0%]'>
                    <button type='button' id="twitter_link" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://twitter.com/Fortunatus_05' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Twitter Link</span>
                    </a>
                    </button>

                    <button type='button' id="btn__zuri" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a href='https://training.zuri.team/' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Zuri Team</span>
                    </a>
                    </button>

                    <button type='button' id="books" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a title="Find design and coding books" href='http://books.zuri.team' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Zuri Books</span>
                    </a>
                    </button>

                    <button type='button'icle id="book__python" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a title='Python books' href='https://books.zuri.team/python-for-beginners?ref_id=Fortunatus-Adeyemo' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Python Books</span>
                    </a>
                    </button>

                    <button type='button' id="pitch" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a title='Cool backgrounds' href='https://background.zuri.team' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Background Check for Coders</span>
                    </a>
                    </button>

                    <button type='button' id="book__design" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a title='Free design books by Zuri' href='https://books.zuri.team/design-rules' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Design Books</span>
                    </a>
                    </button>

                    <button type='button' id="contact" className='mt-[24px] flex flex-row grow justify-center items-center gap-[12px] py-[0px] px-[0px] h-[58px] drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'>
                    <a title='Free design books by Zuri' href='./Contact' target="_blanck">
                         <span className='flex flex-row justify-center items-center py-[24px] px-[32px] gap-[8px] h-[68px] w-[343px] md:w-[730px] lg:w-[1000px] xl:w-[1152px] bg-[#EAECF0] border-[1px] border-[#EAECF0] border-solid rounded-[8px] hover:bg-[#D0D5DD] hover:border-[#D0D5DD] focus:bg-[#EAECF0] focus:border-[#98A2B3] disabled:bg-[#FCFCFD] disabled:border-[#F2F4F7]'>Contact</span>
                    </a>
                    </button>
                   </section>
          </div>
    </div>
  )
}

export default Main