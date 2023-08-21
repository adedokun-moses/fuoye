<template>
    <header>
        <homepagenav />
    </header>
    <section class="first_section">
        <div class="about_tab">
            <p>Home/Page</p>
            <h1>Faculties</h1>
        </div>

        <article>

            <div class="into_tab mt-5">
                <div class="info_tab_des mt-5">
                    <h5>Faculty of Science</h5>
                    <p>About Faculty of Science</p>
                    <h4>
                        <p>The Faculty of Science which was one of the four foundation Faculties at the inception of the
                            University has over the years made it a deliberate policy to attain and maintain very high
                            academic standards. The Faculty sustains a mission to position itself as one which is reckoned
                            with nationally and globally. This we strive to achieve by preserving high quality standards in
                            terms of innovation, research and development.
                        </p><br>
                        <p>The Faculty incorporates 2 basic aspects of Science viz; the Physical and Biological Sciences.
                            The Physical Sciences comprise of the Departments of Computer Science; Geology; Geophysics;
                            Industrial Chemistry; Mathematics and Physics while the Biological Sciences are made up of the
                            Departments of Animal and Environmental Biology, Biochemistry, Microbiology and Plant Science &
                            Biotechnology. </p> <br>
                        <p>The Faculty organizes international conferences, workshops and symposia, every year to showcase
                            faculty research and to embrace current studies of local and international colleagues.
                            Meanwhile, the maiden edition of the Fuoye Journal of Pure and Applied Sciences (FJPAS), a
                            journal of the Faculty of Science has been published. </p> <br>
                    </h4>
                </div>
            </div>

            <div class="into_tab mt-5">
                <div class="info_tab_des mt-5">
                    <h5>Faculty of Education</h5>
                    <p>About Faculty of Eduation</p>
                    <h4>
                        <p>Faculty of Education was created following the University’s Senate decision on approved Faculties
                            and Departments beginning from the 2016/2017 academic season. This followed the National
                            Universities Commission (NUC) approval of 14th November, 2016. After the approval, the Vice
                            Chancellor, Professor Kayode SOREMEKUN gave a directive for the immediate advertisement for
                            student’s admission into the approved academic programmes of the faculty.</p><br>
                        <p>As at today, there are fourteen (14) academic programmes in the Faculty such as: </p> <br>
                        <p>1. Ed Adult Education <br>
                            2. Sc (Ed) Agricultural Education <br>
                            3. Sc (Ed) Business Education <br>
                            4. Sc (Ed) Biology Education <br>
                            5. Sc (Ed) Chemistry Education <br>
                            6. Sc (Ed) Education Economics <br>
                            7. Sc (Ed) Education Physics <br>
                            8. Ed Educational Management <br>
                            9. A (Ed) English Language Education <br>
                            10. Ed Guidance and Counselling <br>
                            11. Ed Health Education <br>
                            12. Ed Human Kinetics <br>
                            13. BLIS Library and Information Science <br>
                            14. Mathematics Education </p> <br>
                    </h4>
                </div>
            </div>

            <div class="into_tab mt-5">
                <div class="info_tab_des mt-5">
                    <h5>Faculty of Engineering</h5>
                    <p>About Faculty of Engineering</p>
                    <h4>
                        <p>We welcome you to the Faculty of Engineering. The Faculty was one of the four Foundation
                            Faculties at the inception of the Federal University Oye Ekiti. The Faculty made it a deliberate
                            policy to attain and maintain a very high academic standard. It aims to position itself as a
                            global and a national Faculty by maintaining high quality standard in terms of innovation and
                            entrepreneurial education.</p><br>
                        <p>The Faculty comprises of seven Departments that are invariable relevant to nation building and
                            constitute a major part of the science and technology world. Presently the departments in the
                            faculty which offer 5-year B.Eng. degree programmes are:</p> <br>
                        <p>1. Department of Agricultural and Bio-resources Engineering <br>
                            2. Department of Civil Engineering <br>
                            3. Department of Computer Engineering <br>
                            4. Department of Electrical and Electronic Engineering <br>
                            5. Department of Materials and metallurgical Engineering <br>
                            6. Department of Mechanical Engineering
                            <br>
                            7. Department of Mechatronic Engineering <br>
                        </p>
                    </h4>
                </div>
            </div>
            <div class="into_tab mt-5">
                <div class="info_tab_des mt-5">
                    <h5>Faculty of Social Sciences</h5>
                    <p>About Faculty of Social Sciences</p>
                    <h4>
                        <p>The Faculty of Social Sciences was carved out of the former faculty of humanities in 2015.
                            Presently, teaching and research at the undergraduate level in the faculty of social sciences
                            focus on Demography and Social Statistics, Economics, Criminology and Security Studies, Mass
                            Communication, Peace and Conflict Studies, Psychology, Political Science and Sociology. The
                            faculty currently runs post graduate programmes at masters and doctoral levels in the
                            departments of Demography and Social Statistics, Economics, Psychology and Sociology.</p><br>
                        <p>The aim of the faculty is to compete with its peers across the globe and carve a niche for itself
                            through the provision of excellent teaching and training that facilitate critical thinking,
                            entrepreneurial and employability skills; it also aims to contribute to knowledge in basic and
                            applied social sciences that will lead to the socio-economic development at various levels of
                            the society; the faculty also strives to equip the youths with the right knowledge and skills
                            aimed at advancing our increasingly complex society.</p> <br>

                    </h4>
                </div>
            </div>

        </article>



    </section>

    <footer>
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
    padding-bottom: 50px;
}

.first_section {
    background: whitesmoke;
    padding: 0px 0px 100px 0px;
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

.info_tab_des h5 {
    padding-top: 30px;
    font-size: 35px;
    font-weight: bolder !important;

}

.info_tab_des h4 {
    text-align: left;
    margin: 10px;
    font-size: 17px;
    padding: 20px;
    word-spacing: 5px;
    line-height: 20px;
}


</style>