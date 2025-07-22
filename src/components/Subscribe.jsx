function Subscribe() {
  return (
    <div className="bg-[#570095] text-white py-10 px-4">
      <form action="" className="opacity-80 grid gap-8">
        <h1 className="text-[30px] leading-tight">
          Get More Zikoko Goodness in Your Mail
        </h1>
        <p className="text-[20px] opacity-60">
          Subscribe to our newsletters and never miss any of the action
        </p>
        <div className="grid gap-2 text-[14px]">
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="1" />
            <label htmlFor="1">Zikoko Daily</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="2" />
            <label htmlFor="2">Ships</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="3" />
            <label htmlFor="3">Money by Zikoko</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="3" />
            <label htmlFor="3">Her</label>
          </div>
        </div>

        <div className="">
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
          <button className="py-4 rounded w-full bg-[#9a2bc2] text-[14px] font-semibold cursor-pointer">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
