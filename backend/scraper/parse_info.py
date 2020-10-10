"""
Created By Carlos Vargas
"""

from bs4 import BeautifulSoup as bs, NavigableString
from selenium import webdriver
import lxml
import json

def parser_data(xml_path):
    """
    This function reads the XML files
    """
    content = []

    #Read the XML
    with open(xml_path, encoding="utf8") as file:
        content = file.read()
        file.close()
        content = "".join(content)
        bs_content = bs(content, 'lxml')     

    return bs_content

def replace(data_places, data_prices):
    """
    This function finds the data and then parse it
    """
    places = []
    prices = []

    #Extrac the data from the Places and insert into a new Dict
    for place in data_places.find_all("place"):
        #NavigableString extract the text from the Class in the XML file
        content = [desc.strip() for desc in place.descendants if type(desc) == NavigableString]

        #Insert the data in the Dict
        places.append({
            'place_id': place.get("place_id"), 
            'name': content[1],  
            'location':{
                'latitud': content[6],
                'longitud': content[8]
                }
        })

    #Extrac the data from the Prices and insert into a new Dict
    for price in data_prices.find_all("place"):
        #NavigableString extract the text from the Class in the XML file
        content = [desc.strip() for desc in price.descendants if type(desc) == NavigableString]

        #Verify the values and insert in the Dict
        if len(content) == 7:
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'regular': content[1],
                    'premium': content[3],
                    'diesel': content[5]
                    }
            })
        elif price.find("gas_price", attrs={"type": "regular"}) and price.find("gas_price", attrs={"type": "premium"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'regular': content[1],
                    'premium': content[3]
                    }
            })
        elif price.find("gas_price", attrs={"type": "regular"}) and price.find("gas_price", attrs={"type": "diesel"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'regular': content[1],
                    'diesel': content[3]
                    }
            })
        elif price.find("gas_price", attrs={"type": "premium"}) and price.find("gas_price", attrs={"type": "diesel"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'premium': content[1],
                    'diesel': content[3]
                    }
            })
        elif price.find("gas_price", attrs={"type": "regular"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'regular': content[1]
                    }
            })
        elif price.find("gas_price", attrs={"type": "premium"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'premium': content[1]
                    }
            })
        elif price.find("gas_price", attrs={"type": "diesel"}):
            prices.append({
                'place_id': price.get("place_id"), 
                'price':{
                    'diesel': content[1]
                    }
            })

    return places, prices

def run_parser(path):
    """
    Where the magic begins
    """
    data_places = parser_data(path + r"\places.xml")
    data_prices = parser_data(path + r"\prices.xml")
    
    data = replace(data_places, data_prices)

    json_places = json.dumps(data[0])
    json_prices = json.dumps(data[1])

    with open(path + r"\places.json", "w") as json_file:
        json_file.write(json_places)

    with open(path + r"\prices.json", "w") as json_file:
        json_file.write(json_prices)
