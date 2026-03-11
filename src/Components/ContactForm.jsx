import React, { useEffect } from "react";

function ContactForm() {
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

    window.Cal("init", "contact", { origin: "https://app.cal.com" });
    window.Cal.ns.contact("inline", {
      elementOrSelector: "#cal-inline-contact",
      calLink: "olivermaher/30min",
      config: { layout: "month_view" },
    });
    window.Cal.ns.contact("ui", {
      hideEventTypeDetails: true,
      layout: "month_view",
    });

    return () => {
      const inlineEl = document.getElementById("cal-inline-contact");
      if (inlineEl) inlineEl.innerHTML = "";
    };
  }, []);

  /*
  return (
    <div className="w-full">
      <div
        id="cal-inline-contact"
        className="mx-auto flex h-[520px] w-full max-w-none items-center justify-center overflow-hidden rounded-2xl border border-[#d9e3ff] bg-white [&>*]:h-full [&>*]:w-full [&>*]:max-w-none [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:max-w-none"
      />
    </div>
  );
  */

  return (
    <section className="w-full flex justify-center py-0">
      <div
        id="cal-inline-contact"
        className="w-full max-w-5xl"
      />
    </section>
  );
}

export default ContactForm;
