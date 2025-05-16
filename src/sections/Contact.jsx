import Title from "../components/Title";
import img from "../assets/header-img.svg";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <Title title="Let's Connect" />
      <div className="contect_section flex_box justify_between align_center">
        <div className="contact_left">
          <form
            action="https://formspree.io/f/xovdrllb"
            method="POST"
            className=" contact_form flex_box align_center justify_center"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="emai"
              id="email"
              placeholder="Enter Your Email"
            />
            <textarea
              name="postContent"
              placeholder="Type Your Message..."
              rows={4}
              cols={40}
            />
            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="contect_right flex_box align_center justify_center">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
