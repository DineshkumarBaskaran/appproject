import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
       <div>
        <nav class="navbar">
        <div class="logo">Dineshwebsite</div>
        <ul class="nav-links">
            <li><a href="" class="anchor-link">Home</a></li>
            <li><a href="" class="anchor-link">About us</a></li>
            <li><a href="" class="anchor-link">Products</a></li>
            <li><a href=""class="anchor-link">contact</a></li>
        </ul>
    </nav>
    <section class="about">
        <div class="about-container">

            
            
            <div class="about-content">
                <h4>About Us</h4>

                <h1>We Build Ideas into Reality With Team</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laboriosam tempore adipisci illum mollitia, odio totam sed possimus illo hic quibusdam tempora ratione minima error nostrum distinctio alias rerum est, consectetur voluptatem expedita? Distinctio, est ipsa vitae quod amet iusto itaque, eaque vero aut, quis repudiandae aliquam quisquam veritatis aperiam!</p>
                
                <a href="" class="about-btn">Learn More</a>
            </div>

        </div>
    </section>

    <footer>
    <div class="footer-container">
        <div class="footer-box">
        <h2>MyWebsite</h2>
        <p>Welcome to my Website.we provide quality products to our customer with afforable</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>contact us</h3>
        <p>Email: mywebsite@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: HSR Layout, Banglore, Karanataka, India</p>
      </div>

      <div class="footer-media">
        <h3>Follow us</h3>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>

    <div class="copyright">
        <p>&copy 2026 Mywebsite. All rights reserved.</p>
    </div>
</footer>

</div>
       );
}

export default App
