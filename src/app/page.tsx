export default function Home() {
  return (
    <div>
      {/* Welcome card */}
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[468px] w-full justify-center px-16 py-12 items-start max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17867fd92814acf96129360a957909c061ff2b0667f1db0f257e72df2b908c01?apiKey=66a38a07e78a4570af00b17d5b394a09&"
          className="absolute h-full w-full object-cover object-center inset-0 rounded-2xl px-12 mt-12"
        />
        <div className="relative flex w-[572px] max-w-full items-stretch justify-between gap-5 ml-28 mt-12 mb-11 px-px max-md:flex-wrap max-md:my-10 rounded-md object-contain">
          <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
            <div className="flex flex-col w-[454px] max-w-full pl-3.5 items-start">
              <div className="text-amber-500 text-5xl font-semibold leading-[67px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                Welcome to Bitriel
              </div>
              <div className="text-amber-500 text-2xl leading-9 self-stretch w-full mt-10 max-md:max-w-full">
                Revolutionize your digital experience with our decentralized
                app!
              </div>
            </div>
            <div className="text-slate-800 text-2xl w-fit font-semibold whitespace-nowrap shadow-sm bg-amber-500 justify-center mt-14 pl-11 pr-11 py-6 rounded-2xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-full mt-36 max-md:mt-10 px-80">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-2 items-start max-md:max-w-full max-md:mt-10">
              <div className="justify-center text-slate-800 text-4xl font-semibold leading-[64px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                Selendra Explorer
              </div>
              <div className="text-neutral-500 text-2xl leading-9 self-stretch mt-6 max-md:max-w-full">
                Revolutionize your digital experience with our decentralized
                app!
              </div>
              <div className="text-amber-500 text-2xl font-medium whitespace-nowrap border-[color:var(--Main,#F1A621)] shadow-sm justify-center items-stretch mt-10 px-6 py-2 rounded-2xl border-2 border-solid max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12eacec6d5e24d917ac6bdbf31000bd26e8c85724289529fc35dd96e1f582ad6?apiKey=66a38a07e78a4570af00b17d5b394a09&"
              className="aspect-[1.7] object-contain object-center w-full shadow-sm overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-zinc-300 self-stretch flex shrink-0 h-px flex-col mt-48 max-md:max-w-full max-md:mt-10" /> */}
    </div>
  );
}
