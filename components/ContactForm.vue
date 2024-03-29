<template>
  <form class="mt-2 p-4" name="contact">
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
        <input
          id="phone"
          type="text"
          name="phone"
          tabindex="-1"
          autocomplete="off"
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
          class="h-12 bg-secondary text-black w-32 rounded-lg text-xl ml-2 hover:bg-main-blue hover:text-white align-center"
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
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const { $axios } = useContext()
    const firstname = ref<string>('')
    const lastname = ref<string>('')
    const email = ref<string>('')
    const message = ref<string>('')
    const phone = ref<string>('')
    const error = ref<string>('')
    const success = ref<string>('')

    let timestampStart: Date = new Date()

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

    const onSubmit = async () => {
      let isError = false
      error.value = ''
      success.value = ''

      const timestampEnd: Date = new Date()
      let timeDiffSeconds: number =
        (timestampEnd.getTime() - timestampStart.getTime()) / 1000

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

      if (!isError && timeDiffSeconds > 7) {
        timeDiffSeconds = 0
        timestampStart = new Date()
        const res = await $axios.post(`/.netlify/functions/contact`, {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          message: message.value,
          phone: phone.value,
        })

        if (res.status === 200) {
          success.value = 'Le message a bien été envoyé'
          clearFields()
          setTimeout(() => {
            success.value = ''
          }, 5000)
        } else {
          error.value = "Une erreur est survenue lors de l'envoi du message"
        }
      }
      setTimeout(() => {
        error.value = ''
      }, 5000)
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

#phone {
  @apply hidden;
}
</style>
