import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { green } from '@mui/material/colors';
import img1 from './coffee.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home2() {

  return (
    <>
      <nav className="navbar bg-dark">
        <a className=" navbar-brand text-light ms-2 " href="#" style={{ fontSize: 30 }}>
          <b>GRANDCOFFEE</b>
        </a>
        <ul className="nav">
          <li className="nav-items"><a className="nav-link text-light" href="#">Home</a></li>
          <li className="nav-items"><a className="nav-link text-light" href="#">About Us</a></li>
          <li className="nav-items"><a className="nav-link text-light" href="#">Gallery</a></li>
          <li className="nav-items"><a className="nav-link text-light" href="#">Services</a></li>
          <li className="nav-items"><a className="nav-link text-light" href="#">Contact Us</a></li>
          <li className="nav-items"><a className="nav-link text-light" href="#">
            <SearchIcon />
          </a></li>
        </ul>
      </nav>

      <div className='hm2'>
        <div className=' offset-lg-7  ' style={{ paddingTop: 100 }}>
          <h1 className=' text-dark text-center' style={{ fontSize: 50 }}>Outstanding</h1>
          <h1 className='text-light text-center' style={{ fontSize: 50, fontFamily: "cooper black" }}><b>Coffee Shop</b></h1>
          <p className='h5 text-dark text-center'>It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. </p>

          <button className='btn btn-dark mt-5 ' style={{ marginLeft: 180 }}>LEARN MORE</button>
        </div>
      </div>

      <div className='row m-0 p-0 mt-5 mb-5'>
        <div className='col-lg-5 ms-5 '>
          <h2 className=' mt-5' style={{ color: "orangered", fontWeight: "bolder" }}>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br />
          <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          <center><button className='btn btn-dark p-2 mb-2' >READ MORE</button></center>
        </div>
        <div className='col-lg-6'>
          <img className='img-fluid' src='https://img.freepik.com/premium-photo/cup-hot-coffee-latte-table-cafe-with-shallow-depth-field_258743-129.jpg' />
        </div>
      </div>

      <div>
        <h2 className='text-center' style={{ color: "orangered", fontWeight: "bolder" }}>Our Gallery</h2>

        <p className='text-center m-5'>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s,
          when an unknown printer took a galley of type and scra make a type specimen book.</p>


      </div>
      <div class="row p-0 m-0">
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://img.freepik.com/premium-photo/hot-coffee-morning-wooden-table_838382-54.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://thumbs.dreamstime.com/b/traditional-coffee-cup-heart-shaped-steam-rustic-wood-70228609.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://bakingmischief.com/wp-content/uploads/2019/10/easy-caramel-latte-image-square.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://www.whiskaffair.com/wp-content/uploads/2023/01/Starbucks-Copycat-Hazelnut-Latte-2-3.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://thebigmansworld.com/wp-content/uploads/2021/03/oat-milk-latte4.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://thewoodenskillet.com/wp-content/uploads/2017/08/lavender-oat-cold-brew-latte-10.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://res.cloudinary.com/pactcoffee/image/upload/f_auto,q_auto/c_fill,h_800,w_1200/v1652796661/website-d2c/assets/kopi/brew-guides/latte.png' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>
        <div className='col-lg-4 text-center mb-2'>
          <img src='https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-caramel-latte.jpg' className='img-fluid' style={{ height: 200, width: 300 }} />
        </div>


      </div>
      <center>
        <button className=' btn btn-dark mt-5'>See More</button>
      </center>

      <div className='hm3 mb-5'>
        <h3 className='text-light text-center' style={{ paddingTop: 60 }}>Services</h3>
        <h5 className='text-light text-center mt-3'>Typesetting industry lorem ipsum is simply dummy text of the</h5>

        <div className=' row  p-0 m-0  justify-content-center' >
          <div className='ms-5 mb-3 pt-5' style={{width:300}} >
          <div className='mydiv text-center'>
            <CoffeeIcon className='mt-4' style={{ color: "green", fontSize: 30 }} />
            <h5 className='txt'>Original Coffee</h5>
            <h6 className='txt'>Lorem ipsum dolor sit amet, consectetur</h6>
          </div>
          <div className='hide text-center p-3' style={{height:70}}>
            <button className='btn btn-dark '>READ MORE</button>
          </div>
          </div>
          <div className='ms-5 mb-3 pt-5' style={{width:300}} >
          <div className='mydiv text-center  '  >
            <FreeBreakfastIcon className='mt-4' style={{ color: "green", fontSize: 30 }} />
            <h5 >20 Coffee Flavours</h5>
            <h6 >Lorem ipsum dolor sit amet, consectetur</h6>
          </div>
          <div className='hide text-center p-3' style={{height:70}}>
            <button className='btn btn-dark '>READ MORE</button>
          </div>
          </div>

          <div className=' ms-5 mb-3 pt-5' style={{width:300}}>
          <div className=' mydiv  text-center  '  >
            <EmojiFoodBeverageIcon className='mt-4' style={{ color: "green", fontSize: 30 }} />
            <h5 >Pleasant Ambient</h5>
            <h6 >Lorem ipsum dolor sit amet, consectetur</h6>
          </div>
          <div className='hide text-center p-3' style={{height:70}}>
            <button className='btn btn-dark '>READ MORE</button>
          </div>
          </div>

        </div>
      </div>

      <div className='bg-light mt-5' style={{ height: 400 }}>

        <h1 className='ms-4 pt-5' style={{ color: "orangered" }}><b>Testimonial </b></h1>
        <h6 className='ms-4' style={{ fontFamily: "sans-serif" }}>Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</h6>

        {/* <div id="demo" className='carousel slide' data-bs-ride="carousel">

          <div className='carousel-indicators'>
            <button type='button' data-bs-target="#demo" data-bs-slide-to="0" className='active'></button>
            <button type='button' data-bs-target="#demo" data-bs-slide-to="1" ></button>
            <button type='button' data-bs-target="#demo" data-bs-slide-to="2" ></button>
          </div> */}

        <Carousel autoPlay infiniteLoop showThumbs={false}>

          <div className='p-4'>
            <div className='half-a-border-on-top'>
              <h3 style={{ color: "orangered" }}>Monilla</h3>
              <h6 style={{ fontFamily: "sans-serif" }}> website template imagemany variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                All themany variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some embarrassing hidden in the middle of text. </h6>
            </div>
          </div>

          <div className='p-4'>
            <div className='half-a-border-on-top'>
              <h3 className='d-block' style={{ color: "orangered" }}>Monilla</h3>
              <h6 className='d-block' style={{ fontFamily: "sans-serif" }}> website template imagemany variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                All themany variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some embarrassing hidden in the middle of text. </h6>
            </div>
          </div>

          <div className='p-4'>
            <div className='half-a-border-on-top'>
              <h3 className='d-block' style={{ color: "orangered" }}>Monilla</h3>
              <h6 className='d-block' style={{ fontFamily: "sans-serif" }}> website template imagemany variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                All themany variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some embarrassing hidden in the middle of text. </h6>
            </div>
          </div>
        </Carousel>
        {/* </div> */}

      </div>

      <div className='mt-5 mb-5 bg-light' style={{ height: 500 }}>
        <h2 className='text-center pt-5 mb-5' style={{ color: "orangered" }}>Contact Us</h2>
        <div className='row m-0 p-0'>
          <div className=' col-lg-6 p-4' >
            <div className='ab p-5'>
            <input className='w-75 form-control p-2 m-3 ' type='text' placeholder='Name' />
            <input className='w-75 form-control p-2 m-3' type='email' placeholder='Email' />
            <input className='w-75 form-control p-2 m-3' type='tel' placeholder='Phone Number' />
            <input className='w-75 form-control p-2 m-3' type='text' placeholder='Message' />
            </div>
          </div>
          <div className='col-lg-6'>
            <h6 className='pt-3'>Google Maps Platform rejected your request. This API project is not authorized to use this API. </h6>
          </div>
        </div>
      </div>
    </>
  )

}