### 🛒 Mock E-Com Cart (Vibe Commerce Internship Assignment)

- A simple full-stack shopping cart web app built with the MERN stack (MongoDB, Express.js, React, Node.js) for the Vibe Commerce internship screening.This project demonstrates end-to-end e-commerce flows: viewing products, adding/removing items from cart, viewing totals, and performing a mock checkout — with proper API integration, UI state management, and responsive design.

# Home page
<img width="1873" height="911" alt="Screenshot (57)" src="https://github.com/user-attachments/assets/63ee5cab-6a1b-473d-9b46-2616bfa8fd98" />

# Cart page 
<img width="1920" height="924" alt="Screenshot (58)" src="https://github.com/user-attachments/assets/9c9a8deb-7aec-4951-853e-b8704b2dc03b" />

# Payment Page 
<img width="1280" height="709" alt="Screenshot (59)" src="https://github.com/user-attachments/assets/5745ff32-2c27-43e4-a525-a33001a4cefa" />

```
mock-ecom-cart/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── cartRoutes.js
│   └── controllers/
│       ├── productController.js
│       └── cartController.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
│
└── README.md
```

# ⚡ Getting Started
```
1️⃣ Clone the Repositor

git clone https://github.com/Mayank9370/E-Commerce-Assignment-.git

Backend Setup 
cd backend
run this command : npm install mongoose express dotenv cors

Put these in the .env
PORT=5000
MONGODB_URI="mongodb+srv://mayank..........................y"

To run backend : node index.js

Frontend Setup
cd frontend
npm intsall axios
To run frontend : npm run dev 
```

## Tailwind  Setup

```
cd frontend
npm install tailwindcss @tailwindcss/vite

in the fole  -> vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

in th file index.css
@import "tailwindcss";
```
