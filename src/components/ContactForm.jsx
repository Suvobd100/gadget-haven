import Swal from 'sweetalert2'
const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f64db4bc-cdf2-49d3-9040-2f905211008d");

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

    if (res.success) {
        Swal.fire({
            title: "Message Sent!",
            text: "Thanks for your submission",
            icon: "success"
          });
    }
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center ">
        <form onSubmit={onSubmit}
          className="flex flex-col items-center  bg-stone-100
         w-[600px] h-[700px rounded-2xl gap-5 p-4"
        >
          <h2 className="">
            <span className="text-2xl font-bold -ml-3 -mt-[3px] absolute text-purple-500 ">
              C
            </span>{" "}
            onnect Form
          </h2>

          <div>
            <input
              type="text"
              placeholder="John Connor"
              className="input input-bordered w-full max-w-xs"
              name="name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="example@domain.com"
              className="input input-bordered w-full max-w-xs"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="textarea textarea-bordered "
              placeholder=" message"
              name="textarea"
              required
            />
          </div>
          <button type="submit" className="btn btn-outline btn-primary  -mt-4">Send!</button>
        </form>
       
      </section>
    </div>
  );
};

export default ContactForm;
