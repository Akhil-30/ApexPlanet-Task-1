function changeContent(page) {
	var contentDiv = document.getElementById('content');
		
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is the main page of my portfolio.
				</p>
				<p>
					Explore the different sections using
					the navigation menu.
				</p>
			`;
			break;
		case 'about':
			
			contentDiv.innerHTML = `
				<h2>About Me</h2>
				<p>
					You get to know more about the projects I am working on.
				</p>
				<p>
					I'm a passionate and aspiring AI engineer.
				</p>
				<p>
					My favourite superhero is Batman!
				</p>
				<img src=
"https://resizing.flixster.com/YDdRgWm1dsAAffl-U99wOf9v6fQ=/206x305/v2/https://resizing.flixster.com/HUwAlW1QAya1vlIePUDv3kdzhIE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc1OGFlMDI0LTE1ZTEtNDE4ZS04Y2RmLWNjYzcyOWQyZmMyNi5qcGc=">
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Contact Me</h2> 
				<p>
					Feel free to reach out to me!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}