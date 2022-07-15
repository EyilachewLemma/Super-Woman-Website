<template>
  <div
    class="modal fade"
    :id="id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="modalBody" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],

  methods: {
  }
};
</script>
<style scoped>
.modal-body{
  background-color: #1d213a !important;
}
.btn-save {
  background-color: #eb9713;
  border-radius: 0;
}
.btn-save:hover {
  background-color: #f4480a;
}
.btn-cancel {
  border-radius: 0;
}
</style>




