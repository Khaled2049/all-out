from db import db

class ClimbModel(db.Model):

    __tablename__ = "climbs"

    id = db.Column(db.String(80), primary_key=True)
    route_name =    db.Column(db.String(80))
    first_ascent =  db.Column(db.String(80))
    description =  db.Column(db.String(80))
    location =     db.Column(db.String(80))
    protection =  db.Column(db.String(80))
    yds =       db.Column(db.String(80))
    # mixed   = db.Column(db.Boolean)
    # sport   = db.Column(db.Boolean)
    # snow   = db.Column(db.Boolean)
    # aid   = db.Column(db.Boolean)
    # tr   = db.Column(db.Boolean)
    # trad    = db.Column(db.Boolean)
    # boulder   = db.Column(db.Boolean)
    # alpine = db.Column(db.Boolean)
    # ice   = db.Column(db.Boolean)
    parent_sector = db.Column(db.String(80))
    left_right_seq = db.Column(db.String(80))
    mp_route_id = db.Column(db.String(80))
    mp_sector_id = db.Column(db.String(80))
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)