import pandas as pd

def extract_text(value):
    return value[0] if isinstance(value, list) and len(value) == 1 else None


def extract_yds(row):
    return row.get('YDS')


def extract_longitude(row):
    return row[0] if isinstance(row, list) and len(row) == 2 else None

def extract_latitude(row):
    return row[1] if isinstance(row, list) and len(row) == 2 else None

def clean_data():
    df = pd.read_json("./openbeta-usa-routes-aug-2020.zip", lines=True) 

    # remove {}
    df = df[df['grade'] != {}]

    # remove all rows without YDS 

    df = df[df['grade'].apply(lambda x: 'YDS' in x)]


    df['YDS'] = df['grade'].apply(extract_yds)

    df.drop(columns=['grade'], inplace=True)

    all_keys = set().union(*(d.keys() for d in df['type']))

    # Create separate columns for each key and fill them with boolean values
    for key in all_keys:
        df[key] = df['type'].apply(lambda x: x.get(key, False))

    # Clean the type column
    df.drop(columns=['type'], inplace=True)

    df['description'] = df['description'].apply(extract_text)
    df['location'] = df['location'].apply(extract_text)
    df['protection'] = df['protection'].apply(extract_text)
    df.drop(columns=['safety'], inplace=True)
    df = df.rename(columns={'fa': 'first_ascent'})

    all_keys = set().union(*(d.keys() for d in df['metadata']))

    # Create separate columns for each key and fill them with boolean values
    for key in all_keys:
        df[key] = df['metadata'].apply(lambda x: x.get(key, False))

    # Clean the type column
    df.drop(columns=['metadata'], inplace=True)

    # Create new columns 'longitude' and 'latitude' using the extracted values
    df['longitude'] = df['parent_lnglat'].apply(extract_longitude)
    df['latitude'] = df['parent_lnglat'].apply(extract_latitude)

    # Drop the original 'parent_lnglat' column
    df.drop(columns=['parent_lnglat'], inplace=True)

    return df

data = clean_data()

