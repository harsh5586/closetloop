# ClosetLoop - Fashion Rental & Buying Platform

ClosetLoop is a modern web platform that allows users to rent and buy fashion items from other users, promoting sustainable fashion and community-driven clothing sharing.

## 🌟 Features

### User Features
- **Authentication**: Email/Password, Google, and Facebook login
- **User Dashboard**: Personal dashboard with listings, rentals, and earnings
- **Profile Management**: Complete user profile with avatar and settings
- **Item Browsing**: Browse items by categories (Casual, Party, Wedding, Shoes, Formal, Accessories)
- **Wishlist**: Save favorite items for later
- **Chat System**: Direct messaging between users
- **Notifications**: Real-time notifications for requests and messages

### Business Features
- **Item Listing**: Create detailed listings with multiple images
- **Rental Management**: Set rental prices and manage bookings
- **Sales Management**: Sell items directly through the platform
- **Earnings Tracking**: Monitor your rental and sales income
- **Location-based Search**: Find items near you

### Technical Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Updates**: Live updates using Firebase
- **Image Upload**: Multiple image upload with preview
- **Search & Filter**: Advanced search and filtering capabilities
- **PWA Ready**: Progressive Web App features

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Cloud Storage
  - Cloud Functions
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## 📱 Screenshots

*[Add screenshots of your main pages here]*

## 🚀 Live Demo

Visit the live site: [https://closetloop-92251.web.app](https://closetloop-92251.web.app)

## 📋 Prerequisites

Before you begin, ensure you have:
- A Firebase project set up
- Firebase configuration details
- Modern web browser
- Text editor (VS Code recommended)

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/closetloop.git
cd closetloop
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication (Email/Password, Google, Facebook)
4. Create Firestore Database
5. Enable Cloud Storage
6. Get your Firebase configuration

### 3. Configure Firebase
Update `js/firebase-config.js` with your Firebase configuration:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);
```

### 4. Deploy to Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not already done)
firebase init

# Deploy to Firebase Hosting
firebase deploy
```

### 5. Run Locally
Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## 📁 Project Structure

```
closetloop/
├── index.html              # Homepage
├── login.html              # Login page
├── signup.html             # Signup page
├── dashboard.html          # User dashboard
├── create-listing.html     # Create new listing
├── category.html           # Category browsing
├── item-details.html       # Item details page
├── chat.html               # Chat system
├── profile.html            # User profile
├── wishlist.html           # Wishlist page
├── notifications.html      # Notifications page
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── auth.js             # Authentication logic
│   ├── login.js            # Login page logic
│   ├── auth-state.js       # Auth state management
│   ├── dashboard.js        # Dashboard functionality
│   ├── listings-display.js # Listings display
│   ├── chat.js             # Chat functionality
│   └── ...                 # Other JS files
├── assets/                 # Images and static assets
├── css/                    # Stylesheets
├── firebase.json           # Firebase configuration
├── firestore.rules         # Database security rules
└── README.md
```

## 🔧 Configuration

### Firebase Security Rules
The project includes Firestore security rules in `firestore.rules` that ensure:
- Users can only read public listings
- Users can only modify their own data
- Proper authentication checks

### Environment Variables
Create a `.env` file for local development:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Satyam Goyal**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Firebase for the backend infrastructure
- Tailwind CSS for the beautiful styling
- Font Awesome for the icons
- Unsplash for sample images

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact: your.email@example.com

---

⭐ If you find this project helpful, please give it a star on GitHub! 