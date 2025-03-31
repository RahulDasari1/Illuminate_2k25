import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_APIKEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    console.log(res);
    if (res.success) {
      setSubmitStatus(!submitStatus);
    }
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div
      id="contact"
      className="xl:p-20 w-full flex flex-wrap flex-col items-center scroll-mt-5 pb-20"
    >
      <h1 className="text-3xl text-center py-10">Contact</h1>
      <div className="w-11/12 xl:w-10/12 h-fit shadow-md shadow-blue-400/30 p-10 rounded-xl flex flex-wrap flex-col xl:px-10 border border-blue-400/30 hover:-translate-y-3 transition-all duration-400">
        <div className="flex flex-wrap gap-20">
          <div className="xl:w-1/2 flex flex-col items-center gap-5">
            <p className="xl:w-11/12 w-full">
              Have questions about Illuminate 2K25? Reach out to us—we're here
              to help!
            </p>
            <iframe
              className="xl:w-11/12 w-full h-full rounded"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLEMAPS_APIKEY}&q=CMRIT,Hyderabad`}
            ></iframe>
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-wrap flex-col gap-5 xl:w-fit w-full"
          >
            <input
              className="border border-blue-600/40 outline-0 p-2 xl:w-90 rounded-lg"
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              required
            />
            <input
              className="border block p-2 rounded-lg border-blue-600/40 outline-0"
              placeholder="Email"
              type="email"
              name="email"
              autoComplete="off"
              required
            />
            <textarea
              className="border block p-2 rounded-lg border-blue-600/40 outline-0 h-30"
              placeholder="Message"
              name="message"
              autoComplete="off"
              required
            ></textarea>
            <button
              className={`w-fit px-5  cursor-pointer py-3 rounded-lg transition-all duration-400 ${
                submitStatus ? "bg-blue-500" : "bg-[#00171f]"
              }`}
              type="submit"
            >
              {submitStatus ? "Successfully sent!✅" : "Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
