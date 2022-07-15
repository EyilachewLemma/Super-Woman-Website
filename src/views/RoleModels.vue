<template>
      <div class="recentRoleModels pb-5">
    <div class="text-center text-white py-5">
        ALL PUBLISHED ROLE MODELS
    </div>
    <div class="row mx-2 mx-lg-3">
      <div class="col-6 col-lg-4" v-for="n in 9" :key="n">
      <img src="../assets/sayat6.jpg" alt="role model image" class="img-fluid rounded w-100">
      <div class="d-flex justify-content-between mt-3">
        <div class="issue">ISSUE 2022</div>
        <div class="d-flex">
          <p @click="likeRoleModel()" class="text-white me-3">1.2k <span class="review fs-5"><i class="fas fa-thumbs-up"></i></span></p>
          <p class="text-white">345 <span class="review fs-5"><i class="fas fa-comment-dots"></i></span></p>
        </div>
      </div>
      <div class="mt-2 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui exercitationem odit explicabo et eos, ab dolores similique possimus asperiores dolorem labore rem ipsum at ad veniam natus distinctio culpa quas.
        </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
      likeRoleModel(){}
    },
}
</script>
<style scoped>
.recentRoleModels{
  background-color: #0f0e1c;
}
.issue{
  color: #f69f83;
}
</style>