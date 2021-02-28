<template>
  <div class="inner">
    <h3>Get in touch</h3>
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="error-message">
        <p v-show="!email.valid">Oh, please enter a valid email address.</p>
      </div>
      <div class="success" v-if="savingSuccessful">FORM SUBMITTED SUCCESFULLY</div>

      <div class="field half first">
        <label for="name">Name</label>
        <input name="name" id="name" type="text" placeholder="Name">
      </div>
      <div class="field half">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          :class="{ email , error: !email.valid }"
          v-model="email.value"
        >
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
      </div>
      <ul class="actions">
        <li>
          <input value="Send Message" class="button alt" type="submit">
        </li>
      </ul>
    </form>

    <div class="copyright">
      &copy; Untitled. Design:
      <a href="https://templated.co">TEMPLATED</a>. Images:
      <a href="https://unsplash.com">Unsplash</a>.
    </div>
    <!-- <div class="debug">
      <pre><code>{{ $data }}</code></pre>
    </div>-->
  </div>
</template>


<script>
import emailjs from "emailjs-com";

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export default {
  data: function() {
    return {
      savingSuccessful: false,
      email: {
        value: "jo@hnd.oe",
        valid: true
      },
      submitted: false
    };
  },
  mounted() {
    this.sendEmail;
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_9m0ov8l",
          "template_y5ltmwv",
          e.target,
          "user_gwqH6JbsyVbX9OgveTgfJ"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            self.savingSuccessful = true;
          },
          error => {
            console.log("FAILED...", error);
            this.savingSuccessful = false;
          }
        );
    },
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
};
</script>

<style>
.error-message {
  height: 35px;
  margin: 50px;
}
.error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
}

.error {
  border-color: #e94b35 !important;
}
</style>
