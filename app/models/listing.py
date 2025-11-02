from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/treks", tags=["Treks"])

# Temporary static data (mock)
TREKS = [
    {
        "id": 1,
        "name": "Hampta Pass Trek",
        "location": "Himachal Pradesh",
        "duration": "5 Days",
        "difficulty": "Moderate",
        "price": 8999,
        "image": "/images/hampta_pass.jpg",
        "description": "A scenic crossover trek from Kullu to Spiti valley with lush meadows, wildflowers, and snow bridges.",
    },
    {
        "id": 2,
        "name": "Kedarkantha Trek",
        "location": "Uttarakhand",
        "duration": "6 Days",
        "difficulty": "Easy–Moderate",
        "price": 7499,
        "image": "/images/kedarkantha.jpg",
        "description": "A perfect winter trek with 360° Himalayan views and charming pine forests.",
    },
    {
        "id": 3,
        "name": "Goechala Trek",
        "location": "Sikkim",
        "duration": "10 Days",
        "difficulty": "Challenging",
        "price": 13999,
        "image": "/images/goechala.jpg",
        "description": "Spectacular views of Kanchenjunga and a truly remote Himalayan experience.",
    },
]


@router.get("/")
def get_all_treks():
    """
    Fetch all trek listings (static for now)
    """
    return {"count": len(TREKS), "data": TREKS}


@router.get("/{trek_id}")
def get_trek_by_id(trek_id: int):
    """
    Fetch single trek by ID
    """
    trek = next((t for t in TREKS if t["id"] == trek_id), None)
    if not trek:
        raise HTTPException(status_code=404, detail="Trek not found")
    return trek
