<template>
  <nav class="d-none d-md-block border-1">
    <img src="../assets/NavigationImage.png" alt class="navBakgound img-fluid" />
    <div class="naveContainer d-flex align-item-center justify-content-between px-5">
      <div>
        <router-link to="#" class="d-flex">
          <img src="../assets/logo.png" alt="logo" class="img-fluid logo me-2" />
          <img src="../assets/brand.png" alt="logo marker" class="img-fluid logoMarker" />
        </router-link>
      </div>
      <div class="d-flex mt-2">
        <router-link to="#" class="text-white text-decoration-none me-4">Role Models</router-link>
        <router-link to="#" class="text-white text-decoration-none">Blog</router-link>
      </div>
      <div class="d-flex align-items-center">
        <router-link to="#" class="text-white text-decoration-none">Become a Mentor</router-link>

        <div class="dropdown ms-4">
          <button
            class="btn langBtn dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="fs-5 text-white">
              <i class="fas fa-globe"></i>
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <a class="dropdown-item" href="#">English</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">አማርኛ</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Affan Oromo</a>
            </li>
          </ul>
        </div>
        <!-- <div class="dropdown p-0 ms-4">
          <button
            class="btn profileBtn rounded-pill text-white py-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>
              <i class="fas fa-align-left"></i>
            </span>
            <span class="ms-3 fs-5">
              <i class="fas fa-user"></i>
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <router-link to="#" class="text-white">My Account</router-link>
            </li>
            <li>
              <button class="text-white">Logout</button>
            </li>
          </ul>
        </div> -->
        <button @click="gotoLogin()" class="profBtn text-white">Login</button>
        <button @click="gotoSignup()" class="profBtn text-white">SignUp</button>
      </div>
    </div>
  </nav>
  <!-- for only small device -->
  <nav class="smallNav d-md-none">
    <div class="d-flex align-items-center justify-content-between px-3">
      <div class="mt-3">
        <router-link to="#" class="d-flex">
          <img src="../assets/logo.png" alt="logo" class="img-fluid logo me-2" />
          <img src="../assets/brand.png" alt="logo marker" class="img-fluid logoMarker" />
        </router-link>
      </div>
      <div class="dropdown ms-4 mt-2">
        <button
          class="btn langBtn dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="fs-5 text-white">
            <i class="fas fa-globe"></i>
          </span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- sign up code -->
  <div class="signUp">
    <base-modal id="infoModal">
      <template #modalBody>
        <div class="px-2 py-3 px-lg-5">
          <div class="d-flex">
            <button @click="infoModal.hide()" class="text-white backBtn fs-4">
              <i class="fas fa-times"></i>
            </button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
          </div>
          <div class="mb-3" :class="{ warning: v$.userInfo.first_name.$error }">
            <label for="fname" class="form-label text-white">First Name</label>
            <input type="text" class="form-control text-white" id="fname" v-model="userInfo.first_name" />
            <span class="error-msg mt-1">
              {{
              v$.userInfo.first_name.$errors[0]?.$message
              }}
            </span>
          </div>
          <div class="mb-3" :class="{ warning: v$.userInfo.last_name.$error }">
            <label for="lname" class="form-label text-white">Last Name</label>
            <input type="text" class="form-control text-white" id="lname" v-model="userInfo.last_name" />
            <span class="error-msg mt-1">
              {{
              v$.userInfo.last_name.$errors[0]?.$message
              }}
            </span>
          </div>
          <div class="mb-3" :class="{ warning: v$.userInfo.birth_date.$error }">
            <label for="dob" class="form-label text-white">Birth Date</label>
            <input type="date" class="form-control text-white" id="dob" v-model="userInfo.birth_date" />
            <span class="error-msg mt-1">
              {{
              v$.userInfo.birth_date.$errors[0]?.$message
              }}
            </span>
          </div>
          <div class="mb-3" :class="{ warning: v$.userInfo.education_lable.$error }">
            <label for="educationLevel" class="form-label text-white">Education Level</label>
            <select
              class="form-select"
              id="educationLevel"
              aria-label="Default select example"
              v-model="userInfo.education_lable"
            >
              <option selected>Hihschool</option>
              <option value="1">Preparatory</option>
              <option value="2">College</option>
              <option value="3">Degree</option>
            </select>
            <span class="error-msg mt-1">
              {{
              v$.userInfo.education_lable.$errors[0]?.$message
              }}
            </span>
          </div>
          <div class="mb-3" :class="{ warning: v$.userInfo.phone_no.$error }">
            <label for="phone" class="form-label text-white">Phone Number</label>
            <input type="tel" class="form-control" id="phone" v-model="userInfo.phone_no" />
            <span class="error-msg mt-1">
              {{
              v$.userInfo.phone_no.$errors[0]?.$message
              }}
            </span>
          </div>
          <button @click="nextToConfirmation()" class="btn w-100 confirmBtn">Next</button>
        </div>
      </template>
    </base-modal>
    <!-- phone number confirmation modal-->
    <base-modal id="confirmModal">
      <template #modalBody>
        <div class="px-2 py-3 px-lg-4">
          <div class="d-flex">
            <button @click="backToInfoModal()" class="text-white backBtn fs-4"><i class="fas fa-angle-left"></i></button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
          </div>
          <div class="text-center text-white my-3 ">Enter The code we sent to +251949266629 via SMS</div>
          <div class="d-flex me-3">
            <input
              type="text"
              class="form-control me-3"
              id="code1"
              ref="code1"
              v-model="code1"
              @input="setCode($event,'code2')"
            />
             <input
              type="text"
              class="form-control me-3"
              id="code2"
              ref="code2"
              v-model="code2"
              @input="setCode($event,'code3')"
            />
             <input
              type="text"
              class="form-control me-3"
              id="code3"
              ref="code3"
              v-model="code3"
              @input="setCode($event,'code4')"
            />
             <input
              type="text"
              class="form-control me-3"
              id="code4"
              ref="code4"
              v-model="code4"
              @input="setCode($event,'code5')"
            />
             <input
              type="text"
              class="form-control me-3"
              id="code5"
              ref="code5"
              v-model="code5"
              @input="setCode($event,'code6')"
            />
             <input
              type="text"
              class="form-control me-3"
              id="code6"
              ref="code6"
              v-model="code6"
              @input="setCode($event,'codeSix')"
            />
          </div>
          <div class="d-flex align-items-center mt-4">
            <div class="text-white me-2">Don't get a code?</div>
            <button @click="resendCode()" class="resendCode">Resend Code</button>
          </div>
             <div class="d-grid gap-2">
        <button @click="confirmVerification()" class="btn w-100 confirmBtn mt-3 text-white" :disabled="isDisabled">
          <span v-if="isLoading">
            <span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
            <span>Validating</span>
          </span>
          <span v-else>Confirm</span>
        </button>
        <p class="text-danger text-center small">{{ notify }}</p>
      </div>
          <!-- <button @click="confirmVerification()" class="btn w-100 confirmBtn mt-3" :disabled="isDisabled">Confirm</button> -->
        </div>
      </template>
    </base-modal> 
  </div>
     <!-- interest selection modal -->
        <div v-if="isFieldModal" class="fieldSelectionModal">
          <div class="fieldContainer rounded shadow-sm px-2 pt-3 pb-5">
          <div class="d-flex">
            <button @click="isFieldModal = false" class="text-white fw-bold fs-4 backBtn"><i class="fas fa-times"></i></button>
            <div class="text-white fs-5 ms-auto me-auto">Sign Up</div>
          </div>
          <p class="text-center text-white mt-3"
          >Choose your interests and get the best Mentore recommendation.</p>
          <p class="text-center text-white">Don't Worry you can change it later</p>
         <div class="row px-2 px-lg-4">
            <div class="col-sm-6 col-md-3 ms-lg-3 me-3 me-lg-5 mt-3" v-for="(n,index) in 20" :key="index">
              <p @click="selectInterest(n,'interest'+index)" class="border interestselection rounded-pill text-center p-2 text-white" :id="'interest'+index"
              >Software Engineering and computer</p>
            </div>
         </div>
            <div class="d-grid gap-2">
        <button @click="registerUser()" class="btn w-100 confirmBtn text-white" :disabled="isDisabled">
          <span v-if="isLoading">
            <span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
            <span>Saving</span>
          </span>
          <span v-else>Finish</span>
        </button>
        <p class="text-danger text-center small">{{ notify }}</p>
      </div>
        </div>
        </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, helpers, minLength, maxLength } from "@vuelidate/validators";
