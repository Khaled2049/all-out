from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from database import Base


class Climbs(Base):
    __tablename__ = 'climbs'
    id = Column(String, primary_key=True, index=True)
    route_name = Column(String, index=True)
    first_ascent = Column(String, index=True)
    description = Column(String, index=True)
    location = Column(String, index=True)
    protection = Column(String, index=True)
    yds = Column(String, index=True)
    parent_sector = Column(String, index=True)
    left_right_seq = Column(String, index=True)
    mp_route_id = Column(String, index=True)
    mp_sector_id = Column(String, index=True)
    longitude = Column(String, index=True)
    latitude = Column(String, index=True)


class Hikes(Base):
    __tablename__ = 'hike_data'
    id = Column(String, primary_key=True, index=True)
    feature_id = Column(String, index=True)
    place_id = Column(String, index=True)
    name = Column(String, index=True)
    alt_name = Column(String, index=True)
    type = Column(String, index=True)
    bathrooms = Column(String, index=True)
    fee = Column(String, index=True)
    water = Column(String, index=True)
    manager = Column(String, index=True)
    longitude = Column(String, index=True)
    latitude = Column(String, index=True)