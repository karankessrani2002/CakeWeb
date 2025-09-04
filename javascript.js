
			function validate() {
				var name = document.getElementById('name');
				var email = document.getElementById('email');
				var message = document.getElementById('message');

				if (name.value === "") {
					alert("Please Enter your name");
				}  else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
					alert("Please Enter Name Correctly (only alphabetic characters allowed)");
				} else if (email.value === "") {
					alert("Please Enter Email id");
				} else if (!/\S+@\S+\S+/.test(email.value)) {
					alert("Please Enter Valid Email Address");
				} else if (message.value === "") {
					alert("Please Enter Message");
				}
				else{
					alert("Thanks for Your Feedback, we will contact you soon!")
				}
			}