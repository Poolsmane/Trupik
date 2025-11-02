from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models import listing  # ✅ import your new listings route


# =============================
# 🚀 FASTAPI APP INITIALIZATION
# =============================
app = FastAPI(
    title="Trupik API",
    description="Backend for Trupik — the trekking & adventure marketplace",
    version="1.0.0"
)


# =============================
# 🌍 CORS (Frontend Connection)
# =============================
# Allow your frontend (Next.js) to fetch data from this backend
origins = [
    "http://localhost:3000",      # Next.js local dev
    "http://127.0.0.1:3000",      # Alternate local
    "https://trupik.com",         # Future production domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =============================
# 📦 ROUTE REGISTRATION
# =============================
app.include_router(listing.router)


# =============================
# 🏠 ROOT ENDPOINT
# =============================
@app.get("/")
def root():
    return {"message": "Welcome to Trupik API 🚀"}


# =============================
# ⚙️ DEV ENTRY POINT
# =============================
# Run with: uvicorn app.main:app --reload
