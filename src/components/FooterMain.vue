<template>
    <footer>
        <div class="main_footer">

            <div class="mt-5 address_det">
                <div class="mt-5 font_det">
                    <ul>
                        <li><i class=" far fa-clock"></i></li>
                        <li><i class=" far fa-clock"></i></li>
                        <li><i class="fas fa-mobile-alt"></i></li>
                        <li><i class="fa fa-envelope"></i></li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li><img src="../assets/mage.webp" alt="school logo" style="width: 70%"></li>
                    <li>Federal University Oye-Ekiti,<br> Oye-Are Road, Oye-Ekiti,<br> Ekiti State, Nigeria.</li>
                    <li>8am-4pm, Monday-Friday</li>
                    <li>+2348165396888</li>
                    <li>
                        info@fuoye.edu.ng,<br> support@fuoye.edu.ng
                    </li>

                </ul>
                </div>
               
            </div>
            <div class="mt-5 addmission_det">
                <ul>

                    <li><span style="color:rgb(230, 201, 148)">Admission</span></li>
                    <li> <router-link to="/admission">Undergraduate</router-link></li>
                    <li><router-link to="/directentry">Direct Entry</router-link></li>
                    <li><router-link to="/directentry">Post Graduate</router-link></li>
                    <li><router-link to="/JupebProg">Jupeb Programme</router-link></li>
                    <li><router-link to="/PreDegree">Pre Degree</router-link></li>
                   
                </ul>
            </div>
            <div class="mt-5 addmission_det">
                <ul>
                    <li><span style="color:rgb(230, 201, 148)">Faculty</span></li>
                    <li> Predegree Academic Fees</li>
                    <li> JUPEB Academic Calender</li>
                    <li>Undergraduate Admission</li>
                    <li>Undergraduate Academic Calendar</li>
                    <li> Undergraduate Academic Fees</li>
                    <li> Undergraduate Academic Prospectus</li>
                </ul>
            </div>

        </div>
        <div class="bottom_footer">
            <h1>Copyright © of Federal University Oye-Ekiti 2021. All Rights Reserved!</h1>
        </div>

    </footer>
</template>
<style scoped>
footer {
    background: #181818;
    margin: 0px;
    padding: 0px;
}

.main_footer {
    width: 90%;
    margin: auto;
    display: flex;
    color: white;
}

.main_footer> div{
    width: 33%;
}
.main_footer ul {
    list-style: none;
}

.main_footer li {
    text-align: left;
}
.address_det{
    display: flex;
}

.address_det li {
    margin: 30px 0px;
}

.font_det ul {
    margin-top: 108px;
}

.font_det li {
    margin: 30px 0px;
}
.addmission_det ul{
    margin-top: 105px;
}
.addmission_det li{
    margin: 20px;
}
.addmission_det li a{
    text-decoration: none;
    color: white;
}
.bottom_footer{
    margin:  auto;
    margin-top: 100px;
    width: 100%;
    background: #000;
    padding: 20px;
}
.bottom_footer h1{
    width: 90%;
    margin: auto;
    font-size: 20px;
    text-align: left;
    color: white;
}
</style>