# 🌿 VirkshaRakshak – AI-Driven Plant Disease Detection System

![VirkshaRakshak Banner](https://your-image-or-logo-url-if-any)

## 📌 Overview

Agriculture plays a vital role in sustaining the economy and livelihood of millions. However, **plant diseases** are a persistent threat that leads to reduced crop yields and farmer income.  
**VirkshaRakshak** is a full-stack AI-powered system that uses **Convolutional Neural Networks (CNNs)** to detect plant diseases from leaf images and provides actionable insights through a dynamic, user-friendly website.

---

## 🚀 Features

### 🌐 Web Application

- **Home Page** – Introduction to the platform
- **Role-Based Authentication** – Secure login/signup for users and admins
- **Image Upload & Diagnosis** – Upload leaf images and detect diseases
- **Result Page** – Shows the prediction result with confidence score
- **History Page** – Track previous diagnoses
- **FAQ Page** – Common questions answered
- **Feedback Module** – Collect user feedback for improvements
- **Interactive Plant Disease Database** – Diseases, symptoms, and treatments

### 📈 Advanced Capabilities

- **Graphical Reports** – Visualize disease patterns and diagnosis frequency
- **Leaf Detection Check** – Classifies whether an image contains a valid leaf before diagnosis
- **Email Alert System** – Automatically sends diagnosis results and alerts via email
- **Admin Dashboard** – For viewing user activity, diagnosis stats, and managing content

### 💡 Optional Add-ons

- ✅ Blog/Resources Section
- ✅ Live Chat Support
- ✅ Mobile App Integration (via REST APIs)
- ✅ Direct Model Interaction – Load models, tweak parameters, and infer without APIs

---

## 🧠 AI Model

- **Model Used**: `mobilenet_v2_1.0_224-finetuned-plantdisease`
- **Framework**: TensorFlow/Keras
- **Deployment**: Hugging Face Inference API with secure token access

---

## 📁 Folder Structure

├── backend/
│ ├── controllers/
│ ├── models/
│ ├── queue/
│ ├── routes/
│ ├── uploads/
│ ├── utils/
│ ├── .env
│ ├── .gitignore
│ └── diagnosis_api.py
├── frontend/
│ ├── components/
│ ├── public/
│ ├── src/
│ ├── .gitignore
│ ├── vite.config.js
│ └── index.html
├── leaf_classification_model/
│ ├── plant_disease_detector.ipynb
│ ├── model files
│ └── README.md


---

## 🔧 Tech Stack

### 📦 Backend
- Node.js + Express
- Python (for model interaction)
- MongoDB (Database)
- Nodemailer (for emails)
- JWT (Authentication)

### 🎨 Frontend
- React + Vite
- Axios (for API calls)
- Chart.js or Recharts (for graphs)

### 🧠 AI Model
- TensorFlow + Keras
- Hugging Face for deployment
- OpenCV (for leaf detection, if applied)

---

## 🧪 How to Run

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Jashwanthallenki/VirkshaRakshak.git
cd VirkshaRakshak
BACKEND
cd backend
npm install
# Create a .env file and add your variables (MongoDB URI, Hugging Face token, etc.)
node diagnosis_api.py  # if using Python API
npm start
FRONTEND
cd ../frontend
npm install
npm run dev
🔐 Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
HF_TOKEN=your_huggingface_token
EMAIL_USER=your_email
EMAIL_PASS=your_password

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
