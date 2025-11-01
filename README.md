# 🏔️ Trek Marketplace Backend (FastAPI)

A backend service for a **Trek Booking Marketplace**, where users can explore, filter, and book treks across India, while providers can list and manage their treks in real time — inspired by platforms like Airbnb and Zomato.

---

## 📚 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Language** | Python 3.10+ |
| **Framework** | FastAPI |
| **Database** | PostgreSQL |
| **ORM** | SQLAlchemy |
| **Caching / Queue** | Redis + Celery |
| **Storage** | Supabase (for images & files) |
| **Auth** | JWT-based Authentication |
| **Environment** | Local (virtualenv), later Docker for deployment |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/trek-marketplace.git
cd trek-marketplace
```

### 2️⃣ Create a Virtual Environment

```bash
python3 -m venv trupikenv
source trupikenv/bin/activate      # mac/linux
trupikenv\Scripts\activate         # windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

If you don’t have a `requirements.txt` yet, create one with:
```bash
pip freeze > requirements.txt
```

### 4️⃣ Set Up PostgreSQL

```bash
sudo -u postgres psql
CREATE USER trek_user WITH PASSWORD 'trekpass';
CREATE DATABASE trek_marketplace OWNER trek_user;
GRANT ALL PRIVILEGES ON DATABASE trek_marketplace TO trek_user;
\q
```

### 5️⃣ Set Up Redis

For caching and background tasks:
```bash
sudo apt install redis-server -y
sudo systemctl enable redis-server
sudo systemctl start redis-server
redis-cli ping   # should output PONG
```

### 6️⃣ Add Your `.env` File

```
DATABASE_URL=postgresql+psycopg2://trek_user:trekpass@localhost:5432/trek_marketplace
JWT_SECRET=your_secret_key
SUPABASE_URL=https://xyz.supabase.co
SUPABASE_KEY=your_supabase_key
REDIS_URL=redis://localhost:6379
```

### 7️⃣ Run the Application

```bash
uvicorn app.main:app --reload
```

Visit → [http://127.0.0.1:8000](http://127.0.0.1:8000)  
API Docs → [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 8️⃣ Project Structure

```
trek-marketplace/
│
├── app/
│   ├── main.py
│   ├── core/
│   ├── models/
│   ├── schemas/
│   ├── api/
│   ├── services/
│   ├── utils/
│   ├── workers/
│   └── __init__.py
│
├── .env
├── requirements.txt
└── README.md
```

---

### 🧩 Features (Planned)

✅ User Roles:  
- Customer (explore, book, review)  
- Provider (list, update, manage treks)  

✅ Trek Listings & Filters (Season, Difficulty, Price)  
✅ Booking & Payments (Razorpay)  
✅ File Uploads (Supabase or local)  
✅ Real-Time Updates (WebSocket + Redis)  
✅ Provider Dashboard  



### 🧠 Author

**Project Lead:** Kartikeya Patel 
**Inspiration:** Making trekking in India more accessible and authentic 🏞️  
