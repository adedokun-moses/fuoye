<template>
  <header>
    <homepagenav />
  </header>
  <section>
    <div class="academics_tab">
      <h1>Admission</h1>
      <p>Are you a student in another university and interested in joining a fast growing university? FUOYE is the place
        to be,</p>

      <section id="requirement" >
        <h1 class="text-center">Undergraduate Requirement </h1>
        <p class="text-center">FEDERAL UNIVERSITY OYE-EKITI, EKITI STATE</p>
        <table class="table mt-5 table-bordered ">
          <tbody>
            <tr>
              <th>ELIGIBILITY</th>
              <td>1. Candidates who obtained UTME Score of 180 and above. <br>
                2. All candidates must possess a minimum of five ‘O’ Level credits (including English Language and
                Mathematics) obtained at not more than two sittings in subjects relevant to their proposed courses. [check
                screening portal for subject requirements].</td>
            </tr>
            <tr>
              <th>PAYMENT INSTRUCTIONs</th>
              <td>Each candidate will be required to pay a screening fee of Two Thousand Naira (N 2,000. 00) only. <br>
                <b>Payment should be made strictly online on the University Screening Portal using any Bank Debit
                  Card.</b>
              </td>
            </tr>

          </tbody>
        </table>
        <p  class="text-center mt-5">REGISTRATION/PAYMENT PROCEDURE</p>
        <table class="table mt-5 table-bordered ">
          <tbody>
            <tr>
              <th>Step 1:</th>
              <td>Log on to <a href="http://ecampus.fuoye.edu.ng/putme">http://ecampus.fuoye.edu.ng/putme</a></td>
            </tr>
            <tr>
              <th>Step 2:</th>
              <td>On Admission Menu displayed on the right-hand side, click “Registration Steps” and read instructions
                carefully></td>
            </tr>
            <tr>
              <th>Step 3:</th>
              <td>Kindly login with your JAMB Registration Number e.g 96510415CA [Note Password is not required]</td>
            </tr>
            <tr>
              <th>Step 4:</th>
              <td>You will be required to complete your profile on the portal <br>
                Note: Ensure to use a valid email address and phone number by which you can be contacted if required.
                Always check your mail and the website for updates and information
              </td>
            </tr>
            <tr>
              <th>Step 5:</th>
              <td>After updating your information, activation link will be sent to your email box provided. Click on the
                activation link to verify your email account and registration details.
              </td>
            </tr>
            <tr>
              <th>Step 6:</th>
              <td>Login again after verification and you will be prompted to make payment. Follow the payment steps as
                provided on your screen
              </td>
            </tr>
            <tr>
              <th>Step 7:</th>
              <td>Complete your registration by clicking on the <b> “Upload O’Level Results”</b>
              </td>
            </tr>
            <tr>
              <th>Step 8:</th>
              <td>Print out your Registration Slip containing summary of your registration. <b>For assistance send email to
                support@fuoye.edu.ng</b>
              </td>
            </tr>

          </tbody>
        </table>

      </section>
    </div>
  </section>

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
      <button>More About FUOYE </button>
    </div>
  </article>
  <footer class="mt-5">
    <footer_page />
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

.admission_det ul {
  list-style: none;
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 50px;
}

.admission_det li a {
  text-decoration: none;
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
}

article {
  background: #fff;
}

.admission_flex h2 {
  font-weight: bolder;
  font-size: 70px;
  margin: 0px !important;

}

#requirement {
  text-align: left;
}

.academics_tab button,
.admission_tab button {
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

.academics_tab button:hover,
.admission_tab button:hover {
  background: #4F6802;
  color: white;
  border: 2px solid #fff;
  box-shadow: 0px 4px 4px #d2cece(201, 93, 15, 0.25);
  cursor: pointer;
  transform: scale(1.0);

}
</style>