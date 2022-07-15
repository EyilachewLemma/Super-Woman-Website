<template>
    <base-modal id="infoModal">
    <template #modalBody>
   <div class="px-2 py-3 px-lg-5">
         <div class="d-flex">
            <button @click="infoModal.hide()" class="text-white backBtn">X</button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
        </div>
      <div class="mb-3" :class="{ warning: v$.userInfo.first_name.$error }">
        <label for="fname" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="fname"
          v-model="userInfo.first_name"
        />
        <span class="error-msg mt-1">{{
          v$.userInfo.first_name.$errors[0]?.$message
        }}</span>
      </div>
      <div class="mb-3" :class="{ warning: v$.userInfo.last_name.$error }">
        <label for="lname" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lname"
          v-model="userInfo.last_name"
        />
        <span class="error-msg mt-1">{{
          v$.userInfo.last_name.$errors[0]?.$message
        }}</span>
      </div>
      <div class="mb-3" :class="{ warning: v$.userInfo.birth_date.$error }">
        <label for="dob" class="form-label">Birth Date</label>
        <input
          type="date"
          class="form-control"
          id="dob"
          v-model="userInfo.birth_date"
        />
        <span class="error-msg mt-1">{{
          v$.userInfo.birth_date.$errors[0]?.$message
        }}</span>
      </div>
      <div class="mb-3" :class="{ warning: v$.userInfo.education_level.$error }">
        <label for="educationLevel" class="form-label">Education Level</label>
        <input
          type="text"
          class="form-control"
          id="educationLevel"
          v-model="userInfo.education_level"
        />
        <span class="error-msg mt-1">{{
          v$.userInfo.education_level.$errors[0]?.$message
        }}</span>
      </div>
      <div class="mb-3" :class="{ warning: v$.userInfo.phone_no.$error }">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model="userInfo.phone_no"
        />
        <span class="error-msg mt-1">{{
          v$.userInfo.phone_no.$errors[0]?.$message
        }}</span>
      </div>
      <button @click="nextToConfirmation()" class="w-100 confirmBtn">Next</button>
   </div>
    </template>
  </base-modal>
  <!-- phone number confirmation modal-->
   <base-modal id="confirmModal">
    <template #modalBody>
       <div class="px-2 py-3 px-lg-4">
         <div class="d-flex">
            <button @click="backToInfoModal()" class="text-white backBtn">X</button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
        </div>
         <div class="text-center text-white mt-3"> Enter The code we sent to +251949266629 via SMS</div>
      <div class="d-flex me-3">
        <input v-for="n in 6" :key="n"
          type="text"
          class="form-control"
          :id="'code'+n"
          v-model="verificationCodes"
        />
        
      </div>
      <div class="d-flex">
        <p class="text-white me-2">Don't get a code?</p>
        <button @click="resendCode()" class="resendCode">Resend Code</button>
      </div>
      <button @click="confirmVerification()" class="w-100 confirmBtn">Confirm</button>
       </div>
    </template>
  </base-modal>
  <!-- interest selection modal -->
   <base-modal id="fieldModal">
    <template #modalBody>
       <div class="px-2 py-3 px-lg-4">
         <div class="d-flex">
            <button @click="backToInfoModal()" class="text-white backBtn">X</button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
        </div>
         <p class="text-center text-white mt-3">
            Choose your interests and get the best Mentore recommendation.
         </p>
           <p class="text-center text-white">Don't Worry you can change it later</p> 
      
      <div class="row">
        <div class="col-6 col-md-4 me-2 mt-3">
          <p v-for="(n,index) in 20" :key="n" @click="selectInterest(n)" class="border round-pill" :id="'interest'+index">Software Engneering</p>
        </div>
      </div>
      <button @click="finish()" class="w-100 confirmBtn">Finish</button>
       </div>
    </template>
  </base-modal>
</template>
<script>
import useValidate from "@vuelidate/core";
import {required,helpers,minLength,maxLength} from "@vuelidate/validators";
import { Modal } from "bootstrap";
export default {
  props:['isModal'],
data() {
    return {
        v$:useValidate(),
        infoModal:null,
        confirmModal:null,
        userInfo:{},
        verificationCodes:[],
        interests:[],
    }
},
validations() {
    return {
      userInfo: {
        first_name: {
          required: helpers.withMessage(
            "first name can not be empty",
            required
          ),
        },
        last_name: {
          required: helpers.withMessage("last name can not be empty", required),
        },
        phone_no: {
          required: helpers.withMessage(
            "phone number can not be empty",
            required
          ),
          min: helpers.withMessage(
            "invalid phone number",
            minLength(9)
          ),
          max: helpers.withMessage(
            "invalid phone number",
            maxLength(10)
          ),
        },
        birth_date:{required:helpers.withMessage('birth date is required',required)},
        education_lable:{required:helpers.withMessage('your education level is required',required)}
        
      },
    };
  },
  mounted() {
    this.infoModal = new Modal(document.getElementById("infoModal"));
    this.confirmModal = new Modal(document.getElementById("confirmModal"));
    
  },
  created(){
    //  this.infoModal = new Modal(document.getElementById("infoModal"));
  
  },
  computed:{
    fields(){
      return this.$store.getters.fields
    }
  },
watch:{
  isModal(value){
    if(value){
    this.infoModal.show()
    }
  }
},
  methods: {
    backToInfoModal(){},
    nextToConfirmation(){},
    resendCode(){},
    confirmVerification(){},    
    finish(){},
   selectInterest(interestId,elementId){
   var index =  this.interests.findIndex(interest=>{
      return interest === interestId
    
    })
    if(index === -1){
      document.getElementById(elementId).style.backgroundColor = '#002f5d'
      this.interests.push(interestId)
    }
    else{
      document.getElementById(elementId).style.backgroundColor = '#1d213a'
      this.interests.splice(index,1)
    }
   }
  }
};
</script>
<style scoped>
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
.backBtn{
    background: none;
    border: none;
    box-shadow: none!important;
}
.resendCode{
    color: #f4480a;
    background: none;
    border: none;
}
.confirmBtn{
    background-color: #f4480a;
    color: #fff;
    border-radius: 10rem;
}
</style>




