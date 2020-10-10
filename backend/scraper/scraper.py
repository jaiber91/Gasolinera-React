"""
Created By Carlos Vargas
"""

import requests
from bs4 import BeautifulSoup as bs
from selenium import webdriver
import time
import os
import parse_info as parser
import insert

url = 'https://datos.gob.mx/busca/dataset/estaciones-de-servicio-gasolineras-y-precios-finales-de-gasolina-y-diesel'

r = requests.get(url)

#Create the BS
soup = bs(r.text, 'html.parser')

#Options to modify the Download directory
timestr = time.strftime("%Y%m%d")
options = webdriver.ChromeOptions()

localdir = os.path.abspath(os.getcwd())

prefs = {
    "download.default_directory": localdir + r"\download_files\file_"+timestr,
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
}

options.add_experimental_option('prefs', prefs)

#This code disables the download warning
options.add_argument("--safebrowsing-disable-download-protection")
options.add_argument("safebrowsing-disable-extension-blacklist")
options.add_argument("--headless") #Hide the Browser

#Create the driver for Selenium
driver = webdriver.Chrome(executable_path='driver/chromedriver.exe', options = options)
driver.get(url)

if __name__ == "__main__":
    path = localdir + r"\download_files\file_"+timestr

    #Get the buttons
    buttons = driver.find_elements_by_xpath('//ul[@class="dropdown-container"]')

    #Download the files
    for button in buttons:
        download_button = button.find_element_by_xpath('.//div[@class="row"]/a')
        download_button.click()

    #Wait until the files are downloaded
    time.sleep(7)

    #Close the Driver
    driver.close()

    #Run the Parser
    print("\n\nParsing the Data...")
    parser.run_parser(path)

    #Insert the Data in the DB
    new_connection = insert.connection()
    insert.insert(new_connection, path)
