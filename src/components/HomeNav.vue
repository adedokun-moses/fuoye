<template>
    <nav>
        <div class="top_nav">
            <ul>
                <li><router-link to="/counselling">Counselling</router-link></li>
            </ul>
        </div>

        
        <div class="top_header">
            <div>
            <router-link to="/"><img src="../assets/school.jpg" alt="School Image"></router-link> 
            </div>
            <div>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/admission">Admission</router-link></li>
                    <li><router-link to="/faculty">Faculty</router-link></li>
                    <li><router-link to="/counselling">Counselling</router-link></li>
                    <li><router-link to="/about">About Us</router-link></li>
                    <li><router-link to="/history">History</router-link></li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<style scoped>
nav {
    height: 150px;
    width: 100%;
    overflow: hidden;
    background: #4F6802;
    position: fixed;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.top_nav{
    height: 50px;
}
.top_nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.top_nav li{
    margin: 10px;
    padding: 5px;
}
.top_header {
    height: 100px;
    overflow: hidden;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.top_header img {
    width: 70%;
}

.top_header ul {
    list-style: none;
    display: flex;
    align-items: center;
}

.top_header li {
    margin: 0px 15px;
}
.top_header li a, .top_nav li a{
    text-decoration: none;
    color: #4F6802;
}
 .top_nav li a{
    text-decoration: none;
    color: wheat;
}
</style>