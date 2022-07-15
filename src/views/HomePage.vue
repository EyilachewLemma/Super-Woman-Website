<template>
  <div class="d-none d-md-block">
    <nav class="position-absolute">
      <!-- <img
        src="../assets/NavigationImage.png"
        alt="navbar Background image"
        class="navBakgound img-fluid"
      />-->
      <div class="naveContainer mt-3 d-flex align-item-center justify-content-between px-3 px-lg-5">
        <div class="mt-2">
          <router-link to="#" class="d-flex">
            <img src="../assets/logo.png" alt="logo" class="img-fluid logo me-2" />
            <img src="../assets/brand.png" alt="logo marker" class="img-fluid logoMarker" />
          </router-link>
        </div>
        <div class="d-flex mt-2">
          <router-link to="#" class="text-white text-decoration-none me-4">Role Models</router-link>
          <router-link to="#" class="text-white text-decoration-none">Blog</router-link>
        </div>
        <div class="d-flex align-items-center">
          <router-link to="#" class="text-white text-decoration-none">Become a Mentor</router-link>

          <div class="dropdown ms-4">
            <button
              class="btn langBtn dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="fs-5 text-white">
                <i class="fas fa-globe"></i>
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <a class="dropdown-item" href="#">Action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div>
          <div class="dropdown p-0 ms-4">
            <button
              class="btn profileBtn rounded-pill text-white py-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                <i class="fas fa-align-left"></i>
              </span>
              <span class="ms-3 fs-5">
                <i class="fas fa-user"></i>
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">Action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- home page section -->
    <div class="position-relative">
      <img
        src="../assets/homeBackground.png"
        alt="home page background image"
        class="backgrounImg img-fluid"
      />
      <div class="d-flex justify-content-between bodyContainer">
        <div class="px-lg-5 textContainer">
        <div class="text-white mx-2 me-lg-5">
          <div class="fw-bold fs-1">WHERE YOU</div>
          <div class="fw-bold fs-1">GET YOUR</div>
          <div class="fw-bold fs-1">SUPER POWER</div>
          <div class="mt-lg-5 fs-5">
            Empowering Women through
            <br />role modeling and mentoring.
          </div>
          <div class="d-flex mt-5">
            <button class="btn fromGoogleBtn text-white me-2 px-3 mt-lg-5  me-lg-4">
               <div class="d-flex align-items-center py-0">
              <p class="me-2 my-0"><i class="fa-brands fa-google-play"></i></p>
               <p class="my-0">
                 Get Apps On <br> google Play
              </p> 
             </div>
            </button>
            <button class="btn fromAppStorBtn text-white px-3 mt-lg-5 border">
             <div class="d-flex align-items-center">
              <p class="me-2 my-0"><i class="fa-brands fa-app-store"></i></p>
               <p class="my-0">
                Get Apps On <br> App Store
              </p> 
             </div>
            </button>
          </div>
        </div>
      </div>
       <div class="flex-fill animatedImgContainer">
            <div class="leftImgContainer" @mouseenter="decreaseHeight()" @mouseleave="increaseHeight()">
            <router-link to="#" class="leftBtn border rounded shadow-sm p-2">See More</router-link>
            <img src="../assets/img1.jpg" alt="sample image" class="img-fluid leftImg" />
          </div>
          <div class="rightImageContainer" :class="{ onHover:isHover}">
          <router-link to="#" class="rightBtn border rounded shadow-sm p-2">See More</router-link>
            <img src="../assets/img3.jpg" alt="sample image" class="img-fluid rightImg" />
          </div>
      </div>
      </div>
    </div>
  </div>
  <!-- for only small device -->
  <nav class="smallNav d-md-none">
    <div class="d-flex align-items-center justify-content-between px-3">
      <div class="mt-3">
        <router-link to="#" class="d-flex">
          <img src="../assets/logo.png" alt="logo" class="img-fluid logo me-2" />
          <img src="../assets/brand.png" alt="logo marker" class="img-fluid logoMarker" />
        </router-link>
      </div>
      <div class="dropdown ms-4 mt-2">
        <button
          class="btn langBtn dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="fs-5 text-white">
            <i class="fas fa-globe"></i>
          </span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    </div>
     <div class="bgForSmallDevice">
            <div>
               <div class="leftImgContainer smallScreen pt-3 pt-sm-5" @mouseenter="decreaseHeight()" @mouseleave="increaseHeight()">
            <router-link to="#" class="leftBtn border rounded shadow-sm p-2">See More</router-link>
            <img src="../assets/img1.jpg" alt="sample image" class="img-fluid leftImg" />
          </div>
          <div class="rightImageContainer smallScreen" :class="{ onHover:isHover}">
          <router-link to="#" class="rightBtn border rounded shadow-sm p-2">See More</router-link>
            <img src="../assets/img3.jpg" alt="sample image" class="img-fluid rightImg" />
          </div>
            </div>
           </div>
  </nav>
   <div class="text-center d-md-none homeBgText p-4">
        <div class="text-white mx-2 me-lg-5">
          <div class="fw-bold fs-1">WHERE YOU</div>
          <div class="fw-bold fs-1">GET YOUR</div>
          <div class="fw-bold fs-1">SUPER POWER</div>
          <div class="mt-lg-5 fs-5">
            Empowering Women through
            <br />role modeling and mentoring.
          </div>
          <div class="d-flex mt-5 justify-content-center">
            <button class="btn fromGoogleBtn text-white me-2 px-3 mt-lg-5  me-lg-4">
               <div class="d-flex align-items-center py-0">
              <p class="me-2 my-0"><i class="fa-brands fa-google-play"></i></p>
               <p class="my-0">
                 Get Apps On <br> google Play
              </p> 
             </div>
            </button>
            <button class="btn fromAppStorBtn text-white px-3 mt-lg-5 border">
             <div class="d-flex align-items-center">
              <p class="me-2 my-0"><i class="fa-brands fa-app-store"></i></p>
               <p class="my-0">
                Get Apps On <br> App Store
              </p> 
             </div>
            </button>
          </div>
        </div>
      </div>
  <div class="recentRoleModels pb-5">
    <div class="text-center text-white py-5">
      RECENT PUBLISHED ROLE MODELS
    </div>
    <div class="row mx-2 mx-lg-3">
      <div class="col-6 col-lg-4" v-for="n in 3" :key="n">
      <img src="../assets/sayat5.jpg" alt="role model image" class="img-fluid rounded w-100">
      <div class="d-flex justify-content-between mt-3">
        <div class="issue">ISSUE 2022</div>
        <div class="d-flex">
          <p class="text-white me-3">1.2k <span class="review fs-5"><i class="fas fa-thumbs-up"></i></span></p>
          <p class="text-white">345 <span class="review fs-5"><i class="fas fa-comment-dots"></i></span></p>
        </div>
      </div>
    </div>
    </div>
    <div class="mt-5 text-center">
      <button class="btn border rounded text-white">VIEW MORE ROLE MODELS <span class="fs-5 ms-5"><i class="fas fa-arrow-right"></i></span></button>
    </div>
  </div>
  <div class="blogSection">
     <div class="recentBlogs">
      <div class="text-center text-white py-5">RECENT PUBLISHED BLOGS</div>
     </div>
     <div class="slightDark">
      <div class="row mx-2 mx-lg-3">
     <div class="col-6 col-lg-4 blogImage" v-for="n in 3" :key="n">
      <img src="../assets/sayat3.jpg" alt="role model image" class="img-fluid rounded w-100">
      <div class="mt-3">
        <div class="fw-bold text-white">How to be a successful woman in Africa ?</div>
        <div class="text-white small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto suscipit modi animi? Magni quidem quia atque, fugit voluptates accusamus?</div>
        <div class="d-flex justify-content-between mt-3">
          <div class="issue">7 minute read</div>
          <div class="d-flex">
          <p class="text-white me-3">1.2k <span class="review fs-5"><i class="fas fa-thumbs-up"></i></span></p>
          <p class="text-white">345 <span class="review fs-5"><i class="fas fa-comment-dots"></i></span></p>
        </div>
        </div>
      </div>
    </div>
    </div>
     <div class="text-center py-5">
      <button class="btn border rounded text-white">VIEW MORE BLOGS <span class="fs-5 ms-5"><i class="fas fa-arrow-right"></i></span></button>
    </div>
     </div>
  </div>
  <div class="subscription d-md-flex px-3 py-4 p-lg-5 w-100">
       <div class="col-md-6 pt-5">
        <div class="fs-4 fw-bold issue mt-4">SUBSCRIBE</div>
        <div class="text-white mt-3">Subscribe to get our new articls and role model in <br> your inbox</div>
       </div>
       <div class="col-md-6 subscribtionInput p-4 mt-3">
        <form @submit.prevent="">
        <div class="mb-3 mt-3 mt-lg-4">
              <input type="text" class="form-control text-white" id="fname" placeholder="First Name">
          </div>
           <div class="mb-3">
              <input type="text" class="form-control text-white" id="lname" placeholder="Last Name">
          </div>
           <div class="mb-3">
              <input type="email" class="form-control text-white" id="email" placeholder="Email">
          </div>
           <div class="mb-4 mt-5">
            <button class="btn  sbscribeBtn text-white px-3">SUBSCRIBE</button>
          </div>
        </form>
       </div>
  </div>
  <div class="findMentor px-3 py-4 p-lg-5">
      <div class="findMentorBox px-2 py-5 px-lg-5">
        <div class="text-white pt-lg-3">ARE YOU LOOKING A MENTOR WHO HELP YOU ON YOUR DREAM</div>
        <div class="mt-3 mt-lg-5 text-center">
      <button class="btn findMentorBtn text-black">FIND MENTOR <span class="fs-5 ms-5"><i class="fas fa-arrow-right"></i></span></button>
    </div>
      </div>
  </div>  
  <TheFooter />
