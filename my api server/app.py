from flask import Flask
import json 
from myTempDB import *  
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    # return json.dumps(dictionary)
   return get_myMatchesBets()

def get_collection(collectionName):
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb://localhost:27017"
   DB_NAME = "WorldCupProject"
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
   db = client[DB_NAME]
   collection = db[collectionName]
   # Create the database for our example (we will use the same database throughout the tutorial
   return collection

def myFind(collection,query):
    cursor = get_collection(collection).find(query)
    list_cur = list(cursor)
    json_data = json.loads(json_util.dumps(list_cur, indent = 2) )
    return(json_data)

def get_myMatchesBets():
    matches = myFind(collection="Matches", query="")

    # get player bets for each match
    for match in matches:
        mybets = myFind(collection="Bets", query={"matchID": match["matchID"]})[0]
        match["countryABet"] = mybets["countryABet"]
        match["countryBet"] = mybets["countryBet"]      
  
    # get countries A flags for each match
    for match in matches:
        country = myFind(collection="Countries", query={"countryLabel": match["countryALabel"]})[0]
        match["countryAImage"] = country["countryImage"]

    # get countries B flags for each match
    for match in matches:
        country = myFind(collection="Countries", query={"countryLabel": match["countryBLabel"]})[0]
        match["countryBImage"] = country["countryImage"]

    # get player points for each match
    for match in matches:
        mybets = myFind(collection="Bets", query={"matchID": match["matchID"]})[0]
        countryAScore = match["countryAScore"]
        countryBScore = match["countryBScore"]
        countryABet = mybets["countryABet"]
        countryBBet = mybets["countryBet"]
        points = 0
        if countryABet == countryAScore and countryBBet == countryBScore:
            points = 3
        elif countryABet - countryBBet == countryAScore - countryBScore:
            points = 2
        elif countryABet > countryBBet and countryAScore > countryBScore:
            points = 1
        elif countryABet < countryBBet and countryAScore < countryBScore:
            points = 1
        elif countryABet == countryBBet and countryAScore == countryBScore:
            points = 1
        match["points"] = points
        
    return(json.dumps(matches))

# get_myMatchesBets()   