<template>
    <nav>
        <img src="../assets/NavigationImage.png" alt="" class="img-fluid">
        <div class="naveContainer d-flex align-item-center justify-content-between mx-5">
            <div>
                <router-link to="#" class="d-flex">
                <img src="../assets/logo.png" alt="logo" class="img-fluid logo me-2">
                <img src="../assets/brand.png" alt="logo marker" class="img-fluid logoMarker">
            </router-link>
            </div>
            <div class="d-flex">
                <router-link to="#" class="text-white text-decoration-none me-3">Role Models</router-link>
                <router-link to="#" class="text-white text-decoration-none">Blog</router-link>
            </div>
            <div>ggggggggggggggg</div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav{
        min-width: 100vw;
        max-width: 100vw;
        margin: 0%;
        padding: 0%;
        position: relative;
    }
    nav img{
        min-width: 100vw;
        max-width: 100vw;
         padding: 0%;
    }
    .naveContainer{
        width: 100%;
        position: absolute;
        top: 20%;
        color: #fff;
    }
    
    .logo{
         min-width: 2rem;
        max-width: 2rem;
        height: auto;
        /* max-height: 3rem; */
    }
    .logoMarker{
        min-width: 10rem;
        max-width: 10rem;
        height: 100%;
    }
</style>