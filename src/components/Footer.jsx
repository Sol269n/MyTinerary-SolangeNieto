import { Link } from "react-router-dom"


const Footer = () =>{
    return (
    <footer>
      <nav className="flex flex-wrap justify-center gap-10 bg-cyan-950 p-5">

        <dl>
          <dt className="font-semibold">Categories</dt>
          <ul className="py-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Cities">Cities</Link></li>
          </ul>
        </dl>

        <dl>
          <dt className="font-semibold">About MyTinerary</dt>
          <ul className="py-2">
          <li><a href="#">About us</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">MyTinerary blog</a></li>
            <li><a href="#"></a></li>
          </ul>
        </dl>

        <dl>
          <dt className="font-semibold">Contact</dt>
          <ul className="py-2">
            <li>
              <a className="inline-flex gap-1" href="https://www.whatsapp.com/" target="_blank">
              <img className=" w-[20px] h-[20px]" src="/assets/whatsapp.png" alt="icon-whatsapp" />
              I want to ask
              </a>
            </li>
            <li>
              <a className="inline-flex gap-1" href="tel:+085 40 13 553" target="_blank"> 
              <img className=" w-[20px] h-[20px]" src="/assets/telefono.png" alt="telefono-icon" />
              +085 40 13 553
              </a>
            </li>
            <li>
              <a className="inline-flex gap-1" href="mailto:MyTinerary@gmail.org" target="_blank">
                <img  className=" w-[20px] h-[20px]" src="/assets/mail.png" alt="icon-mail" />
                MyTinerary@gmail.org
              </a>
            </li> 
          </ul>
        </dl>

        <dl>
          <dt className="font-semibold">Social networks</dt>
          <ul className="py-2">
          <li><a className="inline-flex gap-1" href="https://www.instagram.com/" target="_blank">
              <img className=" w-[20px] h-[20px]" src="/assets/instagram.png" alt="icon-instagram" />
              Instagram
              </a>
          </li>
          <li>
            <a className="inline-flex gap-1" href="https://www.facebook.com/" target="_blank">
              <img className=" w-[20px] h-[20px]" src="/assets/facebook.png" alt="icon-facebook" />
              Facebook
            </a>
          </li>
          <li>
            <a className="inline-flex gap-1" href="https://www.tiktok.com/" target="_blank">
              <img className=" w-[20px] h-[20px]" src="/assets/tikTok.png" alt="icon-tiktok" />
              Tiktok
            </a>
            </li>
          </ul>
        </dl>
      </nav>
    </footer>
    )
}

export default Footer