# url_shortener/utils.py

from hashids import Hashids

def generate_short_code():
    hashids = Hashids(salt="your_salt", min_length=6)
    # Generate short code using long URL's primary key
    return hashids.encode(123)  # Use your URL's primary key here
