"""
Created By Carlos Vargas
"""

from pymongo import MongoClient
from pprint import pprint
import json

def connection():
    """
    This function connect to the MongoDB
    """
    client = MongoClient('mongodb+srv://carlos:BW7frkPzzNYAhipD@cluster0.fxmad.mongodb.net/?retryWrites=true&w=majority')
    db = client.gas

    return db

def insert(connection, path):

    places = connection.places
    prices = connection.prices

    #Get the JSON document with the Values
    with open(path + r'\places.json') as json_file:
        places_data = json.load(json_file)

    with open(path + r'\prices.json') as json_file:
        prices_data = json.load(json_file)

    #Insert objects into MongoDB
    try:
        #First we need to Delete all documents to prevent duplicates
        print('Cleaning the BD...')
        delete_places = places.delete_many({})
        delete_prices = prices.delete_many({})

        #Insert new Values
        print('Inserting new values...')
        result = places.insert_many(places_data)
        print('Places were successfully inserted in DB')

        result = prices.insert_many(prices_data)
        print('Prices were successfully inserted in DB')

    except NameError:
        print(f'No objects were inserted {NameError}')
