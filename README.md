
# E-Commerce Fullstack App with React.js and Django REST Framework

This is a full-stack e-commerce web application combining a React.js frontend with a Django REST Framework backend. The app includes features like user authentication, product browsing, cart management, order placement, and payment integration (e.g., bKash). It is responsive and designed for a smooth user experience.

## Features

- User authentication (signup, login, logout)
- Product browsing and filtering by categories
- Cart management: add, update, or remove products
- Order placement and payment integration (e.g., bKash)
- Admin panel for managing products and orders
- Responsive UI for mobile and desktop

## Technologies Used

### Frontend

- **React.js**: JavaScript library for building user interfaces
- **Axios**: For making HTTP requests to the backend
- **React Router**: For navigation and routing
- **Redux**: For global state management (optional)
- **Tailwind CSS**: For styling and responsive design

### Backend

- **Django**: Python web framework
- **Django REST Framework**: For building the API
- **PostgreSQL/MySQL**: For the database (configurable)
- **Simple JWT**: For user authentication via tokens
- **bKash API**: For payment integration (optional)

## Prerequisites

Ensure you have the following installed:

- Node.js & npm (for the frontend)
- Python & pip (for the backend)
- PostgreSQL/MySQL (for the database)
- Git

## Installation

### Clone the repository

```bash
git clone https://github.com/DevMosaicRakib/Dbd-fullstack.git
cd Dbd-fullstack
```

### Backend Setup

1. **Navigate to the `backend/` directory:**

   ```bash
   cd decobdApi
   ```

2. **Create a virtual environment and install dependencies:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `decobdApi/` directory and add the following:

   ```env
   SECRET_KEY=your_django_secret_key
   DEBUG=True
   DATABASE_URL=your_database_url
   BKASH_APP_KEY=your_bkash_app_key
   BKASH_APP_SECRET=your_bkash_app_secret
   ```

4. **Run database migrations:**

   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (admin account):**

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the backend server:**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the `frontend/` directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `frontend/` directory and add the following:

   ```env
   REACT_APP_API_URL=http://localhost:8000/api
   REACT_APP_BKASH_SANDBOX=true
   REACT_APP_BKASH_BASE_URL=https://sandbox.bkash.com
   ```

4. **Run the frontend development server:**

   ```bash
   npm start
   ```

### API Endpoints

Ensure the backend API is running, and you can access the following endpoints:

| Method | Endpoint               | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/api/products/`        | Fetch all products                 |
| POST   | `/api/cart/`            | Add items to cart                  |
| POST   | `/api/order/`           | Create a new order                 |
| POST   | `/api/payment/bkash/`   | Initiate payment with bKash         |
| POST   | `/api/auth/login/`      | User login                         |

## Folder Structure

```bash
.
├── backend/           # Django REST Framework backend
│   ├── manage.py      # Django management script
│   ├── api/           # API app for handling product, cart, order logic
│   ├── settings.py    # Django settings and configurations
│   └── ...
├── frontend/          # React.js frontend
│   ├── src/           # React source code
│   ├── components/    # Reusable components (e.g., ProductCard, Header)
│   ├── pages/         # Pages (e.g., Home, ProductDetail, Cart, Checkout)
│   ├── services/      # Axios service for API calls
│   ├── store/         # Redux store (if using Redux)
│   └── ...
└── README.md          # Project documentation
```

## Running Tests

To run frontend tests:

```bash
cd frontend
npm test
```

To run backend tests:

```bash
cd backend
python manage.py test
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
