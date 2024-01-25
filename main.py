from sqlalchemy import create_engine, ForeignKey, Column, Integer, String, MetaData
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os

metadata = MetaData()

url = os.environ.get('DB_URL')

engine = create_engine(
   url,
    isolation_level="SERIALIZABLE",
)

metadata.reflect(bind=engine)

climbing_data = metadata.tables['climbing_data']


with engine.connect() as conn:
    result = conn.execute(climbing_data.select())
    for row in result:
        print(row)