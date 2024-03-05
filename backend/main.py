from typing import Union, Annotated
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session


app = FastAPI()
models.Base.metadata.create_all(bind=engine)


class ClimbBase(BaseModel):
    id : str
    route_name: str
    first_ascent: str
    description: str
    location: str
    protection : str
    yds: str
    parent_sector: str
    left_right_seq : str
    mp_route_id: str
    mp_sector_id : str
    longitude: str
    latitude : str

class HikeBase(BaseModel):
    id: str
    feature_id: str
    place_id: str
    name: str
    alt_name: str  
    type: str  
    bathrooms: str  
    fee: str
    water: str 
    manager: str
    longitude: str
    latitude : str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]


@app.get("/climbs/{climb_id}")
async def get(climb_id: str, db: db_dependency):
    climb = db.query(models.Climbs).filter(models.Climbs.id == climb_id).first()
    if not climb:
        raise HTTPException(status_code=404, detail="Climb not found")
    return climb

@app.get("/number_of_climbs/{number_of_climbs}")
async def get_climbs(number_of_climbs: int, db: db_dependency):
    climbs = db.query(models.Climbs).limit(number_of_climbs).all()
    return climbs

# list hikes
@app.get("/hikes")
async def get_hikes(db: db_dependency):
    hikes = db.query(models.Hikes).all()
    return hikes

# delete hike
@app.delete("/delete_hikes/{hike_id}")
async def delete_hike(hike_id: str, db: db_dependency):
    hike_to_delete = db.query(models.Hikes).filter(models.Hikes.id == hike_id).first()
    if not hike_to_delete:
        raise HTTPException(status_code=404, detail="Hike not found")
    db.delete(hike_to_delete)
    db.commit()
    return {"detail": "Hike deleted successfully"}

# add hike
@app.post("/add_hike", status_code=201)
async def add_hike(hike_data: Hike, db: db_dependency):
    new_hike = models.Hikes(**hike_data.dict())
    db.add(new_hike)
    db.commit()
    db.refresh(new_hike)
    return new_hike




