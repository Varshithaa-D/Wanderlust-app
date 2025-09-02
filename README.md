# Wanderlust App  

A full-stack web application inspired by **Airbnb**, where users can explore listings, create their own stays, and leave reviews.  

## Features  
- **User Authentication** (Signup, Login, Logout) with Passport.js  
- **Create, Edit, Delete Listings** 
- **Review System** – users can leave ratings & reviews  
- **Search Functionality** to find listings by keywords  
- **Image Uploads** with Cloudinary  
- **Session & Flash Messages** for a smooth UX  
- **Responsive UI** with Bootstrap 5  

---

##  Tech Stack  

- **Frontend:** EJS, Bootstrap, CSS, JS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** Passport.js, express-session  
- **Image Storage:** Cloudinary & Multer  
- **Utilities:** dotenv, connect-flash  

---

## Project Structure  

```
MAJORPROJECT/
│── app.js              # Main entry point
│── schema.js           # Mongoose Schemas
│── cloudConfig.js      # Cloudinary Config
│── middleware.js       # Custom middlewares
│── .env                # Environment variables
│
├── controllers/        # Controller logic
├── routes/             # Express routes
├── models/             # Database models
├── views/              # EJS templates
│   ├── listings/       # Listing pages
│   ├── users/          # Signup/Login
│   ├── includes/       # Navbar, Footer, etc.
│   └── layouts/        # Boilerplate
│
├── public/             # Static assets (css, js, images)
└── uploads/            # Temporary uploads
```

---

##  Installation & Setup  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/varshitha-d-123/Wanderlust-app.git
   cd wanderlust-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  

4. **Run the app**  
   ```bash
   nodemon app.js
   ```
   Then open 👉 `http://localhost:3000`  

---

## Future Improvements  
- Add Google Maps integration for location  
-  Payment Gateway (Stripe/PayPal)  
-  Mobile-first design improvements  

---
 
Built with ❤️ by [Varshitha D](https://github.com/varshitha-d-123)  
