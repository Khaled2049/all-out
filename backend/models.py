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