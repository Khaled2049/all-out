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