import { Modal } from "bootstrap";
// import apiClient from "../url/index";
export default {
  components: {},
  data() {
    return {
      v$: useValidate(),
      infoModal: null,
      confirmModal: null,
      userInfo: {},
      interests: [],
      code1:'',
      code2:'',
      code3:'',
      code4:'',
      code5:'',
      code6:'',
      isDisabled:true,
      isFieldModal:false,
      verificationCodes:[],
      isLoading:false,
      notify:'',
    };
  },
  validations() {
    return {
      userInfo: {
        first_name: {
          required: helpers.withMessage("first name can not be empty", required)
        },
        last_name: {
          required: helpers.withMessage("last name can not be empty", required)
        },
        phone_no: {
          required: helpers.withMessage(
            "phone number can not be empty",
            required
          ),
          min: helpers.withMessage("invalid phone number", minLength(9)),
          max: helpers.withMessage("invalid phone number", maxLength(10))
        },
        birth_date: {
          required: helpers.withMessage("birth date is required", required)
        },
        education_lable: {
          required: helpers.withMessage(
            "your education level is required",
            required
          )
        }
      }
    };
  },
  mounted() {
    this.infoModal = new Modal(document.getElementById("infoModal"));
    this.confirmModal = new Modal(document.getElementById("confirmModal"));
    
  },
  methods: {
    gotoSignup() {
      this.infoModal.show();
    },
    nextToConfirmation(){
      this.infoModal.hide()
      this.confirmModal.show()
    },
    backToInfoModal(){
      this.confirmModal.hide()
      this.infoModal.show()
    },
    setCode(event,elementId){
      if(elementId !== 'codeSix' && event.target.value){
         window.requestAnimationFrame(()=>{
          this.$refs[elementId].focus()
          this.verificationCodes.push(event.target.value)
         })
      }
      else if(elementId === 'codeSix'){
        document.getElementById('code6').blur()
        this.verificationCodes.push(event.target.value)
        this.isDisabled = false
        console.log('length of code = ', this.verificationCodes.length)

      }
    },
    confirmVerification(){
     if(this.verificationCodes.length*1 === 6){
         this.isLoading = true
         try{
          this.confirmModal.hide()
        this.isFieldModal = true
      // var response = await apiClient.post('api/verify',{code:this.verificationCodes.toString()})
      // if(response.status === 200){
      //   this.confirmModal.hide()
      //   this.fieldModal.show()
      // }
         }
         finally{
      this.isLoading = false
     }
     }
    },
    selectInterest(fieldId,elementId){
document.getElementById(elementId).style.backgroundColor = '#002f5d'
console.log('index ==',fieldId)
    },
    registerUser(){}
    
  }
};
</script>
<style scoped>
nav {
  min-width: 100%;
  max-width: 100%;
  margin: 0%;
  padding: 0%;
  position: relative;
}
nav .navBakgound {
  min-width: 100%;
  max-width: 100%;
  min-height: 4.5rem;
  padding: 0%;
}
.naveContainer {
  width: 100%;
  /* max-width: 90%; */
  position: absolute;
  top: 20%;
  color: #fff;
}

