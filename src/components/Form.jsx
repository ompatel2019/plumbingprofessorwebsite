import React, { useState } from 'react';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      event.target.reset();

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);
    }
  };

  const inputFieldClass = 'p-2 px-4 rounded-sm border border-gray-300 focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all';

  const inputFields = [
    {
      label: "Name",
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter your name...",
      className: inputFieldClass
    },
    {
      label: "Email",
      type: "text",
      id: "email",
      name: "email",
      placeholder: "Enter your email (optional)...",
      className: inputFieldClass
    },
    {
      label: "Message",
      type: "textarea",
      id: "inquiry",
      name: "message",
      placeholder: "Enter your inquiry...",
      className: inputFieldClass,
      rows: 5
    }
  ];

  return (
    <div className=''>
      <div className='grid grid-cols-2 max-md:grid-cols-1'>
        <div className='formPad bg-c-5-0 py-8 sm:py-14 lg:py-16 2xl:py-20 space-y-4 col-span-1'>
          <h2 className='h4 font-bold text-c-4-0 max-md:text-center'>Contact Us!</h2>
          <p className='p text-white max-md:text-center'>
            Have an inquiry? Let us know here so we can sort it out and get back to you as soon as possible!.
          </p>

          <form className='text-c-4-0 space-y-4' onSubmit={onSubmit}>
            {inputFields.map(field => (
              <div className='space-y-2' key={field.id}>
                <p>{field.label}</p>
                {field.type !== 'textarea' ? (
                  <input
                    required
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={field.className}
                  />
                ) : (
                  <textarea
                    required
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={field.className}
                    rows={field.rows}
                  />
                )}
              </div>
            ))}
            <button className='bg-c-3-0 flex items-center p-2 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-blue-300 transition-colors'>
              <p>Send Inquiry</p>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <div className='reviewPad max-md:hidden reviewPad bg-c-3-0 py-8 sm:py-14 lg:py-16 2xl:py-20 space-y-4 col-span-1 flex items-center'>
          <h2 className='font-bold text-c-4-0 h5'>
            “Dino was upfront on the job and involved me in the process explaining to me what has happened and how I should go forward. The job was completed and during subsequent rain, I did not have the blockage anymore!”
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Form;
