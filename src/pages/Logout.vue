<template>
<div>
<h3>you are successfully logout.</h3>
<p>go to home page</p>
</div>
</template>

<script>
  export default {

	   data() {
    return {
    
      User: {
		  name:'',
        email: "",
		password: "",
		

      },
    };
  },

  methods: {
    logout() {
    //    alert('Your data: ' + JSON.stringify(this.User));
      const baseURI = "http://127.0.0.1:8000/api/logout";
	  this.$http.post(baseURI, this.User)
	  .then((response) => {
	//   const token = response.data.token;
	//   $setItem('auth',token);
		//   localStorage.setItem('auth',token);
		   localStorage.setItem('isAuthenticated','false');
		//   alert(localStorage.auth);
		//   alert($getItem('auth'));
		console.log(response.data);
		// this.$router.push("/login");
		// this.$router.go();
      });
    },
  },

  created (){
      this.logout();
  }
   
  }

</script>
<style scoped>

::placeholder {
  color: rgb(59, 59, 59);
  opacity: 1; /* Firefox */
}
body {
		color: #0099ff  ;
		background: #eeeeee;
		font-family: 'Roboto', sans-serif;
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
    .form-control, .btn {        
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
		color: #000000;
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
	.login-form .btn:hover, .login-form .btn:focus {
		background: #0099ff;
        outline: none !important;
	}
	.login-form a {
		color: #0099ff;
	}	
	.login-form form a {
		color: #0099ff;
	}
	.login-form a:hover, .login-form form a:hover {
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
