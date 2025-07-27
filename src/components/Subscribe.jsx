function Subscribe() {
  return (
    <div className="bg-[#570095] text-white py-10 px-4 lg:px-[6rem]">
      <form action="" className="opacity-80 grid lg:grid-cols-2 gap-8">
        <div className="">
          <h1 className="text-[30px] lg:text-[48px] leading-tight">
            Get More Zikoko Goodness in Your Mail
          </h1>
          <p className="text-[20px] opacity-60">
            Subscribe to our newsletters and never miss any of the action
          </p>
        </div>
        <div className="grid gap-2 text-[14px] lg:justify-center lg:text-[18px] lg:grid-cols-2 lg:m-10 lg:gap-8">
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="" id="1" className="scale-200" />
            <label htmlFor="1">Zikoko Daily</label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="" id="2" className="scale-200" />
            <label htmlFor="2">Ships</label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="" id="3" className="scale-200" />
            <label htmlFor="3">Money by Zikoko</label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="" id="3" className="scale-200" />
            <label htmlFor="3">Her</label>
          </div>
        </div>

        <div className="lg:col-span-2 lg:flex">
          <div className="w-full grid grid-cols-2 gap-[2px]">
            <input
              type="text"
              placeholder="Enter your first name"
              className="bg-[#f5ebff] py-4 text-black placeholder-black rounded-l pl-4 focus-visible:outline-none text-[12px]"
            />
            <input
              type="text"
              placeholder="Email address"
              className="bg-[#f5ebff] py-4 text-black placeholder-black rounded-r focus-visible:outline-none pl-4 text-[12px]"
            />
          </div>
          <button className="py-4 rounded w-full bg-[#9a2bc2] text-[14px] lg:max-w-[20rem] font-semibold cursor-pointer">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
