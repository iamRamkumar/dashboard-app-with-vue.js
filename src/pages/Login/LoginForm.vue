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
      alert(JSON.stringify(this.form))
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