</template>
<script>
import TheFooter from '../components/The Footer.vue'
export default {
  components:{
    TheFooter
  },
  data() {
    return {
      isHover:false,
    }
  },
  methods: {
    decreaseHeight(){
      this.isHover = true
      console.log('isHover= ',this.isHover)
    },
    increaseHeight(){
      this.isHover = false
      console.log('isHover= ',this.isHover)
    }
  },
}
</script>
<style scoped>
nav {
  min-width: 100%;
  max-width: 100%;
  margin: 0%;
  padding: 0%;
  border: none;
  z-index: 1;
}
nav .navBakgound {
  min-width: 100%;
  max-width: 100%;
  min-height: 4.5rem;
  padding: 0%;
  border-bottom: 2px solid white;
  border: none;
}
.naveContainer {
  width: 100%;
  position: absolute;
  top: 20%;
  color: #fff;
}

.logo {
  min-width: 2rem;
  max-width: 2rem;
  height: auto;
}
.logoMarker {
  min-width: 8rem;
  max-width: 8rem;
  max-height: 1.5rem;
}
.profileBtn {
  background-color: #1d213a;
  box-shadow: none !important;
}
.langBtn {
  background: none;
  box-shadow: none !important;
}
.smallNav {
  background-color: #002f5d !important;
  min-width: 100%;
  max-width: 100%;
  min-height: 4.5rem;
  max-height: 4.5rem;
  margin: 0%;
}
.backgrounImg {
  min-width: 100%;
  max-width: 100%;
}
.fromGoogleBtn {
  background-color: #e7453a;
}
.bodyContainer{
  width: 100%;
  position: absolute;
  top: 18%;
  left: 0%;
  right: 0%;
}
.textContainer{
  width: 50%;
}
.leftImgContainer{
  position: relative;
}
.leftImg {
  width: 53%;
  margin-top: 11%;
  position: absolute;
  right: 37%;
  border-radius: 1.5rem;
  transition: all 0.6s;
}
.leftImgContainer:hover .leftImg {
  /* min-height: 33rem; */
  border-radius: 2rem;
  margin-top: 0%;
  z-index: 1;
}
.rightImageContainer {
 position: relative;
}
.rightImg {
  width: 53%;
  position: absolute;
  top: 0%;
  right: 12%;
  border-radius: 1.5rem;
  transition: all 1s ease-out;
}
.onHover img{
  max-height: 30rem;
  border-radius: 1.5rem;
  margin-top: 18%;
  position: absolute;  
  right: 9%;
  transition: all 1s ease-out;
}
.leftBtn,.rightBtn{
  display: none;
  margin-top: 30%;
}
.leftImgContainer:hover .leftBtn{
  display: inline;
  position: absolute;  
  left: 25%;
  text-decoration: none;
  color: #fff;
  z-index: 10;
}
.rightImageContainer:hover .rightBtn{
   display: inline;
  position: absolute;
  top: 60%;
  right: 25%;
  text-decoration: none;
  color: #fff;
  z-index: 10;
}
/* fore small device */
.bgForSmallDevice{
  width:100%;
  height: 22em;
  background-color: #e7453a;
}
.homeBgText{
  background-color: #002f5d;
  margin-top: 20em;
}
/*  */
.recentRoleModels{
  background-color: #0f0e1c;
}
.issue{
  color: #f69f83;
}
.review{
  color: #e7453a;
}
.recentBlogs{
  background-color: #0f0e1c;
}
/* .slightDark{
   background-color: #1d213a;
} */
.blogSection{
  background-color: #0f0e1c;
  max-width: 100%;
}
.subscription{
  /* max-width: 100%; */
  background-color: #0d0d0d;
}
.subscribtionInput{
  background-color:#1d213a;
  border-radius: 1rem;
}
form input{
  width: 100%;
  background-color:#1d213a;
  border-left: none;
  border-top: none;
  border-right: none;
  color: #fff;
  border-radius: 0%!important;
}

form input:focus{
  background-color:#1d213a;
  border-left: none;
  border-top: none;
  border-right: none;
  box-shadow: none!important;
}
.sbscribeBtn{
  width: 10rem;
  background-color: #e7453a;
}
.findMentor{
  background-color: #0f0e1c;
}
.findMentorBox{
  background-color: #002f5d;
  border-radius: 1rem;
}
.findMentorBtn{
  background-color: #f69f83;
}
</style>