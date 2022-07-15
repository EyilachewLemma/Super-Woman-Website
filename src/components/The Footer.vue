<template>
    <div class="footerContainer pb-3">
        <p class="thick"></p>
        <div class="d-md-flex justify-content-between align-items-center p-3 px-lg-5">
           <div class="aboutUs">
             <div class="my-3"><router-link to="#" class="text-white">About Us</router-link></div>
               <div class="mb-3"><router-link to="#" class="text-white">Role Models</router-link></div>
                  <div class="mb-3"><router-link to="#" class="text-white">Mentors</router-link></div>
                     <div class="mb-3"><router-link to="#" class="text-white">Blogs</router-link></div>
           </div>
              <div class="contactSection">
             <div class="my-3 text-white">Contacts Us</div>
               <div class="mb-3 text-white">Email Address: superwoman@gmail.com</div>
                  <div class="mb-3 text-white">Phone: 251948266629</div>
           </div>
            <div class="d-flex justify-content-center">
             <div class="me-3"><router-link to="#" class="text-white">facebook</router-link></div>
               <div class="me-3"><router-link to="#" class="text-white">instagram</router-link></div>
                  <div class="me-3"><router-link to="#" class="text-white">twitter</router-link></div>
                     <div class="me-3"><router-link to="#" class="text-white">linkedin</router-link></div>
           </div>
        </div>
        <p class="thin"></p>
        <div class="text-center">
            <p class="text-white small">Designed and Developed by Merahi Technologies </p>
            <p class="text-white small">@2022- Merahi Technologies</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footerContainer{
    background-color: #0f0e1c;
}
p{
    max-width: 100%;
}
.thick{
    padding: 1px;
    background-color: #f69f83;
}
.thin{
     padding: 0.5px;
    background-color: #f69f83;
}
.contactSection,.aboutUs{
    text-align: left;
}
@media(max-width: 768px){
    .aboutUs,.contactSection{
        text-align: center;
    }
}
</style>