import json
import psycopg2

# Your PostgreSQL connection string
conn_string = "dbname='lfatfuwa' user='lfatfuwa' host='drona.db.elephantsql.com' password='CYh7yEyWTsxaSlkn0BqnCf6js2EDuOKe'"

print("Connecting to the PostgreSQL database...")
# Connect to your PostgreSQL database
conn = psycopg2.connect(conn_string)
cur = conn.cursor()
print("Connected successfully.")

# Path to your JSON file
json_file_path = 'hike_trails.json'

print(f"Loading data from {json_file_path}...")
# Load the JSON data from the file
with open(json_file_path, 'r') as file:
    data = json.load(file)
print("Data loaded successfully.")

# Track the number of inserted rows
inserted_rows = 0

# Iterate through each feature in the JSON data
for feature in data['features']:
    props = feature['properties']
    geom = feature['geometry']['coordinates']
    # Insert data into the 'trailheads' table
    cur.execute("""
        INSERT INTO trailheads (feature_id, place_id, name, alt_name, type, bathrooms, fee, water, manager, longitude, latitude)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (props['feature_id'], props['place_id'], props['name'], props['alt_name'], props['type'],
          props['bathrooms'], props['fee'], props['water'], props['manager'], geom[0], geom[1]))
    inserted_rows += 1
    if inserted_rows % 10 == 0:  # Print feedback every 10 rows
        print(f"Inserted {inserted_rows} rows...")

# Commit the transaction to save changes to the database
conn.commit()
print(f"Successfully inserted {inserted_rows} rows into the database.")

# Close the cursor and connection to clean up
cur.close()
conn.close()
print("Database connection closed.")
