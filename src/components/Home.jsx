import vg from "../assets/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Technical Star</h1>
          <p>Solution to all your problems ...</p>
        </main>
      </div>
      <div className="home2" id="about">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quidem soluta ullam dolorem ab. Molestias beatae
            nostrum nisi. Perferendis exercitationem assumenda soluta nemo
            officia quo officiis magnam vel error tempora?
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Who are u?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            aliquam et neque laborum nihil quisquam veritatis optio laboriosam
            ex dolor hic nobis accusantium quas facilis quo! Facere unde minus
            non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            esse quas omnis molestiae animi suscipit soluta corrupti distinctio,
            obcaecati adipisci eum. Illo esse nam recusandae at et veritatis,
            consequatur assumenda! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempore error omnis atque earum nesciunt. Non
            libero a porro veartificial intelligencet facilis vero aspernatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            repudiandae ducimus? Et, molestias? Blanditiis nesciunt, quos
            necessitatibus repellat laboriosam similique! Autem mollitia odio
            ullam cum! Repudiandae nulla harum aspernatur nostrum.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
