import { useEffect } from "react";

function ScheduleForm() {
  useEffect(() => {
    ((C, A, L) => {
      const p = (a, ar) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "schedule", { origin: "https://app.cal.com" });
    window.Cal.ns.schedule("inline", {
      elementOrSelector: "#cal-inline-schedule",
      calLink: "admitscollegeconsulting/30min",
      config: { layout: "month_view" },
    });
    window.Cal.ns.schedule("ui", {
      hideEventTypeDetails: true,
      layout: "month_view",
    });

    return () => {
      const inlineEl = document.getElementById("cal-inline-schedule");
      if (inlineEl) inlineEl.innerHTML = "";
    };
  }, []);

  return (
    <section className="w-full flex justify-center py-0">
      <div
        id="cal-inline-schedule"
        className="w-full max-w-5xl"
      />
    </section>
  );
}

export default ScheduleForm;
