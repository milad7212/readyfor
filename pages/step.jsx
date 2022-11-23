import React from "react";

function StepPage() {
  return (
    <div className="mb-20 flex flex-col items-center justify-center">
      <section className="w-[800px]">
        <div className="sticky top-0 z-10 bg-white py-3 shadow-xl shadow-white">
          <h2 className="group-date">مرحله اول</h2>
        </div>
        <div className="timeline">
          <div className="relative">
            <div className="dot">

                <div className="dot absolute -top-1 -right-1 animate-ping"></div>
            </div>
            <div className="pr-10">
              <span className="timeline-date">13 November2021</span>
              <h3 className="timeline-title">Event</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                mollitia facilis nesciunt voluptatibus sequi quasi praesentium
                reprehenderit a hic dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StepPage;
