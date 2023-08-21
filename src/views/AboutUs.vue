<template>
  <div class="container-fluid p-0 m-0">
    <header>
      <homepagenav />
    </header>
    <section class="first_section">
      <div class="about_tab">
        <p>Home/Page</p>
        <h1>About</h1>
      </div>

      <article>
        <div class="motto_tab">
          <h1>Motto</h1>
          <p>Innovation and Character for National transformation with academic prowess!</p>
        </div>
        <div class="into_tab mt-5">
          <h1>Brief Introduction</h1>
          <div class="info_tab_des mt-5">
            <h4>Federal University Oye, Ekiti, located within Oye community, was one of the nine Federal Universities
              established by the Federal Government of Nigeria, pursuant to an executive order made by the President of
              the Federal Republic of Nigeria, His Excellency, Dr. Goodluck Ebele Jonathan, GCFR. Federal University
              Oye-Ekiti, whose pioneer Vice Chancellor, is Professor Chinedu Ostadinma Nebo, OON, has two campuses at
              Oye-Ekiti and Ikole-Ekiti with 8 Faculties and 51 Departments.</h4>
          </div>
        </div>
        <div class="into_tab mt-5">
          <h1>Vision</h1>
          <div class="info_tab_des mt-5">
            <h4>The Federal University, Oye-Ekiti aspires to become an institution of first choice recognized for
              providing critical opportunities for student success; acknowledged as a primary and engaged regional and
              global resource for entrepreneurial educational and best practices in mining and farming technology; and
              valued as a university where there are faculty, students, and professional staff who are active in
              integrating cutting-edge technology in multidisciplinary and disciplinary research.</h4>
          </div>
        </div>
        <div class="into_tab mt-5">
          <h1>Mission</h1>
          <div class="info_tab_des mt-5">
            <h4>1. To advance the community of learning by engaging in scientific research, humanistic scholarship,
              multidisciplinary research entrepreneurship and technological integration. <br>2.
              To provide a robust and high quality educational experience for students in a diverse learning environment
              while promoting the values and indigenous learning that is responsive to the needs of our society. <br>
              3. To create an institution that values and prepares students to lead lives of personal integrity and civic
              responsibility in a global society.<br>
              4. To prepare the next generations of skilled and ethical professionals by providing robust curricula across
              and within disciplines that prepares graduates to be research minded and able to compete effectively in
              diverse world market. <br>
              5. To create learning opportunity for faculty to meet their personal and institutional growth needs, and
              To advance best practices in farming and mining, foster economic development activities that are innovative,
              research-driven, and will result in a better quality of life for Nigerians.</h4>
          </div>
        </div>
        <div class="into_tab mt-5">
          <h1>History of FUOYE</h1>
          <div class="info_tab_des mt-5">
            <h4>The pioneer Vice-Chancellor, Federal University, Oye-Ekiti, Professor Chinedu Nebo, was recently appointed
              Minister of Power by the President of the Federal Republic of Nigeria, His Excellency, Dr. Goodluck Ebele
              Jonathan, GCFR. Consequently, Professor Isaac Uzoma Asuzu was appointed Vice Chancellor of FUOYE in his
              place. <br>

              The new Vice Chancellor arrived FUOYE on Wednesday, February 27th 2013. As a very courteous citizen, and
              with a burning zeal to have a first-hand assessment of the task ahead, embarked on…</h4>
          </div>
          <router-link to="/history"><button class="history_btn">View Full History</button></router-link>
       
        </div>
      </article>

      <article>
        <div class="stats">
          <div class="stats_label">
            <div>
              <p>Opened In</p>
              <h2>2012</h2>
            </div>
            <div>
              <p>Students</p>
              <h2>20,000+</h2>
            </div>
          </div>
          <div class="stats_label">
            <div>
              <p>Students</p>
              <h2>20,000+</h2>
            </div>
            <div>
              <p>Location</p>
              <h2>Ekiti, Nigeria</h2>
            </div>
          </div>
        </div>
      </article>

      <footer class="mt-5">
        <footer_page />
      </footer>
    </section>
  </div>
</template>
<script setup>
import homepagenav from '../components/HomeNav.vue';
import footer_page from '../components/FooterMain.vue'

</script>
<style scoped>
header {
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.first_section {
  background: whitesmoke;
  padding: 20px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.about_tab {
  padding-top: 180px;
  width: 90%;
  margin: auto;
}

.about_tab p {
  text-align: left;
}

.about_tab h1 {
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: #4F6802;
}

.motto_tab {
  width: 70%;
  margin: auto;
  padding: 30px;
  border-bottom: 1px solid grey;
}

.motto_tab h1,
.into_tab h1 {
  color: grey;
  font-weight: bold;
}

.motto_tab p {
  font-size: 30px;
  word-spacing: 13px;
  padding: 10px;
}

.info_tab_des {
  border-radius: 10px;
  width: 70%;
  margin: auto;
  background: white;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  height: auto;
}

.info_tab_des h4 {
  text-align: left;
  margin: 10px;
  font-size: 17px;
  padding: 20px;
  word-spacing: 5px;
  line-height: 30px;
}

.admission {
  background: white;
}

.admission_flex {
  background: whitesmoke;
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

.stats {
  margin-top: 100px;
  background: white !important;
  height: 400px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.stats_label {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding-top: 80px;
}

.stats_label h2 {
  font-weight: bolder;
  font-size: 40px;
}
.history_btn {
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

.history_btn:hover {
  background: #4F6802;
  color: white;
  border: 2px solid #fff;
  box-shadow: 0px 4px 4px #d2cece(201, 93, 15, 0.25);
  cursor: pointer;
  transform: scale(1.0);

}


</style>