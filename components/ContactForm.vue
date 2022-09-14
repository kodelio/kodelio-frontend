<template>
  <form class="mt-2 p-4" name="contact" netlify>
    <div class="flex flex-col text-black">
      <div class="grid md:grid-cols-2 gap-4 md:gap-16 p-2">
        <input
          v-model="lastname"
          type="text"
          placeholder="Nom"
          name="lastname"
        />
        <input
          v-model="firstname"
          type="text"
          placeholder="Prénom"
          name="firstname"
        />
      </div>
      <div class="grid grid-cols-1 p-2">
        <input v-model="email" type="email" placeholder="Email" name="email" />
      </div>
      <div class="grid grid-cols-1 p-2">
        <textarea
          v-model="message"
          rows="5"
          placeholder="Message"
          name="message"
        ></textarea>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between mt-2">
        <button
          type="submit"
          class="h-12 bg-main-blue text-white w-32 rounded-lg text-xl ml-2 hover:bg-secondary hover:text-black align-center"
          @click.prevent="onSubmit"
        >
          Envoyer
        </button>
        <div class="px-2 lg:mt-0 mt-4 text-white">
          <div
            v-show="error !== ''"
            class="bg-red-500 rounded px-4"
            role="alert"
          >
            <div class="flex items-center">
              <div class="py-1">
                <font-awesome-icon
                  icon="exclamation-circle"
                  class="text-4xl h-6 w-6 mr-4"
                />
              </div>
              <p class="text-xl">
                {{ error }}
              </p>
            </div>
          </div>
          <div
            v-show="success !== ''"
            class="bg-green-500 rounded px-4"
            role="alert"
          >
            <div class="flex items-center">
              <div class="py-1">
                <font-awesome-icon
                  icon="check-circle"
                  class="text-4xl h-6 w-6 mr-4"
                />
              </div>
              <p class="text-xl">
                {{ success }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const firstname = ref<string>('')
    const lastname = ref<string>('')
    const email = ref<string>('')
    const message = ref<string>('')
    const error = ref<string>('')
    const success = ref<string>('')

    function isStringValid(str: string) {
      return str && str.length > 0
    }

    function isEmailValid(email: string) {
      return (
        email &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email.toString()
        )
      )
    }

    function clearFields() {
      firstname.value = ''
      lastname.value = ''
      email.value = ''
      message.value = ''
    }

    const onSubmit = () => {
      let isError = false
      error.value = ''
      success.value = ''

      if (!isStringValid(firstname.value)) {
        isError = true
        error.value = 'Veuillez renseigner votre prénom'
      } else if (!isStringValid(lastname.value)) {
        isError = true
        error.value = 'Veuillez renseigner votre nom'
      } else if (!isEmailValid(email.value)) {
        isError = true
        error.value = 'Veuillez renseigner un email valide'
      } else if (!isStringValid(message.value)) {
        isError = true
        error.value = 'Veuillez renseigner un message'
      }

      if (!isError) {
        success.value = 'Le message a bien été envoyé'
        clearFields()
        setTimeout(() => {
          success.value = ''
        }, 5000)
      } else {
        setTimeout(() => {
          error.value = ''
        }, 5000)
      }
    }

    return { firstname, lastname, email, message, error, success, onSubmit }
  },
})
</script>

<style>
input::placeholder {
  @apply text-center;
}

input::placeholder,
textarea::placeholder {
  @apply text-black text-xl;
}

input {
  @apply h-10 rounded-lg text-center text-xl p-2;
}

textarea {
  @apply rounded-lg text-left text-xl p-2;
}
</style>
