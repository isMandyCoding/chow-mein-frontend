<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Checkout
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Checkout Form
        </v-card-title>
        <!-- form start -->
        <v-container>
            <v-layout>
                <v-flex>
                    <template>
            <form>
                <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                v-model="customerPhone"
                :error-messages="customerPhoneErrors"
                label="Phone Number"
                required
                @input="$v.customerPhone.$touch()"
                @blur="$v.customerPhone.$touch()"
                ></v-text-field>
                <!-- <v-btn @click="dialog = false">Back to Menu</v-btn> -->
                <v-btn @click="submit">Continue to Checkout</v-btn>
                <v-btn @click="clear">Clear</v-btn>
            </form>
            </template>
            <!-- form -->

                </v-flex>
            </v-layout>
        </v-container>
        
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "CheckoutForm",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(255) },
    email: { required, email },
    customerPhone: { required }
  },

  data: () => ({
    // dialog: false,
    name: "",
    email: "",
    customerPhone: ""
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    customerPhoneErrors() {
      const errors = [];
      if (!this.$v.customerPhone.$dirty) return errors;
      !this.$v.customerPhone.required &&
        errors.push("Phone number is required.");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      let orderInfo = {
        customerName: this.name,
        customerEmail: this.email,
        customerPhone: this.customerPhone
      };
      console.log(orderInfo);
      this.$store.dispatch("submitOrderForm", orderInfo);
      console.log(this.$store.state.order);
      this.$router.push("/checkout");
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.customerPhone = "";
    }
  }
};
</script>