<template>
  <div id="property-main">
    <!-- Property SideBar -->
    <div id="property-sidebar">
      <!-- Property Search bar -->
      <div class="property-search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search keyword..." type="search" class="search-property input">
      </div>
      <!-- Property Filters -->
      <div id="properties-filters">
        <div class="filter-box">
          <button class="" data-bs-toggle="dropdown" aria-expanded="false">Status</button>
          <div class="dropdown-menu options ">
            <form action="">
              <div><input type="checkbox">For Sale</div>
              <div><input type="checkbox">For Sale</div>
              <div><input type="submit" value="cancel"><input type="submit" value="Apply"></div>
            </form>
          </div>
        </div>
        <div class="filter-box">
          <button class="" data-bs-toggle="dropdown" aria-expanded="false">Beds</button>
          <div class="dropdown-menu options ">
            <form action="">
              <p>Bedrooms</p>
              <div class="number-min-max">
                <input type="number" placeholder="Min">
                <input type="number" placeholder="Max">
              </div>
              <div><input type="submit" value="cancel"><input type="submit" value="Apply"></div>
            </form>
          </div>
        </div>
        <div class="filter-box">
          <button class="" data-bs-toggle="dropdown" aria-expanded="false">Baths</button>
          <div class="dropdown-menu options ">
            <form action="">
              <p>Bathrooms</p>
              <div class="number-min-max">
                <input type="number" placeholder="Min">
                <input type="number" placeholder="Max">
              </div>
              <div><input type="submit" value="cancel"><input type="submit" value="Apply"></div>
            </form>
          </div>
        </div>
        <div class="filter-box">
          <button class="" data-bs-toggle="dropdown" aria-expanded="false">Price</button>
          <div class="dropdown-menu options ">
            <form action="">
              <p>Price</p>
              <div class="number-min-max">
                <input type="number" placeholder="Min">
                <input type="number" placeholder="Max">
              </div>
              <div><input type="submit" value="cancel"><input type="submit" value="Apply"></div>
            </form>
          </div>
        </div>
      </div>
      <button class="sidebar-search-btn">Search</button>
    </div>
    <div id="properties">
      <div class="properties-header">
        <div class="from-to-from">
          <i class="fa-regular fa-house"></i><a href="index.html">Home</a><i class="fa-regular fa-chevron-right"></i><a href="">Properties</a>
        </div>
        <h1>Properties</h1>
        <div class="total-properties">
          <p>52 properties</p>
          <div>
            <span>Sort by:</span>
            <select name="" id="">
              <option value="">Default Order</option>
              <option value="">Price - Low to High</option>
              <option value="">Price - High to Low</option>
              <option value="">Title - ASC</option>
              <option value="">Title - DESC</option>
              <option value="">Date - New to Old</option>
              <option value="">Date - Old to New</option>
            </select>
          </div>
        </div>
      </div>
      <div class="cards-container">
        <div class="property-card-box">
          <div class="property-carousel">
            <i class="fa-solid fa-chevron-left"></i>
            <a href="property-details.html">
              <div class="property-images">
                <img src="/img/client-side/hero-section-img.png" alt="...">
                <img src="/img/client-side/bg-hero.png" alt="...">
                <img src="/img/client-side/hero-section-img.png" alt="...">
              </div>
            </a>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="property-details-box">
            <a href="property-details.html"><p class="property-name">Alice in borderland</p></a>
            <div class="property-price-detail">
              <div>Rs:<span>79040.00</span></div>
              <div class="rooms-baths-sqft">
                <p><i class="fa-light fa-bed"></i><span>4</span></p>
                <p><i class="fa-light fa-shower"></i><span>2</span></p>
                <p><i class="fa-light fa-ruler-triangle"></i><span>1200</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="property-card-box">
          <div class="property-carousel">
            <i class="fa-solid fa-chevron-left"></i>
            <a href="property-details.html">
              <div class="property-images">
                <img src="/img/client-side/hero-section-img.png" alt="...">
                <img src="/img/client-side/bg-hero.png" alt="...">
                <img src="/img/client-side/hero-section-img.png" alt="...">
              </div>
            </a>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="property-details-box">
            <a href="property-details.html"><p class="property-name">saif ullah</p></a>
            <div class="property-price-detail">
              <div>Rs:<span>79040.00</span></div>
              <div class="rooms-baths-sqft">
                <p><i class="fa-light fa-bed"></i><span>4</span></p>
                <p><i class="fa-light fa-shower"></i><span>2</span></p>
                <p><i class="fa-light fa-ruler-triangle"></i><span>1200</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="property-card-box">
          <div class="property-carousel">
            <i class="fa-solid fa-chevron-left"></i>
            <a href="property-details.html">
              <div class="property-images">
                <img src="/img/client-side/hero-section-img.png" alt="...">
                <img src="/img/client-side/bg-hero.png" alt="...">
                <img src="/img/client-side/hero-section-img.png" alt="...">
              </div>
            </a>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="property-details-box">
            <a href="property-details.html"><p class="property-name">ali raza</p></a>
            <div class="property-price-detail">
              <div>Rs:<span>79040.00</span></div>
              <div class="rooms-baths-sqft">
                <p><i class="fa-light fa-bed"></i><span>4</span></p>
                <p><i class="fa-light fa-shower"></i><span>2</span></p>
                <p><i class="fa-light fa-ruler-triangle"></i><span>1200</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="property-card-box">
          <div class="property-carousel">
            <i class="fa-solid fa-chevron-left"></i>
            <a href="property-details.html">
              <div class="property-images">
                <img src="/img/client-side/hero-section-img.png" alt="...">
                <img src="/img/client-side/bg-hero.png" alt="...">
                <img src="/img/client-side/hero-section-img.png" alt="...">
              </div>
            </a>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="property-details-box">
            <a href="property-details.html"><p class="property-name">hassan ahsan</p></a>
            <div class="property-price-detail">
              <div>Rs:<span>79040.00</span></div>
              <div class="rooms-baths-sqft">
                <p><i class="fa-light fa-bed"></i><span>4</span></p>
                <p><i class="fa-light fa-shower"></i><span>2</span></p>
                <p><i class="fa-light fa-ruler-triangle"></i><span>1200</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  document.querySelectorAll(".property-carousel").forEach(carousel => {
    let imagesContainer = carousel.querySelector(".property-images");
    let images = imagesContainer.querySelectorAll("img");
    let prevBtn = carousel.querySelector(".fa-chevron-left");
    let nextBtn = carousel.querySelector(".fa-chevron-right");
    let index = 0;

    imagesContainer.style.display = "flex";
    imagesContainer.style.overflow = "hidden";
    imagesContainer.style.width = "100%";
    images.forEach(img => img.style.width = "100%");

    function updateCarousel() {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    updateCarousel();

    nextBtn.addEventListener("click", function () {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });
  });
});
</script>