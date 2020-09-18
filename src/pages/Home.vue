<template>
<!-- <body>
<div class="container1">
    
<h1>NXB ledger </h1>
<h3>welcome to ledger app</h3>
   <router-link to="login" tag="button" class="btn btn-primary btn-fill">Login</router-link><br><br>
      <router-link to="signup" tag="button" class="btn btn-primary btn-fill">signup</router-link>
</div>
</body> -->

<body>
  <div class="container body">
    <div class="login-form">
      <h2 class="text-center"></h2>
      <form >
        <div class="avatar">
          <router-link to="home">
            <img
              src="https://www.nextbridge.pk/wp-content/uploads/2016/05/NB-logo-for-NB-website.png"
              alt
            />
          </router-link>
        </div>
        <h3>Welcome to NXB Ledger App</h3>
        <p>You can use this app to maintain record of daily transactions with different suppliers.</p>
        <div class="btn-group">
        <router-link to="login" tag="button" class="btn ">Login</router-link>		&nbsp;  &nbsp;	&nbsp;
      <router-link to="signup" tag="button" class="btn">signup</router-link>
        </div>

        <!-- <div class="form-group">
          <input type="text" class="form-control input-lg" name="email" placeholder="email" required="required" />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control input-lg"
            name="password"
            placeholder="Password"
            required="required"
		   
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
          Already signup
          <router-link to="login">Login</router-link>
        </p> -->
      </form>
    </div>
  </div>
</body>

</template>


<script>
  

</script>
<style  scoped>
body{

     background-image: url("https://images.wallpaperscraft.com/image/board_black_line_texture_background_wood_55220_1280x720.jpg");
}

	/* .container1 {
        
		width: 380px;
        margin: 0 auto;
        color:rgb(22, 22, 22);
        background:rgb(214, 214, 214)
       
	} */


    ::placeholder {
  color: rgb(160, 52, 52);
  opacity: 1; /* Firefox */
}
/* body {
  color: #0099ff;
  background: #eeeeee;
  font-family: "Roboto", sans-serif;
} */
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
  color: #080808;
  border-radius: 4px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form .btn {
  font-weight: bold;
  background: #ace79a;
  border: none;
  margin-bottom: 20px;
   color:black,
}
.login-form .btn:hover,
.login-form .btn:focus {
  background: #80b6ec;
  outline: none !important;
}
.login-form a {
  color: #000000;
}
.login-form form a {
  color: #000000;
}
.login-form a:hover,
.login-form form a:hover {
  text-decoration: underline;
}
.hint-text {
  color: rgb(202, 12, 12);
  text-align: center;
}
.form-footer {
  padding-bottom: 15px;
  text-align: center;
}
.btn{
    color:black !important
}

</style>
