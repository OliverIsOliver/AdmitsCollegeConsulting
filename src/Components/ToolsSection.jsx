import React from "react";

export default function ToolsSection() {
  return (
    <>
      <div className="h-max mt-20 relative">
        <div className="text-center seven-title font-outfit font-semibold tracking-tight flex items-center gap-x-5 justify-center">
          <div>
            Our <div className="hero-main-gradient" id="tools">Services</div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-12 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[96rem] flex-col items-center justify-between gap-8 md:flex-row md:items-stretch">
          <div className="h-[32rem] w-full rounded-3xl bg-[#305cde] p-8 text-white shadow-[0_16px_35px_rgba(48,92,222,0.28)] transition-all duration-300 hover:shadow-[0_28px_58px_rgba(48,92,222,0.45)] md:w-[48%]">
            <h4 className="text-2xl font-semibold font-outfit">Service Alpha</h4>
            <p className="mt-5 text-base leading-7 font-outfit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet dui quis arcu feugiat aliquet at non metus.
            </p>
          </div>

          <div className="h-[32rem] w-full rounded-3xl bg-[linear-gradient(90deg,#281e71_0%,#305cde_35%,#305cde_70%,#122859_100%)] p-[2px] shadow-[0_14px_30px_rgba(40,30,113,0.2)] transition-all duration-300 hover:shadow-[0_26px_52px_rgba(40,30,113,0.4)] md:w-[48%]">
            <div className="h-full w-full rounded-[22px] bg-[#eef3ff]/90 p-8 text-[#122859]">
              <h4 className="text-2xl font-semibold font-outfit">Service Beta</h4>
              <p className="mt-5 text-base leading-7 font-outfit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo, lorem vel convallis elementum, risus nisl luctus massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
