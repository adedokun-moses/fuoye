<template>
    <header>
        <homepagenav />
    </header>
    <section class="first_section">
        <div class="about_tab">
            <p>Home/Page</p>
            <h1>Counselling</h1>
        </div>

        <article>

            <div class="into_tab mt-5">
                <img src="../assets/counselling.png" alt="Counselling">
                <div class="info_tab_des mt-5">

                    <h5>Our Objectives</h5>

                    <h4>
                        <p>In line with the vision and mission statement of the University, the Counselling and Human
                            Development Centre (CHDC) was established to achieve the following objectives:
                            <br>
                            1. To Provide quality, integrated, seamless accessible knowledge and skills that would
                            holistically work, counsel and assist undergraduate and graduate students to develop effective
                            and functional development skills with focus on moral, intellectual, emotional, physical social
                            and psychological guidance that are necessary and motivation in their various area of their
                            endeavour. <br>
                            2. To provide to the members of the University community and especially to student career
                            guidance and counselling services that are essential to modern University education. <br>
                            3. To establish skills and opportunities that are needed to develop competencies for future
                            careers and gainful employment for global competitiveness. <br>
                            4. Assisting students to adjust effectively to institutional, environmental, and educational
                            challenges. <br>
                            p>5. Helping students to develop sound character and become successful in life. <br>
                            6. Identifying the innate abilities of students and assisting them to develop their potentials,
                            skills, talents, creative abilities, and capabilities. <br>
                            7. Acquiring the needed skills for academic excellence and healthy living. <br>
                            8. Promoting effective interpersonal relationships among students.
                        </p>
                    </h4>
                </div>
            </div>

            <div class="into_tab mt-5">
                <div class="info_tab_des mt-5">

                    <h5>Our Services</h5>

                    <h4>
                        <p>
                          1.  Providing Counselling services to students, staff and other clients <br>
                          2.    Providing adequate information and training to students and other clients in order to acquire
                        3.   professional skills and competencies in their chosen areas of study (career) through counselling
                          4.      pamphlets, bill boards and fliers. <br>
                          5.      Liaising with Alumni and professional bodies to organize career development activities for
                            students <br>
                          6.      Providing referrals (where necessary) to appropriate bodies for students social, economic,
                            emotional and other problems. <br>
                           7.    Working in conjunction with the Chief Medical Officer of the University in planning and
                            organising activities for students on health related issues. <br>
                           8.    Coping with academic challenges and academic demands, life in the university, and life after
                            graduation. <br>
                           9.    Positive and result-oriented study habits, usage of library services, and acquisition of
                            examination skills. <br>
                           10.   Registration procedures, choice of courses, and requirements for graduation. <br>
                            Spill-over, transfer, change of course, and withdrawal cases. <br>
                            11. Managing fear (phobia), depression, loneliness, stress, feeling of committing suicide, and
                            inadequacies. <br>
                          12.     Helping students to adjust to the University environment. <br>
                           13.   Managing intrapersonal and interpersonal matters such as making friends, conflicts with self,
                            conflict between or among room-mates and friends. <br>
                           14.   Managing cases of addiction to alcohol and drugs. <br>
                           15.   Building of social skills such as assertiveness, modeling, decision-making process, and
                            mentoring. <br>
                         16.       Management of emotional difficulties such as temperament. <br>
                           17.   Fostering discipline among students and ensuring responsible behaviours among them. <br>
                            Overcoming abnormal and undesirable personal habits such as shyness, eating disorders, and
                            extravagant lifestyle. <br>
                          18.     Preparing students for the world of works, especially entrepreneurship for self-employment, and
                            guiding them on job search and job retention strategies. <br>
                            Creating awareness on available postgraduate scholarship awards opportunities within and outside
                            Nigeria. <br>
                          19.     Guiding challenges in the various programmes available in the University. <br>
                            Handling sexual matters such as sexual harassment, rape, incestuous relationship, pre-marital
                            sex, and sexual dysfunctions. <br>
                          20.     Personal hygiene, living a healthy life, and prevention and control of diseases. <br>
                          21.  Handling marriage and family matters such as choice of partners, preparation for marriage,
                            conflicts in courtship, difficulties in marriage, and family conflicts. <br>
                           22.   Handling and managing religious and spiritual matters. <br>
                           23.   Referral to clinics or hospitals for medical assistance. <br>
                           24.   Financial management counselling is offered to promote the effective utilization of financial
                            resources. <br>
                           25.   Organization of workshops, seminars, and conferences that covers substance abuse including drugs
                            and alcoholism, pandemic and epidemic, sexually transmitted infections such as HIV/AIDS, gender
                            roles and equality, sexuality and relationships, teenage pregnancy, planning for the future, and
                            personal/family/community values. <br>
                        </p>
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
}</style>