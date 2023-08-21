<template>
  <header>
    <homepagenav />
  </header>
  <section>
    <div class="academics_tab">
      <h1>Academics</h1>
      <p>Innovation and Character for National transformation with academic prowess!</p>

      <div class="accademics_flex mt-5">
        <div>
          <img src="../assets/utme.webp">
          <p>UTME SCREENING</p>
          <router-link to="#">
            More on UTME Screening >
          </router-link>
        </div>
        <div>
          <img src="../assets/post.webp">
          <p>Post <br> Graduate</p>
          <router-link to="#">
            More on Post Graduate >
          </router-link>
        </div>
        <div>
          <img src="../assets/jupeb.webp">
          <p>JUPEB <br>Programme</p>
          <router-link to="#">
            More on JUPEB Programme >
          </router-link>
        </div>
        <div>
          <img src="../assets/part.jpg">
          <p>Part-Time</p>
          <router-link to="#">
            More on <br>Part Time >
          </router-link>
        </div>
        <div>
          <img src="../assets/diploma.webp">
          <p>DIPLOMA</p>
          <router-link to="#">
            More on <br> Diploma >
          </router-link>
        </div>
        <div>
          <img src="../assets/pre-d.webp">
          <p>Pre-Degree</p>
          <router-link to="#">
            More on <br> Pre-Degree >
          </router-link>
        </div>



      </div>
      <router-link to="/about">
        <button><i class="fa fa-plus-circle " style="padding-right: 10px"></i>More About Academics</button>
      </router-link>
    
    </div>
  </section>
  <article>
    <div class="admission_tab">
      <h1>Admission</h1>
      <p>Equipping students with the ability they need for national transformation</p>

      <div class="admission_flex mt-5">
        <div>
          <img src="../assets/students.webp" style="width: 100%">
          <p class="mt-2"><b>Students From Across The Nation</b></p>
          <p>FUOYE students come from across the Nigeria and throughout the world, representing diverse perspectives,
            experiences, backgrounds and cultures. </p>
          
        </div>
        <!--  <div>
          <img src="../assets/post.webp">
          <p>Post <br> Graduate</p>
          <router-link to="#">
            More on Post Graduate >
          </router-link>
        </div> -->

      </div>
      <router-link to="/faculty">
      <button>More About Admission <span style="padding-right: 10px">></span></button></router-link>
    </div>
  </article>
  <article style="background: whitesmoke !important;">
    <div class="admission_tab">
      <h1>About FUOYE</h1>
      <p>Innovation and Character for National transformation with academic prowess!</p>

      <div class="admission_flex mt-5">
        <div>
          <p>Opened In</p>
          <h2>2012</h2>
        </div>
        <div>
          <p>Students</p>
          <h2>20,000+</h2>
        </div>
        <div>
          <p>Faculties</p>
          <h2>11</h2>
        </div>

      </div>
      <router-link to="/history">
      <button>More About FUOYE </button></router-link>
    </div>
  </article>
  <footer class="mt-5">
    <footer_page/>
  </footer>
</template>

<script setup>
import homepagenav from '../components/HomeNav.vue';
import footer_page from '../components/FooterMain.vue'

</script>

<style scoped>
section {
  background: whitesmoke;
  padding-bottom: 20px;

}

.academics_tab {
  padding: 180px 0px 0px 20px;
  width: 85%;
  margin: auto;
}

.admission_tab {
  padding: 60px 0px 0px 20px;
  width: 85%;
  margin: auto;
}

.academics_tab h1,
.admission_tab h1 {
  font-weight: bold;
  font-size: 50px;
  color: #4F6802;
}

.academics_tab p,
.admission_tab p {
  font-size: 25px;
}

.accademics_flex,
.admission_flex {
  display: flex;
  justify-content: space-between;
}

.accademics_flex>div {
  height: 280px;
  width: 25%;
  margin: 0px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.accademics_flex img {
  width: 90%;
  margin: 10px 0px;
}

.accademics_flex p {
  font-size: 20px;
  font-weight: bold;
}

.accademics_info {
  height: 200px;
  margin: 0px 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.accademics_flex a {
  text-decoration: none;
  font-weight: bold;
  color: #4F6802;
}

.academics_tab button, .admission_tab button {
  border-radius: 25px;
  padding: 10px 90px;
  margin: 50px;
  color: #4F6802;
  font-weight: bold;
  border: 1px solid #4F6802;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  /*   -webkit-transition: margin 0.3s ease-out;
  -moz-transition: margin 0.3s ease-out;
  -o-transition: margin 0.3s ease-out; */
}

.academics_tab button:hover, .admission_tab button:hover {
  background: #4F6802;
  color: white;
  border: 2px solid #fff;
  box-shadow: 0px 4px 4px #d2cece(201, 93, 15, 0.25);
  cursor: pointer;
  transform: scale(1.0);

}

article {
  background: #fff;
}
.admission_flex h2{
  font-weight: bolder;
  font-size: 70px;
  margin: 0px !important;
}

</style>