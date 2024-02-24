import { Button } from "../components/ui/Button";

const Contact = () => {
  return (
    <div className="w-1/2 mx-auto mt-10 lg:w-2/6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h1>
      <p className="mt-6 text-color3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="mt-6 flex gap-8 lg:justify-center">
        <div className="border rounded-xl w-[50%] py-4 px-4 lg:w-[300px]">
          <h1 className="font-bold text-lg">Address</h1>
          <p className="mt-3 text-color3">1328 Oak Ridge Drive, Saint</p>
          <p className="text-color3">Louis, Missouri</p>
        </div>
        <div className="border rounded-xl w-[50%] py-4 px-4 lg:w-[300px]">
          <h1 className="font-bold text-lg">Contact</h1>
          <div className="mt-3">
            <p className="text-color3">313-332-8662</p>
            <p className="text-color3">info@email.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg w-[96%] mt-12 py-7 pl-8 flex flex-col gap-6 pr-28">
        <p className="font-bold text-lg">Leave a Message</p>
        <div className="flex justify-between gap-8">
          <input
            type="text"
            className="rounded-[5px] h-8 border pl-4 w-full lg:h-10"
            placeholder="Your name"
          />
          <input
            type="text"
            className="rounded-[5px] h-8 border pl-4 w-full lg:h-10"
            placeholder="Your email"
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          className="rounded-[5px] border resize-none"
        ></textarea>
        <Button buttonText="Send message" />
      </div>
    </div>
  );
};

export default Contact;
