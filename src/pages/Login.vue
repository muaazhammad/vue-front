<template>
<body>
  <div class="container body">
    <div class="login-form">
      <h2 class="text-center">Login</h2>
      <form>
        <div class="avatar">
          <router-link to="home">
            <img
              src="https://www.nextbridge.pk/wp-content/uploads/2016/05/NB-logo-for-NB-website.png"
              alt
            />
          </router-link>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control input-lg"
            name="email"
            placeholder="email"
            required="required"
            v-model="User.email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control input-lg"
            name="password"
            placeholder="Password"
            required="required"
            v-model="User.password"
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-info btn-fill float-right"
            @click.prevent="signin"
          >Sign in</button>
        </div>
        <p class="hint-text">
          Not signup yet ? 
          <router-link to="signup">Signup</router-link>
        </p>
      </form>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      User: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    signin() {
      //    alert('Your data: ' + JSON.stringify(this.User));
      const baseURI = "api/login";
      this.$http.post(baseURI, this.User).then((response) => {
        const token = response.data.token;
        const userId = response.data.user.id;
        localStorage.setItem("auth", token);
        localStorage.setItem("id", userId);
        this.$router.push("/admin/overview");
        this.$router.go();
      })
      .catch(error => {
           alert('Your email or password is invalid');
      });
    },
  },
};
</script>




<style scoped>
::placeholder {
  color: rgb(59, 59, 59);
  opacity: 1; /* Firefox */
}
body {
  color: #0099ff;
  background: #eeeeee;
  font-family: "Roboto", sans-serif;
}
.form-control {
  font-size: 16px;
  background: #f2f2f2;
  box-shadow: none !important;
  border-color: transparent;
}
.form-control:focus {
  border-color: #d3d3d3;
}
.form-control,
.btn {
  border-radius: 2px;
}
.login-form {
  width: 380px;
  margin: 0 auto;
}
.login-form h2 {
  margin: 0;
  padding: 30px 0;
  font-size: 34px;
}
.login-form .avatar {
  margin: 0 auto 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 9;
  background: #0099ff;
  padding: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.login-form .avatar img {
  width: 100%;
}
.login-form form {
  color: #7a7a7a;
  border-radius: 4px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form .btn {
  font-weight: bold;
  background: #4babeb;
  border: none;
  margin-bottom: 20px;
}
.login-form .btn:hover,
.login-form .btn:focus {
  background: #0099ff;
  outline: none !important;
}
.login-form a {
  color: #0099ff;
}
.login-form form a {
  color: #0099ff;
}
.login-form a:hover,
.login-form form a:hover {
  text-decoration: underline;
}
.hint-text {
  color: #999;
  text-align: center;
}
.form-footer {
  padding-bottom: 15px;
  text-align: center;
}
</style>
