import ScheduleForm from "./ScheduleForm";

function ScheduleSection() {
  return (
    <div className="relative font-outfit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="block w-full relative -bottom-2"
      >
        <path
          fill="#98AEEF"
          fillOpacity="1"
          d="M0,192L34.3,208C68.6,224,137,256,206,277.3C274.3,299,343,309,411,272C480,235,549,149,617,138.7C685.7,128,754,192,823,229.3C891.4,267,960,277,1029,277.3C1097.1,277,1166,267,1234,245.3C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-[#98AEEF] pt-8 scroll-mt-[7.5rem]" id="schedule">
        <div className="max-w-[80rem] mx-auto text-center px-2 flex flex-col gap-y-4 items-center">
          <h2 className="six-title font-semibold text-[#122859]">
            Book a Free Call
          </h2>
          <p className="text-lg text-[#122859] px-2 max-w-xl text-center">
            Schedule a free 30-minute intro call and let’s discuss your goals and how we can build a strong application together.
          </p>

          <ScheduleForm />
        </div>

        <footer className="mt-10">
          <div className="bg-[#88A0E8] px-10 py-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center font-outfit">
              <p className="text-center text-base font-bold text-[#122859]">
                © {new Date().getFullYear()} Admits College Consultings. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default ScheduleSection;