.logo {
  min-width: 2rem;
  max-width: 2rem;
  height: auto;
  /* max-height: 3rem; */
}
.logoMarker {
  min-width: 9rem;
  max-width: 9rem;
}
.profileBtn {
  background-color: #1d213a;
  box-shadow: none !important;
}
.langBtn {
  background: none;
  box-shadow: none !important;
}
.smallNav {
  background-color: #002f5d !important;
  min-width: 100%;
  max-width: 100%;
  min-height: 4.5rem;
  margin: 0%;
}
.profBtn {
  background: none;
  border: none;
}

/* for sign up */
.signUp {
  position: absolute;
  top: 10%;
  text-align: left;
}
.fieldSelectionModal{
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 10%;
  background-color: rgba(0, 0, 0,0.69);
}
.fieldContainer{
  width: 70%;
  height: 100%;
  margin: auto;
background-color: #1d213a;
  color: #fff;
  overflow-y: auto;
}
input,select{
  background-color: #1d213a;
  color: #fff;
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
.backBtn {
  background: none;
  border: none;
  box-shadow: none !important;
}
.resendCode {
  color: #f4480a;
  background: none;
  border: none;
}
.confirmBtn {
  background-color: #f4480a;
  color: #fff;
  border-radius: 10rem;
}
.interestselection:hover{
  /* border-radius: 10rem; */
  cursor: pointer;
}
@media(max-width: 768px){
  .fieldContainer{
    width: 100%;
  }
}
</style>