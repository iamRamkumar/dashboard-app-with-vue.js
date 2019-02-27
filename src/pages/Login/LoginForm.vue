<template>
  <div>
    <br />
    <b-row align-h="center">
      <!--<b-col>-->
        <b-card  header="Login" header-bg-variant="primary" header-class="font-weight-bold text-white" header-border-variant="info" bg-variant="default" border-variant="info" text-variant="black" class="">
          <b-card-body>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" autocomplete="off">
              <b-form-group
                id="userNameGroup"
                label-for="userName"
              >
                <b-form-input type="text" id="userName" v-model="form.userName" required placeholder="User Name"></b-form-input>
              </b-form-group>
              <b-form-group
                id="passwordGroup"
                label-for="password"
              >
                <b-form-input type="password" id="password" v-model="form.password" required placeholder="Password"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                  <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
                    <small class="text-capitalize font-weight-light">Remember me</small>
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <p v-if="form.errors.length">
                <b class="text-danger">Please correct the following error(s):</b>
                <ul>
                  <li class="text-danger" :key="error" v-for="error in form.errors">{{ error }}</li>
                </ul>
              </p>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      <!--</b-col>-->
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue'
import BForm from 'bootstrap-vue/es/components/form/form'
import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import {USER} from '@/data/constants'

Vue.component({
  'b-form': BForm,
  'b-form-group': BFormGroup,
  'b-form-input': BFormInput
})

export default {
  name: 'LoginForm',
  data: function () {
    return {
      form: {
        errors: [],
        userName: '',
        password: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.form.errors = []
      if (this.form.userName === USER.username && this.form.password === USER.password) {
        localStorage.setItem('user', this.form.userName)
        this.$router.push('/')
      } else {
        this.form.errors.push('UserName/Password Invalid')
      }
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>
